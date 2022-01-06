import db from '../../database';
import ProductModel from '../../models/product.model';

const productModel = new ProductModel();

describe('Product Model', () => {
    afterAll(async () => {
        try {
            const conn = await db.connect();

            const sql = 'TRUNCATE TABLE products RESTART IDENTITY CASCADE';
            await conn.query(sql);
        } catch (err) {
            throw new Error(`err: ${err}`);
        }
    });

    it('test creating product', async () => {
        const products = await productModel.create({
            name: 'test',
            price: '50',
        });
        expect(products).toEqual({
            id: 1,
            name: 'test',
            price: '50',
        });
    });

    it('test getting all product', async () => {
        const products = await productModel.index();
        expect(products).toEqual([
            {
                id: 1,
                name: 'test',
                price: '50',
            },
        ]);
    });
    it('test getting product by id', async () => {
        const products = await productModel.show(1);
        expect(products).toEqual({
            id: 1,
            name: 'test',
            price: '50',
        });
    });
});
