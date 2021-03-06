module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  cors: {
    enabled: false,
    headers: "*"
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '844cff491fe05fe1bd9d2232cdf2c9d7'),
    },
  },
});
