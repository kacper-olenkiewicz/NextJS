// app/meals/[nazwa]/page.js
export default function MealDetailsPage({ params }) {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center' }}>MealDetailsPage</h1>
      <p style={{ color: 'white', textAlign: 'center' }}>Dynamiczny parametr: {params.nazwa}</p>
      <p style={{ color: 'white', textAlign: 'center' }}>Aktualny URL: /meals/{params.nazwa}</p>
    </div>
  );
}
