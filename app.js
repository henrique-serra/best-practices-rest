const express = require('express');

const app = express();

const users = [{ email: 'abc@foo.com' }];

app.use(express.json());

app.get('/articles', (req, res) => {
  const articles = ['hello'];
  res.json(articles);
});

app.post('/articles', (req, res) => {
  res.json(req.body);
});

app.put('/articles/:id', (req, res) => {
  const { id } = req.params;

  res.json(req.body);
});

app.delete('/articles/:id', (req, res) => {
  const { id } = req.params;

  res.json({ deleted: id });
});

app.get('/articles/:articleId/comments', (req, res) => {
  const { articleId } = req.params;
  const comments = [];

  res.json(comments);
});

app.post('/users', (req, res) => {
  const { email } = req.body;
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  res.json(req.body);
});

app.listen(3000, () => {
  console.log('server started');
});
