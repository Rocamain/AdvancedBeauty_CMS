module.exports = ({ env }) => {
  return {
    host: env("HOST"),
    port: env.int("PORT", 4000),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
