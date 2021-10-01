const express = require('express');
const config = require('./config');
const { imgRouter } = require('./routers');

const app = express();

app.use('/', imgRouter);

app.get('/', (req, res) => {
  res.send('Okey');
});

app.listen(config.PORT, () => {
  console.log(`Server started: ${config.PORT}`);
});
