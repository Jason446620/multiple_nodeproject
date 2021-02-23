const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/test', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  }

  res.status(200).json({
    status: 'succes',
    data: req.body,
  })
});
app.get('/backend/get', function (req, res) {
    res.status(200).json({
        status: 'OK',
        data: 'test data',
    });
});

const PORT=process.env.PORT||8080;

app.listen(PORT, () => {
  console.log('Server live'+PORT);
});