# Learnify Backend

Express + MongoDB API for the Learnify learning platform.

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

## Database

By default `MONGODB_URI=memory` uses an **in-memory MongoDB** (no local install needed). Data resets when the server stops.

For a persistent database, install [MongoDB Community](https://www.mongodb.com/try/download/community) or use Atlas, then set:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/learnify
```

## Scripts

```bash
npm run seed   # seed courses, roadmap, achievements + demo user
npm run dev    # start API with nodemon (http://localhost:5000)
npm start      # start API
```

**Important:** With `MONGODB_URI=memory`, seed and server use separate in-memory instances. Prefer a real MongoDB URI for seed + runtime to share data. For memory mode, the server auto-seeds on first boot when the database is empty.

## Demo account (after seed)

- Email: `alex@learnify.com`
- Password: `Password1!`

## API (`/api/v1`)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/auth/register` | No | Create account |
| POST | `/auth/login` | No | Login (JWT httpOnly cookie) |
| POST | `/auth/logout` | No | Clear cookie |
| GET | `/auth/me` | Yes | Current user |
| POST | `/auth/forgot-password` | No | Request reset token |
| POST | `/auth/reset-password` | No | Reset password |
| PATCH | `/users/me` | Yes | Update profile |
| PATCH | `/users/me/password` | Yes | Change password |
| GET | `/dashboard/overview` | Yes | Dashboard summary |
| GET | `/dashboard/learning` | Yes | Enrollments |
| GET | `/dashboard/roadmap` | Yes | Career roadmap |
| GET | `/dashboard/achievements` | Yes | Badges |
| GET | `/dashboard/courses` | Yes | Course catalog |
| POST | `/dashboard/courses/:id/enroll` | Yes | Enroll |
| PATCH | `/dashboard/enrollments/:id/progress` | Yes | Update progress |
| POST | `/contact` | No | Contact form |
| POST | `/feedback` | Optional | Feedback (+ files) |
| POST | `/newsletter` | No | Newsletter subscribe |
| GET | `/api/health` | No | Health check |
