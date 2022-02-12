'use strict';

/**
 *  line controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::line.line', ({ strapi }) => ({
  async find(context) {
    const { data } = await super.find(context);
    // TODO:
    // 1. Setup S3 settings
    // 2. Grab the AWS S3 url and get signed URLs for all the elements in the list
    return { data };
  }
}));
