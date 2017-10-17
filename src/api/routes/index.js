import { Router } from 'express';

import * as user from './user'

const router = Router();

router.get('/user', user.get);
router.post('/user', user.post);

export default router;
