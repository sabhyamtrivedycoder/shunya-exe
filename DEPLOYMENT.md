# Deployment Guide

## Local Development Setup

```bash
# Clone repository
git clone https://github.com/sabhyamtrivedycoder/shunya-exe.git
cd shunya-exe

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local

# Initialize database
pnpm run db:push

# Start development servers
pnpm run dev
```

**Access:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Production Build

```bash
# Build all packages
pnpm run build

# Outputs:
# - Backend: apps/backend/dist/
# - Frontend: apps/frontend/dist/
```

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/shunya_exe

# Server
PORT=3000
NODE_ENV=production
LOG_LEVEL=info

# Frontend
BASE_PATH=/
```

## Docker Deployment

### Backend Dockerfile

```dockerfile
FROM node:18-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY . .
RUN pnpm install --frozen-lockfile
WORKDIR /app/apps/backend
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "start"]
```

### Frontend Dockerfile

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY . .
RUN pnpm install --frozen-lockfile
WORKDIR /app/apps/frontend
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Docker Compose

```yaml
version: '3.8'

services:
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: shunya_exe
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build:
      context: .
      dockerfile: apps/backend/Dockerfile
    environment:
      DATABASE_URL: postgresql://postgres:password@db:5432/shunya_exe
      PORT: 3000
      NODE_ENV: production
    ports:
      - "3000:3000"
    depends_on:
      - db

  frontend:
    build:
      context: .
      dockerfile: apps/frontend/Dockerfile
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  postgres_data:
```

## Health Check

```bash
curl http://localhost:3000/api/healthz
```

Expected response:
```json
{"status":"ok"}
```

## Deployment Platforms

### Vercel (Frontend)
```bash
vercel deploy apps/frontend
```

### Railway (Backend + Database)
```bash
railway up
```

### DigitalOcean (Full Stack)
```bash
doctl apps create --spec app.yaml
```

## CI/CD Pipeline

GitHub Actions workflow automatically:
1. Runs linting and type checks
2. Builds all packages
3. Pushes Docker images to registry
4. Deploys to production on release tags

## Performance Tips

- Enable gzip compression on web server
- Use Redis for session caching
- Implement database query optimization
- Add APM (Application Performance Monitoring)
- Use CDN for static assets
- Enable HTTP/2 and HTTPS
