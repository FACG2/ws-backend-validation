import express from 'express';

import apiRouter from './routes';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});

// Register our JSON API routes with our express app.
app.use('/api', apiRouter);

export default app;
