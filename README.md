# Olenkiewicz 20470
[Zobacz działającą aplikację na Vercel](https://next-js-hazel-eight.vercel.app/)

### Jak działa dodawanie posiłku?
1. Użytkownik otwiera `/meals/share`, gdzie formularz Next.js (Server Component) zbiera imię, e‑mail, tytuł, opis, instrukcje oraz plik zdjęcia.
2. Po kliknięciu „Udostępnij posiłek” formularz wywołuje Server Action `shareMealAction` (zdefiniowaną w `lib/actions.js`). Akcja działa po stronie serwera, więc dane formularza nie trafiają do przeglądarkowego JavaScriptu.
3. `shareMealAction` przekazuje surowe dane do `createMeal` (w `lib/meals.js`). Funkcja:
	- przycina wszystkie pola tekstowe i sprawdza, czy żadne nie jest puste (w przeciwnym wypadku rzuca błąd);
	- generuje unikalny `slug` na podstawie tytułu;
	- wywołuje `storeImage`, które zapisuje przesłany plik wewnątrz `public/images`, nadając mu nazwę `slug-timestamp.ext`;
	- łączy się z lokalną bazą SQLite przez `better-sqlite3` i wykonuje instrukcję `INSERT INTO meals (...) VALUES (...)`.
4. Jeśli rekord zapisze się poprawnie, Server Action wykonuje `redirect('/meals')`, dzięki czemu użytkownik wraca do listy posiłków z najnowszym wpisem.
5. W przypadku błędów (brak pliku, duplikat tytułu, itp.) rzucany jest wyjątek, który przechwytuje globalny komponent `app/error.js`, pokazując czytelny komunikat użytkownikowi.

