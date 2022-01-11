import db from '../../database';
import OrderModel from '../../models/order.model';
import UserModel from '../../models/user.model';

const orderModel = new OrderModel();
const userModel = new UserModel();

describe('Order Model', () => {
    beforeAll(async () => {
        try {
            await userModel.create({
                firstname: 'test1',
                lastname: 'test2',
                password: '123test',
            });
        } catch (err) {
            throw new Error(`err: ${err}`);
        }
    });
    afterAll(async () => {
        try {
            const conn = await db.connect();

            const sql = 'TRUNCATE TABLE orders, users RESTART IDENTITY CASCADE';
            await conn.query(sql);
            conn.release();
        } catch (err) {
            throw new Error(`err: ${err}`);
        }
    });

    it('test creating order', async () => {
        const orders = await orderModel.create({
            user_id: 1,
            status: 'active',
        });
        expect(orders).toEqual({
            id: 1,
            user_id: 1,
            status: 'active',
        });
    });

    it('test show Current order By User_id ', async () => {
        const order = await orderModel.showCurrentByUser_id(1);
        expect(order).toEqual({
            order_id: 1,
            products: [],
            user_id: 1,
            status: 'active',
        });
    });
});
