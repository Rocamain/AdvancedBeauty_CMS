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
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      acquireConnectionTimeout: 5000,
      pool: {
        min: 2,
        max: 10,
        acquireTimeoutMillis: 300000,
        createTimeoutMillis: 300000,
        destroyTimeoutMillis: 50000,
        idleTimeoutMillis: 300000,
        reapIntervalMillis: 10000,
        createRetryIntervalMillis: 2000,
        propagateCreateError: false,
      },
    },
  };
};
