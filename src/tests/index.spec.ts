import supertest, { SuperTest, Test, Response } from 'supertest';
import db from '../database';
import app from '../index';

const request: SuperTest<Test> = supertest(app);

describe('Endpoints', () => {
    let token: string;
    afterAll(async (done) => {
        const conn = await db.connect();

        const sql =
            'TRUNCATE TABLE order_Products, orders, users, products RESTART IDENTITY CASCADE';
        await conn.query(sql);
        conn.release();
        done();
    });

    it('test mainapp server', async (): Promise<void> => {
        const response: Response = await request.get('/');
        expect(response.status).toBe(200);
    });

    describe('users', () => {
        it('test signup first to get token', async (): Promise<void> => {
            const response: Response = await request
                .post('/api/v1/users/signup')
                .send({
                    firstname: 'mohamed',
                    lastname: 'hossam',
                    password: 'password123',
                });
            expect(response.status).toBe(200);
            // console.log(response);
            token = response.body;
        });

        it('test create single user', async (): Promise<void> => {
            const response: Response = await request
                .post('/api/v1/users')
                .send({
                    firstname: 'test',
                    lastname: 'test2',
                    password: 'test123',
                })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });

        it('test get user by id', async (): Promise<void> => {
            const response: Response = await request
                .get('/api/v1/users/1')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });

        it('test getting all users', async (): Promise<void> => {
            const response: Response = await request
                .get('/api/v1/users/')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
    });

    describe('products', () => {
        it('test getting products endpoint', async (): Promise<void> => {
            const response: Response = await request.get('/api/v1/products');
            expect(response.status).toBe(200);
        });

        it('test getting product by id endpoint', async (): Promise<void> => {
            const response: Response = await request.get('/api/v1/products/1');
            expect(response.status).toBe(200);
        });

        it('test adding product endpoint', async (): Promise<void> => {
            const response: Response = await request
                .post('/api/v1/products')
                .send({ name: 'test', price: '20' })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
    });

    describe('orders', () => {
        it('test adding order', async (): Promise<void> => {
            const response: Response = await request
                .post('/api/v1/orders')
                .send({ user_id: '1', status: 'active' })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });

        it('test addProduct to an order by order_id', async (): Promise<void> => {
            const response: Response = await request
                .post('/api/v1/orders/products')
                .send({ order_id: '1', product_id: '1', quantity: '5' })
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });

        it('test get Current Order By User_id', async (): Promise<void> => {
            const response: Response = await request
                .get('/api/v1/orders/current/1')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
        });
    });
});
