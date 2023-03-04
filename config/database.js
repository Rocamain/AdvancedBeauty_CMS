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
        ssl: env.bool(false),
      },
    },
    acquireConnectionTimeout: 5000,
    pool: {
      min: 0,
      max: 10,
      createTimeoutMillis: 8000,
      acquireTimeoutMillis: 8000,
      idleTimeoutMillis: 8000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
    },
  };
};
