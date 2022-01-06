import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import db from '../database';

dotenv.config();
const { PEPPER, SALT_ROUNDS, ENV } = process.env;

interface User {
    id?: number;
    firstname: string;
    lastname: string;
    password: string;
}

class UserModel {
    async index(): Promise<User[]> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM users';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`operation of getting users faild. Error: ${err}`);
        }
    }

    async show(id: number): Promise<User> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM users WHERE id=$1';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`operation of getting user faild. Error: ${err}`);
        }
    }

    async create(newUser: User): Promise<User> {
        try {
            const conn = await db.connect();
            const hashedPassword = bcrypt.hashSync(
                newUser.password + PEPPER,
                Number(SALT_ROUNDS)
            );
            const sql =
                'INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *';
            const result = await conn.query(sql, [
                newUser.firstname,
                newUser.lastname,
                ENV === 'test' ? newUser.password : hashedPassword,
            ]);
            // console.log(result.rows[0]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`operation of creating user faild. Error: ${err}`);
        }
    }
}

export default UserModel;
