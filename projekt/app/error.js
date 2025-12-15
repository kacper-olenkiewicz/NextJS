'use client';

import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  return (
    <main className="error">
      <h1>Ups! Coś poszło nie tak</h1>
      <p>{error?.message ?? 'Spróbuj ponownie za chwilę.'}</p>
      <p>
        <button type="button" onClick={() => reset()}>
          Spróbuj ponownie
        </button>{' '}
        <Link href="/">Wróć na stronę główną</Link>
      </p>
    </main>
  );
}
