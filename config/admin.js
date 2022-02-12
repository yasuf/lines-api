module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06619e9809119e8c6326c798649d1aa1'),
  },
});
