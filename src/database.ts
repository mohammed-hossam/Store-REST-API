import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const { DB_NAME, DB_NAME_TEST, DB_HOST, DB_PORT, DB_USER, DB_PASS, ENV } =
    process.env;

const db = new Pool({
    host: DB_HOST,
    port: Number(DB_PORT),
    database: ENV === 'test' ? DB_NAME_TEST : DB_NAME,
    user: DB_USER,
    password: DB_PASS,
});
export default db;
