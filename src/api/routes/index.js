import { Router } from 'express';

const router = Router();

router.get('/user', (req, res) => {
  res.json({ username: 'mantagen', role: 'ADMIN', age: '28' })
});
