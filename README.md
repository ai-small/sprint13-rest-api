# sprint 13 REST API 

Версия 0.0.1

## О проекте:
Учебный проект для отработки навыков настройки сервера и работы с БД

## Инструкции по запуску:
- Скачать или склонировать репозиторий;
- Установить зависимости при помощи npm - `npm i`;
- команда `npm run start` запускает сервер на `localhost:3000`, затем загружается фронтенд проекта Mesto;
- команда `npm run dev` запускает сервер на `localhost:3000` с хот релоудом;
- команда `npm run lint` запускает линтинг.

#### Routing
- `GET /users` — возвращает всех пользователей из базы;
- `GET /users/:userId` - возвращает пользователя по _id;
- `POST /users` — создаёт пользователя с переданными в теле запроса name, about и avatar;
- `GET /cards` — возвращает все карточки;
- `POST /cards` — создаёт карточку;
- `DELETE /cards/:cardId` — удаляет карточку по идентификатору.
