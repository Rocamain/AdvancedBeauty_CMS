"use strict";

/**
 *  contact controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact", ({ strapi }) => {
  return {
    // Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },

    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {
      // some custom logic here
      ctx.query = { ...ctx.query, local: "en" };

      // Calling the default core action
      const { data, meta } = await super.find(ctx);
      const components = [];
      if (data.attributes.Hero) {
        data.attributes.Hero.componentName = "Hero";
        components.push(data.attributes.Hero);
      }
      components.push({ componentName: "Form" });
      // some more custom logic

      meta.date = Date.now();

      return { data: components, meta };
    },
  };
});
