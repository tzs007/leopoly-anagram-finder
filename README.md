# Anagramma App

## Docker Quick Start

1. `docker-compose build`
2. `docker-compose up -d`
3. Frontend: http://localhost:5173
4. Backend API: http://localhost:3000

### Environment Variables

- Backend: `FRONTEND_ORIGIN` (default: \* origins allowed).
- Frontend build: `VITE_API_BASE_URL` (default: `http://localhost:3000`).
