import express, { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import verifyAuthToken from '../middleware/verifyAuthToken.middleware';

const ordersRouter: Router = express.Router();

// addorder
ordersRouter.post('/', verifyAuthToken, ordersController.addOrder);
// addProduct to an order by order_id
ordersRouter.post('/products', verifyAuthToken, ordersController.addProduct);
// get Current Order By User_id
ordersRouter.get(
    '/current/:user_id',
    verifyAuthToken,
    ordersController.getOrderByUser_id
);

export default ordersRouter;
