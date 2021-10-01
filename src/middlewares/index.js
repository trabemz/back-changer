const disablePoweredBy = require('./disablePoweredBy');
const addRequestId = require('./addRequestId');
const routesLogger = require('./routesLogger');

module.exports = (app) => {
  app.use(disablePoweredBy);

  app.use(addRequestId);

  app.use(routesLogger);
};
