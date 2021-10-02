const express = require('express');
const config = require('./config');
const { imgRouter } = require('./routers');
const setupMiddlewares = require('./middlewares');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

setupMiddlewares(app);

app.use('/', imgRouter);

app.get('/', (req, res) => {
  res.statusCode = 404;
  return res.end('Not Found');
});

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server started: ${config.PORT}`);
});
