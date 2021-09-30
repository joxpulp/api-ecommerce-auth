import { Router } from 'express';
import { authController } from '../controllers/auth';

const router = Router();

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/islogged', authController.isLogged);

export default router;
