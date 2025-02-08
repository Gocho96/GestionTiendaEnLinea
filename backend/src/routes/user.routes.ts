import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import {authRequired} from '../middlewares/validateToken'
import { validateSchema } from '../middlewares/validator.middleware';
import { registerSchema, loginSchema } from '../schemas/user.schemas';

const router = Router();

router.post('/register', validateSchema(registerSchema), userController.register);
router.post('/login', validateSchema(loginSchema), userController.login);
router.post('/logout', userController.logout);

router.get('/profile', authRequired, userController.profile);

router.get('/verify', userController.verifyToken);

export default router;