'use strict';

/**
 * palma service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::palma.palma');
