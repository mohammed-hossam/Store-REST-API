import db from '../database';

interface OrderProduct {
    id?: number;
    order_id: number;
    product_id: number;
    quantity: number;
}

class OrderProductsModel {
    async create(newProduct: OrderProduct): Promise<OrderProduct> {
        try {
            const conn = await db.connect();
            const sql =
                'INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *';
            const result = await conn.query(sql, [
                newProduct.order_id,
                newProduct.product_id,
                newProduct.quantity,
            ]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`cant add product to the order: ${err}`);
        }
    }
}

export default OrderProductsModel;
