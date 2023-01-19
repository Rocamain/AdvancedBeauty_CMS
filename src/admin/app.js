import favicon from "./extensions/favicon.ico";
import logo from "./extensions/logo-cms.png";
export default {
  config: {
    head: {
      favicon: favicon,
    },
    auth: {
      logo: logo,
    },
    menu: {
      logo: favicon,
    },
    tutorials: false,
    notifications: {
      releases: false,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
