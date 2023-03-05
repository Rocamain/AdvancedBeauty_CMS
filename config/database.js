module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("PGHOST"),
        port: env.int("PGPORT"),
        database: env("PGDATABASE"),
        user: env("PGUSER"),
        password: env("PGPASSWORD"),
        ssl: {
          ssl: {
            rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
          },
        },
      },
    },
    acquireConnectionTimeout: 600000,
    pool: {
      min: 0,
      max: 100,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 50000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis: 10000,
      createRetryIntervalMillis: 2000,
      propagateCreateError: false,
    },
  };
};
