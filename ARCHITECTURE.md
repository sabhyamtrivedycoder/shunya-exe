# Shunya.exe Architecture

## Overview

Shunya.exe is a modern full-stack application built as a monorepo using pnpm workspaces. It combines a Node.js/Express backend with a React/Vite frontend, all with TypeScript type-safety.

## Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18
- **Database**: PostgreSQL with Drizzle ORM
- **Logging**: Pino with pretty-printing
- **Validation**: Zod schemas
- **CORS**: Cross-origin support

### Frontend
- **Framework**: React 18.2 with React DOM
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.0
- **State Management**: React hooks
- **HTTP Client**: Custom fetch wrapper with auth support
- **UI**: Toast notifications, custom utilities

## Project Structure

```
shunya-exe/
├── apps/
│   ├── backend/              # Express API server
│   │   ├── src/
│   │   │   ├── index.ts      # Entry point
│   │   │   ├── app.ts        # Express setup
│   │   │   ├── routes/       # API routes
│   │   │   └── lib/          # Utilities
│   │   └── dist/             # Compiled output
│   │
│   └── frontend/             # React + Vite
│       ├── src/
│       │   ├── main.tsx      # React entry
│       │   ├── App.tsx       # Main component
│       │   ├── pages/        # Page components
│       │   └── index.css     # Global styles
│       └── dist/             # Build output
│
├── lib/
│   └── api-zod/              # Shared API types
│
├── db/
│   ├── schema/               # Database schema
│   └── migrations/           # SQL migrations
│
└── .github/workflows/        # CI/CD automation
```

## Data Flow

1. **Frontend** → React component makes HTTP request
2. **Custom Fetch** → Handles auth token, base URL, response parsing
3. **CORS** → Express middleware allows cross-origin
4. **Routing** → Express router dispatches to handler
5. **Business Logic** → Route processes request
6. **Database** → Drizzle ORM queries PostgreSQL
7. **Response** → JSON sent back to client
8. **Frontend** → React state updated, UI re-renders

## Key Features

- ✅ Type-safe API integration
- ✅ Bearer token authentication
- ✅ Structured JSON logging
- ✅ Tailwind CSS styling
- ✅ Hot module replacement in dev
- ✅ Production-ready configuration
- ✅ Database migrations
- ✅ Error handling and validation
