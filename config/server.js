module.exports = ({ env }) => {
  return {
    host: env("HOST"),
    port: env.int("PORT"),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
