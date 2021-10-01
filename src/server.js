const express = require('express');
const config = require('./config');
const { imgRouter } = require('./routers');
const setupMiddlewares = require('./middlewares');

const app = express();

setupMiddlewares(app);

app.use('/', imgRouter);

app.get('/', (req, res) => {
  res.send('Okey');
});

app.listen(config.PORT, () => {
  console.log(`Server started: ${config.PORT}`);
});
