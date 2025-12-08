import Link from 'next/link';
import { Suspense } from 'react';

import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import classes from './page.module.css';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <div>
          <h1>
            Discover meals from the{' '}
            <span className={classes.highlight}>NextLevel Food</span> community
          </h1>
          <p>Browse curated recipes or upload your signature dish.</p>
        </div>
        <div className={classes.cta}>
          <Link href="/meals/share">Share Your Recipe</Link>
        </div>
      </header>

      <main>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals…</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}