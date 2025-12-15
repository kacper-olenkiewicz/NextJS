import path from 'path';
import fs from 'fs/promises';
import sql from 'better-sqlite3';

const db = sql('meals.db');
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
  // throw new Error('Symulowany błąd połączenia z bazą.');

  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
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

  const stmt = db.prepare(`
    INSERT INTO meals (
      slug,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email
    ) VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `);

  try {
    stmt.run({
      slug,
      image,
      ...sanitized,
    });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      throw new Error('Posiłek o tej nazwie już istnieje.');
    }
    throw error;
  }

  return slug;
}
