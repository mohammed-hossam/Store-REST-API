"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, DB_NAME = _a.DB_NAME, DB_NAME_TEST = _a.DB_NAME_TEST, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_USER = _a.DB_USER, DB_PASS = _a.DB_PASS, ENV = _a.ENV;
var db = new pg_1.Pool({
    host: DB_HOST,
    port: Number(DB_PORT),
    database: ENV === 'test' ? DB_NAME_TEST : DB_NAME,
    user: DB_USER,
    password: DB_PASS,
});
exports.default = db;
