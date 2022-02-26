module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: '16mb',
      jsonLimit: '16mb',
      textLimit: '16mb',
      formidable: {
        maxFileSize: 16 * 1024 * 1024
      }
    }
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
