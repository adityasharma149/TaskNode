import express from 'express';
import{ getCurrentUser, loginUser, registerUser, updateProfile, updatePassword} from '../controllers/userController.js';
const userRouter = express.Router();
import authMiddleware from '../middleware/auth.js';

//PUBLIC LINKS
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

//PRIVATE LINKS
userRouter.get('/me', authMiddleware, getCurrentUser);
userRouter.put('/profile', authMiddleware, updateProfile);
userRouter.get('/password', authMiddleware, updatePassword);


export default userRouter;
