const express = require('express');
const helmet  = require('helmet');
const multer  = require('multer');
const uuid    = require('uuid/v4');
const os      = require('os');
const path    = require('path');
const shelljs = require('shelljs');
const { c2, c3 }  = require('./module');

const app = express();

const root = path.join(os.tmpdir(), uuid());
shelljs.mkdir('-p', root);
const upload = multer({ dest: root });

app.use(helmet());

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(`
        <h1>There is nothing here...</h1>
        <h1>Please, see the the <a target="_blank" href="https://app.swaggerhub.com/apis-docs/armaldio/construct-addon-parser/1">documentation</a></h1>
    `);
});

app.post('/parse/c2', upload.single('file'), async (req, res) => {
  console.log(req.file);
  if (!req.file) {
    res.json({
      error: 'No file provided',
    });
  }

  try {
    const plugin = await c2(req.file.path, req.file);
    res.json(plugin);
  } catch (err) {
    console.log(err);
    res.json({
      err: err.message,
    });
  }
});

app.post('/parse/c3', upload.single('file'), async (req, res) => {
  if (!req.file) {
    res.json({
      error: 'No file provided',
    });
  }

  try {
    const plugin = await c3(req.file.path);
    // console.log(plugin);
    res.json(plugin);
  } catch (err) {
    console.log(err);
    res.json({
      err: err.message,
    });
  }
});

module.exports = app;
