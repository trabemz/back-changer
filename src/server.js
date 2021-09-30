const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Okey');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started: ${PORT}`);
});
