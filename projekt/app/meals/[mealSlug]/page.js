import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

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
              <a href={`mailto:${meal.creatorEmail}`}>{meal.creatorEmail}</a>
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
