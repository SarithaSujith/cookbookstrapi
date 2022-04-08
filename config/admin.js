module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4951011ebdbfc9b0f309dbbffc16981f'),
  },
});
