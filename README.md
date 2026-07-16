# Countdown to 23 July 2026

Готовая статическая страница для GitHub Pages.

## Как загрузить

1. Создайте новый репозиторий на GitHub.
2. Загрузите в корень репозитория файлы:
   - `index.html`
   - `style.css`
   - `script.js`
3. Откройте **Settings → Pages**.
4. В разделе **Build and deployment** выберите:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Сохраните настройки.

Через короткое время страница появится по адресу:

`https://ВАШ-ЛОГИН.github.io/ИМЯ-РЕПОЗИТОРИЯ/`

## Изменение даты

Дата находится в файле `script.js`:

```js
const TARGET_DATE = new Date("2026-07-23T00:00:00+06:00");
```

`+06:00` — часовой пояс Бишкека.
