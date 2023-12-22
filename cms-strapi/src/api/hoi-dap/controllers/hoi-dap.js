'use strict';

/**
 * hoi-dap controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::hoi-dap.hoi-dap', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async create(ctx) {
        const customctx = ctx;
        customctx.request.body.data.active = false;
        // some logic here
        const response = await super.create(customctx);
        // some more logic
        // response.data.attributes.active = false;
        return response;
      }
    
    
  }));