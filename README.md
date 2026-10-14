# Habito

Habito is a small habit tracker with a React/Vite interface and an Express API backed by MongoDB. The frontend can create habits, list them, mark them complete, and delete them.

## Stack

React · Vite · JavaScript · Express · Mongoose · MongoDB

## Run the backend

Requires Node.js, npm, and a MongoDB connection string.

```bash
cd backend
npm init -y
npm pkg set type=module
npm install express cors dotenv mongoose
```

Create `backend/.env`:

```dotenv
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the API:

```bash
node server.js
```

The API provides `GET /habits`, `POST /habits`, `PATCH /habits/:id`, and `DELETE /habits/:id`.

## Run the frontend

In a second terminal:

```bash
cd frontend/habito
npm ci
npm run dev
```

The frontend uses `VITE_API_BASE_URL`, which defaults to `http://localhost:5000`. Set it in `frontend/habito/.env.local` when the API runs at a different address.

## Scripts

The frontend provides `npm run dev`, `npm run build`, `npm run lint`, and `npm run preview` from `frontend/habito`.

## Project layout

- `backend/server.js` — Express routes and MongoDB connection.
- `backend/models/Habit.js` — Mongoose habit model.
- `frontend/habito/` — Vite and React application.

## Security note

Do not commit `.env` files or real database credentials. A `.env` file is present in the public repository's tracked files; rotate any real credential it contained, remove the file from the repository, and keep `.env` ignored. Removing it from the latest revision alone does not erase older Git history.
