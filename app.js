const express = require('express');
const apicache = require('apicache');

const app = express();

let cache = apicache.middleware;
app.use(cache('5 minutes'));

const employees = [
  { firstName: 'Jane', lastName: 'Smith', age: 20 },
  { firstName: 'John', lastName: 'Smith', age: 30 },
  { firstName: 'Mary', lastName: 'Green', age: 50 },
];

app.use(express.json());

app.get('/v1/employees', (req, res) => {

  res.json(results);
});

app.get('/v2/employees', (req, res) => {

  res.json(results);
});

app.listen(3000, () => {
  console.log('server started');
});
