const express = require('express');
const helmet  = require('helmet');
const multer  = require('multer');
const uuid    = require('uuid/v4');
const os      = require('os');
const path    = require('path');
const parser  = require('./module');

const app = express();

const upload = multer({ dest: path.join(os.tmpdir(), uuid()) });

app.use(helmet());

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(`
        <h1>There is nothing here...</h1>
        <h1>Please, see the the <a target="_blank" href="https://app.swaggerhub.com/apis-docs/armaldio/construct-addon-parser/1">documentation</a></h1>
    `);
});

app.post('/parse/c2', upload.single('file'), (req, res) => {
  console.log(req.file);

  try {
    const plugin = parser(req.file.path);
    res.json(plugin);
  } catch (err) {
    console.log(err);
    res.json({
      err: err.message,
    });
  }
});

module.exports = app;
