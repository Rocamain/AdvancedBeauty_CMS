module.exports = [
  "strapi::errors",
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
            "res.cloudinary.com",
            "res.cloudinary.com/",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "res.cloudinary.com/",
          ],

          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:3000",
        "https://advanced-beauty-fe.vercel.app/",
      ],
    },
  },
  {
    name: "strapi::body",
    config: {
      jsonLimit: "10mb",
    },
  },
  "strapi::favicon",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::session",
  "strapi::public",
];
