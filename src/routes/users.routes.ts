import express, { Router } from 'express';
import usersController from '../controllers/users.controller';
import verifyAuthToken from '../middleware/verifyAuthToken.middleware';

const usersRouter: Router = express.Router();

// usersRouter.get('/test', (_req, res) => {
//     res.send('sh8al el7amd l Allah');
// });
usersRouter.get('/', verifyAuthToken, usersController.getAllUsers);
usersRouter.get('/:user_id', verifyAuthToken, usersController.getSingleUser);
usersRouter.post('/', verifyAuthToken, usersController.createSingleUser);
// to create token for first user at all in the app
usersRouter.post('/signup', usersController.createSingleUser);

export default usersRouter;
