import Link from 'next/link';

export default function RootNotFound() {
  return (
    <main className="not-found">
      <h1>Nie znaleziono strony</h1>
      <p>Adres może być nieprawidłowy lub zasób został przeniesiony.</p>
      <p>
        <Link href="/meals">Przejdź do listy posiłków</Link>
      </p>
    </main>
  );
}
