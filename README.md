##  Установка

1. Клонуй репозиторій:

   ```bash
   git clone https://github.com/romkas228/wishes-dashboard.git
   cd wishes-dashboard
   ```

2. Встанови залежності:

   ```bash
   npm install
   ```

---

##  Запуск JSON Server (фейковий бекенд)

1. Запусти сервер:

   ```bash
   npx json-server --watch db.json --port 3001
   ```

---

## Запуск фронтенду

Після запуску бекенду — запусти React-додаток:

```bash
npm run dev
```

Відкрий у браузері:

👉 [http://localhost:5173/](http://localhost:5173/)
