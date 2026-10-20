# CarMarketplace

Ukážková Angular aplikácia s ponukou áut. Ponuka začína tromi statickými vozidlami; pridávanie a úprava vozidiel fungujú v pamäti prehliadača.

## Štruktúra aplikácie

```text
src/app/
├── app.ts
├── app.routes.ts
└── features/
    └── cars/
        ├── components/
        ├── data/
        ├── models/
        └── services/
```

Komponenty, počiatočné dáta, model a služba sú zoskupené podľa funkčnej oblasti.

## Spustenie

```bash
npm ci
npm start
```

Po spustení otvorte `http://localhost:4200/`.

## Stránky a funkcie

- `/cars` — filtrovaná ponuka vozidiel
- `/cars/new` — pridanie vozidla
- `/cars/:id` — detail vozidla
- `/cars/:id/edit` — úprava vozidla

## Build a testy

```bash
npm run build
npm test -- --watch=false
```
