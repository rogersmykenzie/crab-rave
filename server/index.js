require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const crabs = []

app.use(express.static(`${__dirname}/../build`));

app.get('/api/crabs', (_, res) => res.status(200).json(crabs));

app.post('/api/crabs', ({ body }, res) => {
  crabs.push(body.crab);
  res.status(200).json(crabs);
})

app.listen(process.env.SERVER_PORT, () => console.log('Listening on Port ' + process.env.SERVER_PORT));