import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import validateSchema from '../Middlerware/schemaValidationMiddleware.js';
import loginSchema from '../schemas/loginSchema.js';
import userSchema from '../schemas/userSchema.js';

const userRouter = Router();
userRouter.post('/signUp', validateSchema(userSchema), userController.sighUp);
userRouter.post('/login', validateSchema(loginSchema), userController.login);

export default userRouter;
