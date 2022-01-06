import { Request, Response } from 'express';
import OrderProductsModel from '../models/order_products.model';
import OrderModel from '../models/order.model';

const orderModel = new OrderModel();
const orderProductsModel = new OrderProductsModel();

async function addOrder(req: Request, res: Response): Promise<void> {
    try {
        const { user_id, status } = req.body;

        if (user_id && status) {
            const data = await orderModel.create({ user_id, status });
            res.status(200).json(data);
        } else {
            res.status(400).send('please enter right required data');
        }
    } catch (err) {
        res.status(400).send('operation failed');
    }
}

async function addProduct(req: Request, res: Response): Promise<void> {
    try {
        const { order_id, product_id, quantity } = req.body;
        if (order_id && product_id && quantity) {
            const data = await orderProductsModel.create({
                order_id,
                product_id,
                quantity,
            });
            res.status(200).json(data);
        } else {
            res.status(400).send('please enter right required data');
        }
    } catch (err) {
        res.status(400).send('please enter right required data');
    }
}

async function getOrderByUser_id(req: Request, res: Response): Promise<void> {
    try {
        const user_id = req.params.product_id;
        const data = await orderModel.showCurrentByUser_id(user_id);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
}

const ordersController = {
    addOrder,
    addProduct,
    getOrderByUser_id,
};
export default ordersController;
