# Deploy Learnify (Vercel frontend + Render API)

Signup fails on the live Vercel site when the API still points at `localhost:5000` (or when `VITE_API_URL` was never set for production). Host the API, point the frontend at it, and allow the Vercel origin in CORS.

**Do not use `MONGODB_URI=memory` on Render.** Memory MongoDB is for local demos only. On the free tier every restart wipes all users/data, and production mode rejects memory URI entirely. Use **MongoDB Atlas**.

---

## 1. MongoDB Atlas (required)

1. Create a free account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a **free shared cluster**.
3. **Database Access** → add a database user (username + password).
4. **Network Access** → allow `0.0.0.0/0` (or Render’s IPs if you prefer tighter rules).
5. **Connect** → Drivers → copy the connection string, e.g.:

```text
mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/learnify?retryWrites=true&w=majority
```

Replace `USER`, `PASSWORD`, and `CLUSTER`. Use database name `learnify` (or any name you prefer).

---

## 2. Deploy backend to Render

1. Push this repo to GitHub (if you have not already).
2. In [Render](https://render.com): **New** → **Web Service** → connect the repo.
3. Settings:
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node src/server.js` (same as `npm start`)
4. Or use the Blueprint at repo root: `render.yaml` (or `backend/render.yaml` if the service root is already `backend`).

### Render environment variables

| Variable | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `MONGODB_URI` | Your Atlas connection string (from step 1) |
| `JWT_SECRET` | A long random secret (Render can generate one) |
| `JWT_EXPIRES_IN` | `7d` |
| `COOKIE_NAME` | `learnify_token` |
| `CLIENT_URL` | Your Vercel frontend URL, e.g. `https://your-app.vercel.app` (no trailing slash) |
| `CLIENT_URLS` | Optional comma-separated extra origins (custom domains, etc.) |

`PORT` is set by Render automatically — do not hardcode it.

After deploy, note your API URL, e.g. `https://learnify-api.onrender.com`.

Health check: `GET https://YOUR-API.onrender.com/api/health`

---

## 3. Configure Vercel frontend

In the Vercel project → **Settings** → **Environment Variables**:

| Variable | Value |
| --- | --- |
| `VITE_API_URL` | `https://YOUR-API.onrender.com/api/v1` |

Apply to **Production** (and Preview if you want preview deploys to hit the same API).

### Redeploy after setting env

Vite embeds `VITE_*` variables at **build** time. Changing the variable alone is not enough — **Redeploy** the frontend (Deployments → … → Redeploy, or push a commit).

---

## 4. Cross-origin auth checklist

- Backend CORS allows `CLIENT_URL`, optional `CLIENT_URLS`, localhost for local work, and `*.vercel.app` preview hosts.
- Production cookies use `sameSite: 'none'` and `secure: true` (required for Vercel ↔ Render).
- Frontend `api.js` sends `credentials: 'include'` (already set).
- Backend sets `trust proxy` in production so Secure cookies work behind Render’s proxy.

---

## 5. Verify signup / login

1. Open the Vercel site.
2. Register a new account — should succeed (no “Failed to fetch”).
3. Log in — session cookie should stick across reloads.
4. If CORS fails, confirm `CLIENT_URL` matches the exact Vercel origin (including `https://`, no trailing slash).

---

## Local development (unchanged)

```bash
# backend/.env
MONGODB_URI=memory   # or a local Mongo URI
CLIENT_URL=http://localhost:5173
NODE_ENV=development

# frontend/.env
VITE_API_URL=http://localhost:5000/api/v1
```
