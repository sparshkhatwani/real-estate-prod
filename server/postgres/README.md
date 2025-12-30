# PostGIS dev container

This folder contains a small Dockerfile and init script to run a Postgres instance preloaded with the PostGIS extension for local development.

Usage:

1. From the `server` folder run:
   docker compose -f docker-compose.postgis.yml up -d --build

2. Update `server/.env.local` DATABASE_URL to point at the container (port 5432):
   DATABASE_URL="postgresql://postgres:1234@localhost:5432/realestate"

3. Run your migrations (Prisma):
   npx prisma migrate dev

Notes:
- The initialization script `init-postgis.sql` will run only the first time the container initializes the database volume.
- If you already have data, stop the container and remove the `postgres_postgis_data` volume to force reinitialization.
