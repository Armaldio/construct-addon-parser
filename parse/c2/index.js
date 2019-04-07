const express = require('express');
const path    = require('path');
const helmet  = require('helmet');
const parser  = require('../../module');
const multer  = require('multer');
const os      = require('os');
const uuid    = require('uuid/v4');

const app = express();

var upload = multer({ dest: path.join(os.tmpdir(), uuid()) });

app.use(helmet());

app.post('*', upload.single('file'), (req, res) => {
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
