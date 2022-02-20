'use strict';

/**
 *  line controller
 */

const querystring = require('querystring');
const { createCoreController } = require('@strapi/strapi').factories;
const { getUrl } = require('../../../helpers/aws.js');

module.exports = createCoreController('api::line.line', ({ strapi }) => ({
  async find(context) {
    const { data } = await super.find(context);
    const newData = await Promise.all(data.map(async element => {
      const signedUrl = await getUrl(element.url);
      element.attributes = {
        signedUrl,
        ...element.attributes
      }
      return element;
    }));
    return { data: newData };
  },

  async findOne(context) {
    const response = await super.findOne(context);
    response.data.attributes = {
      signedUrl: await getUrl(response.data.attributes.url),
      ...response.data.attributes
    }


    return response;
  },

  async searchLine(context) {
    const queryString = querystring.parse(context.request.url.split('?')[1]);

    const entry = await strapi.db.query('api::line.line').findOne({
      where: { name: queryString.query },
      populate: {
        audioFile: true
      }
    });
    // entry.signedUrl = await getUrl(entry.url)
    return entry;
  }
}));
