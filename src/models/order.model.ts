import db from '../database';

interface Order {
    id?: string;
    user_id: string;
    status: string;
}

class OrderModel {
    async create(newOrder: Order): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql =
                'INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *';
            const result = await conn.query(sql, [
                newOrder.user_id,
                newOrder.status,
            ]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not create order. Error: ${err}`);
        }
    }

    async showCurrentByUser_id(user_id: string) {
        try {
            const conn = await db.connect();
            const sql =
                'SELECT * FROM products INNER JOIN order_products ON products.id = order_products.product_id WHERE order_products.order_id =($1)';

            // const sql = 'SELECT FROM orders WHERE user_id=($1) and status=activ dec limit 1';

            const result = await conn.query(sql, [user_id]);
            // return result;
        } catch (err) {
            throw new Error(`Could not create order. Error: ${err}`);
        }
    }
}

export default OrderModel;
