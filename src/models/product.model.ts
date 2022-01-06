import db from '../database';

interface Product {
    id?: number;
    name: string;
    price: string;
}

class ProductModel {
    async index(): Promise<Product[]> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }

    async show(id: number): Promise<Product> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM products WHERE id=$1';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not get product. Error: ${err}`);
        }
    }

    async create(newProduct: Product): Promise<Product> {
        try {
            const conn = await db.connect();
            const sql =
                'INSERT INTO products (name, price) VALUES($1, $2) RETURNING *';
            const result = await conn.query(sql, [
                newProduct.name,
                newProduct.price,
            ]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not create product. Error: ${err}`);
        }
    }
}

export default ProductModel;
