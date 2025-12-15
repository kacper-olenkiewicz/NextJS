import path from 'path';
import fs from 'fs/promises';
import { createClient } from '@libsql/client';

const db = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});
const imagesDir = path.join(process.cwd(), 'public', 'images');

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function storeImage(imageFile, slug) {
  if (!imageFile || typeof imageFile === 'string') {
    throw new Error('Brak wybranego zdjęcia.');
  }

  const extension = imageFile.name?.split('.').pop() ?? 'png';
  const fileName = `${slug}-${Date.now()}.${extension}`;
  const filePath = path.join(imagesDir, fileName);

  await fs.mkdir(imagesDir, { recursive: true });
  const buffer = Buffer.from(await imageFile.arrayBuffer());
  await fs.writeFile(filePath, buffer);

  return `/images/${fileName}`;
}

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const result = await db.execute('SELECT * FROM meals');
  return result.rows;
}

export async function getMeal(slug) {
  const result = await db.execute({
    sql: 'SELECT * FROM meals WHERE slug = ?',
    args: [slug],
  });
  return result.rows[0] || null;
}

export async function createMeal(mealData) {
  const sanitized = {
    title: mealData.title?.trim(),
    summary: mealData.summary?.trim(),
    instructions: mealData.instructions?.trim(),
    creator: mealData.creator?.trim(),
    creator_email: mealData.creator_email?.trim(),
  };

  if (Object.values(sanitized).some((value) => !value)) {
    throw new Error('Uzupełnij wszystkie pola formularza.');
  }

  const slug = slugify(sanitized.title);
  const image = await storeImage(mealData.image, slug);

  try {
    await db.execute({
      sql: `
        INSERT INTO meals (
          slug,
          title,
          image,
          summary,
          instructions,
          creator,
          creator_email
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        slug,
        sanitized.title,
        image,
        sanitized.summary,
        sanitized.instructions,
        sanitized.creator,
        sanitized.creator_email,
      ],
    });
  } catch (error) {
    if (error.message?.includes('UNIQUE constraint failed')) {
      throw new Error('Posiłek o tej nazwie już istnieje.');
    }
    throw error;
  }

  return slug;
}
