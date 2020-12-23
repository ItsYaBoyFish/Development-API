const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const data = require('./data');

app.get('/api/users', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
    console.log(`Server Started On Port: ${port}`)
});