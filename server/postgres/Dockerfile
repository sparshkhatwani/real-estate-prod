# Use official PostGIS image that includes the PostGIS extensions
FROM postgis/postgis:15-3.4

LABEL maintainer="spars"

# Expose Postgres port
EXPOSE 5432

# Copy initialization script into the standard Docker entrypoint init dir
# Scripts placed here are executed on first container startup (when DB is initialized)
COPY ./init-postgis.sql /docker-entrypoint-initdb.d/01-init-postgis.sql

# Use the default entrypoint and command from the base image
