const express = require('express');
const helmet  = require('helmet');

const app = express();

app.use(helmet());

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(200, `
        <h1>There is nothing here...</h1>
        <h1>Please, see the the <a href="https://addon-parser.armaldio.xyz/documentation">documentation</a></h1>
    `);
});

module.exports = app;
