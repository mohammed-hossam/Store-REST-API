import { Request, Response } from 'express';
import ProductModel from '../models/product.model';

const productModel = new ProductModel();

async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const data = await productModel.index();
        if (data.length) {
            res.status(200).json(data);
        } else {
            res.status(200).send('No products found');
        }
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getSingleProduct(req: Request, res: Response): Promise<void> {
    try {
        const id = Number(req.params.product_id);
        const data = await productModel.show(id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).send('No product found with this id');
        }
    } catch (err) {
        res.status(400).json(err);
    }
}

async function createSingleProduct(req: Request, res: Response): Promise<void> {
    try {
        const { name, price } = req.body;
        const data = await productModel.create({ name, price });
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send('please enter right required data');
    }
}

const productsController = {
    getAllProducts,
    getSingleProduct,
    createSingleProduct,
};
export default productsController;
