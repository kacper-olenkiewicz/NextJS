import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import classes from './page.module.css';

export default function MealsPage() {
  const meals = getMeals();

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
        {meals.length === 0 ? (
          <p className={classes.loading}>Fetching meals…</p>
        ) : (
          <MealsGrid meals={meals} />
        )}
      </main>
    </>
  );
}