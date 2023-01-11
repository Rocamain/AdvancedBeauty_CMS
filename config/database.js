module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "db_a_b"),
        user: env("DATABASE_USERNAME", "francisco"),
        password: env("DATABASE_PASSWORD", "Macarron12"),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  };
};
