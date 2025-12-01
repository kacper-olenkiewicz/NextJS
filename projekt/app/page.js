import Link from 'next/link';

import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>
            Discover hand-crafted meals from passionate home cooks across the
            globe, explore fresh culinary ideas, and share your own signature
            recipes with the community.
          </p>
          <div className={classes.cta}>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">Join the Community</Link>
          </div>
        </div>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>Share Your Favorite Creations</h2>
          <p>
            NextLevel Food celebrates the joy of cooking together. Upload your
            tried-and-true recipes, highlight the stories behind them, and let
            others know what makes each dish special.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Cook Along with Others</h2>
          <p>
            Follow fellow food lovers, save the meals that inspire you, and help
            other cooks refine their dishes with constructive feedback.
          </p>
        </section>
      </main>
    </>
  );
}
