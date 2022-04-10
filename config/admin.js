module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '62453d7d8f1338fba5abdf449effba47'),
  },
});
