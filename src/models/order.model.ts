import db from '../database';

interface Order {
    id?: number;
    user_id: number;
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
            throw new Error(`cant create order: ${err}`);
        }
    }

    async showCurrentByUser_id(user_id: number) {
        try {
            const conn = await db.connect();
            const ordersSql =
                'SELECT * FROM orders WHERE user_id=$1 ORDER BY id DESC LIMIT 1';
            const order = await conn.query(ordersSql, [user_id]);

            const productsSql =
                'SELECT * FROM products INNER JOIN order_products ON products.id = order_products.product_id WHERE order_products.order_id =$1';
            const products = await conn.query(productsSql, [order.rows[0].id]);

            const produtcsIdAndQuanty = products.rows.reduce(
                (previousValue, curr) => {
                    previousValue.push({
                        id: curr.id,
                        quantity: curr.quantity,
                    });
                    return previousValue;
                },
                []
            );
            // console.log(produtcsIdAndQuanty);
            const finalDataShape = {
                order_id: order.rows[0].id,
                products: produtcsIdAndQuanty,
                user_id: order.rows[0].user_id,
                status: order.rows[0].status,
            };
            // console.log(finalDataShape);
            conn.release();
            return finalDataShape;
        } catch (err) {
            throw new Error(`cant find products: ${err}`);
        }
    }
}

export default OrderModel;
