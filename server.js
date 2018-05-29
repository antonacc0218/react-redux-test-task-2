// TODO: replace it by more lightweight server framework or implement manually.
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/dist`));

const PORT = process.env.PORT || 8081;

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is up and running. Port: ${PORT}`);
});
