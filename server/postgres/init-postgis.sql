-- Initialize PostGIS extensions in the database created by POSTGRES_DB
CREATE EXTENSION IF NOT EXISTS postgis;
-- Optional extras (uncomment if needed)
-- CREATE EXTENSION IF NOT EXISTS postgis_topology;

-- Verify creation (this will run during initialization)
-- SELECT extname FROM pg_extension;
