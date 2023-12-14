'use strict';

/**
 * bloghome service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bloghome.bloghome');
