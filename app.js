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

app.get('/employees', (req, res) => {
  // const { firstName, lastName, age } = req.query;
  // let results = [...employees];

  // if (firstName) {
  //   results = results.filter((r) => r.firstName === firstName);
  // }
  // if (lastName) {
  //   results = results.filter((r) => r.lastName === lastName);
  // }
  // if (age) {
  //   results = results.filter((r) => +r.age === +age);
  // }

  res.json(results);
});

app.listen(3000, () => {
  console.log('server started');
});
