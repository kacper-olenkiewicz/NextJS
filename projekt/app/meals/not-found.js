import Link from 'next/link';

export default function MealsNotFound() {
  return (
    <main className="not-found">
      <h1>Nie znaleziono posiłku</h1>
      <p>Wybrany przepis nie istnieje lub został usunięty.</p>
      <p>
        <Link href="/meals">Wróć do katalogu przepisów</Link>
      </p>
    </main>
  );
}
