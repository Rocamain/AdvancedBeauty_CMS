module.exports = [
  "strapi::errors",
  {
    name: "strapi::body",
    config: {
      jsonLimit: "10mb",
    },
  },
  {
    name: "strapi::security",

    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
            "res.cloudinary.com/",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],

          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::favicon",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::session",
  "strapi::public",
];
