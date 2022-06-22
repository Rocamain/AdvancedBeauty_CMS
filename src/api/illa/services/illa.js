'use strict';

/**
 * illa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::illa.illa');
