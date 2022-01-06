import express, { Router } from 'express';
import productsController from '../controllers/products.controller';
import verifyAuthToken from '../middleware/verifyAuthToken.middleware';

const productsRouter: Router = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:product_id', productsController.getSingleProduct);
productsRouter.post(
    '/',
    verifyAuthToken,
    productsController.createSingleProduct
);

export default productsRouter;
