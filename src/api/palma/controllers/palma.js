"use strict";

/**
 *  palma controller
 */

const COMPONENT = {
  "shared.card-a": "CardA",
  "shared.carousel": "Carousel",
  "shared.grid-b": "GridB",
  "shared.hero": "Hero",
  "shared.grid-photo": "GridPhoto",
  "shared.services": "Services",
  "shared.grid-a": "GridA",
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::palma.palma", ({ strapi }) => {
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

      if (data.attributes.components) {
        data.attributes.components.map((component) => {
          component.componentName = COMPONENT[component.__component];
        });
      }
      // some more custom logic
      meta.date = Date.now();

      return { data: data.attributes.components, meta };
    },
  };
});
