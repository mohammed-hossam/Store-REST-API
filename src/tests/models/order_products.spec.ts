import db from '../../database';
import OrderProductsModel from '../../models/order_products.model';
import OrderModel from '../../models/order.model';
import UserModel from '../../models/user.model';
import ProductModel from '../../models/product.model';

const orderModel = new OrderModel();
const orderProductsModel = new OrderProductsModel();
const userModel = new UserModel();
const productModel = new ProductModel();

describe('orderProducts Model', () => {
    beforeAll(async () => {
        await productModel.create({
            name: 'test',
            price: '50',
        });

        await userModel.create({
            firstname: 'test1',
            lastname: 'test2',
            password: '123test',
        });

        await orderModel.create({
            user_id: 1,
            status: 'active',
        });
    });

    afterAll(async () => {
        try {
            const conn = await db.connect();

            const sql =
                'TRUNCATE TABLE order_Products, orders, users, products RESTART IDENTITY CASCADE';
            await conn.query(sql);
            conn.release();
        } catch (err) {
            throw new Error(`err: ${err}`);
        }
    });

    it('test add product to order', async () => {
        const orderProduct = await orderProductsModel.create({
            order_id: 1,
            product_id: 1,
            quantity: 5,
        });
        expect(orderProduct).toEqual({
            id: 1,
            order_id: 1,
            product_id: 1,
            quantity: 5,
        });
    });
});
