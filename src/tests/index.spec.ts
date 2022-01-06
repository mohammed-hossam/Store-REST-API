import supertest, { SuperTest, Test, Response } from 'supertest';
import app from '../index';

const request: SuperTest<Test> = supertest(app);

describe('Endpoints', () => {
    afterAll((done) => {
        done();
    });

    it('test mainapp server', async (): Promise<void> => {
        const response: Response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it('test getting products endpoint', async (): Promise<void> => {
        const response: Response = await request.get('/api/v1/products');
        expect(response.status).toBe(200);
    });

    it('test getting product by id endpoint', async (): Promise<void> => {
        const response: Response = await request.get('/api/v1/products/1');
        expect(response.status).toBe(200);
    });
});
