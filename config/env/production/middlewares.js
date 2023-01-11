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
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            "cdn.jsdelivr.net",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            "dl.airtable.com",
            "res.cloudinary.com",
            "res.cloudinary.com/",
          ],
          "script-src": ["'self'", "cdn.jsdelivr.net", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::session",
  "strapi::public",
];
