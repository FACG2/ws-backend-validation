import express from 'express';
import bodyParser from 'body-parser';

import apiRouter from './api/routes';

const app = express();

// Register bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Register public routes
app.get('/', (req, res) => {
  res.send('Hello World')
});

// Register our JSON API routes with our express app.
app.use('/api', apiRouter);

export default app;
