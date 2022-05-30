/**
 *  menu controller
 */

("use strict");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::menu.menu", ({ strapi }) => {
  return {
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

      const underscoredLink = (route) => route.replaceAll(" ", "-");

      const formatMenuRoutes = ({ attributes: { links } }) => {
        const formattedLinks = links.map((link) => {
          const hasDropdownLinks = link?.dropdown_links;

          link.routePath =
            link.route === "Home" ? "/" : underscoredLink(link.route);

          if (hasDropdownLinks) {
            const { links } = link.dropdown_links.data.attributes;

            links.map((dropLink) => {
              dropLink.routePath = dropLink.isPathID
                ? underscoredLink(`${link.route}/#${dropLink.route}`)
                : underscoredLink(`${link.route}/${dropLink.route}`);
            });
          }
          return link;
        });
        return formattedLinks;
      };

      return {
        data: { links: formatMenuRoutes(data), logo: data.attributes.logo },
        meta,
      };
    },
  };
});
