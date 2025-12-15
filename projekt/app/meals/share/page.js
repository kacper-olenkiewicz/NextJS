import ImagePicker from '@/components/meals/image-picker';
import { shareMealAction } from '@/lib/actions';
import classes from './page.module.css';

export default function SharePage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Podziel się swoją <span className={classes.highlight}>ulubioną potrawą</span>
        </h1>
        <p>Wypełnij formularz, a my dodamy ją do naszej społeczności.</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMealAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Twoje imię</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Twój email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Tytuł</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Krótki opis</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instrukcje</label>
            <textarea id="instructions" name="instructions" rows="10" required />
          </p>
          <ImagePicker name="image" label="Zdjęcie potrawy" />
          <p className={classes.actions}>
            <button type="submit">Udostępnij posiłek</button>
          </p>
        </form>
      </main>
    </>
  );
}