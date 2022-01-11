import db from '../../database';
import UserModel from '../../models/user.model';

const userModel = new UserModel();

describe('User Model', () => {
    afterAll(async () => {
        try {
            const conn = await db.connect();

            const sql = 'TRUNCATE TABLE users RESTART IDENTITY CASCADE';
            await conn.query(sql);
            conn.release();
        } catch (err) {
            throw new Error(`err: ${err}`);
        }
    });

    const firstname = 'test1';
    const lastname = 'test2';
    const password = '123test';

    it('test userModel create', async (): Promise<void> => {
        const data = await userModel.create({
            firstname,
            lastname,
            password,
        });
        expect(data).toEqual({
            id: 1,
            firstname,
            lastname,
            password,
        });
    });

    it('test userModel index', async (): Promise<void> => {
        const data = await userModel.index();
        expect(data).toEqual([
            {
                id: 1,
                firstname,
                lastname,
                password,
            },
        ]);
    });

    it('test userModel show', async (): Promise<void> => {
        const data = await userModel.show(1);
        expect(data).toEqual({
            id: 1,
            firstname,
            lastname,
            password,
        });
    });
});
