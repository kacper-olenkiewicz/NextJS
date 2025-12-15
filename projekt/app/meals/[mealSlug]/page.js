import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

const debugLogPath = path.join(process.cwd(), 'meal-page-debug.log');

export default async function MealDetailsPage({ params }) {
  const headerList = await headers();
  const resolvedParams = await params;
  const debugHeaders = {
    nextUrl: headerList.get('next-url'),
    matchedPath: headerList.get('x-matched-path'),
    invokePath: headerList.get('x-invoke-path'),
    referer: headerList.get('referer'),
  };
  fs.appendFileSync(
    debugLogPath,
    `${new Date().toISOString()} params: ${JSON.stringify(
      resolvedParams
    )}, headers: ${JSON.stringify(debugHeaders)}\n`
  );

  const meal = await getMeal(resolvedParams.mealSlug);

  if (!meal) {
    notFound();
  }

  const instructionParagraphs = meal.instructions
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            sizes="(max-width: 900px) 100vw, 40rem"
            priority
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by {meal.creator}{' '}
            <span>
              (
              <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
              )
            </span>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main className={classes.content}>
        {instructionParagraphs.map((step, index) => (
          <p key={`${meal.slug}-step-${index}`}>{step}</p>
        ))}
      </main>
    </>
  );
}
