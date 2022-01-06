import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../models/user.model';

dotenv.config();
const tokenSecret = process.env.TOKEN_SECRET as Secret;

const userModel = new UserModel();

async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const data = await userModel.index();
        // console.log(data);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getSingleUser(
    req: Request,
    res: Response
): Promise<void | Response> {
    try {
        const id = Number(req.params.user_id);
        const data = await userModel.show(id);
        if (data) {
            return res.status(200).json(data);
        }
        return res.status(400).send('no data found wih this id');
    } catch (err) {
        return res.status(400).send('please enter right required data');
    }
}

async function createSingleUser(req: Request, res: Response): Promise<void> {
    try {
        const { firstname, lastname, password } = req.body;

        if (firstname && lastname && password) {
            const newUser = await userModel.create({
                firstname,
                lastname,
                password,
            });
            const token = jwt.sign({ newUser }, tokenSecret);
            res.status(200).json(token);
        }
    } catch (err) {
        res.status(400).send(
            'please send firstName,lastName,password in the body as json'
        );
    }
}

const productsController = {
    getAllUsers,
    getSingleUser,
    createSingleUser,
};
export default productsController;

/* datashape:
        [
            {
              id: 1,
              firstname: 'mohamed',
              lastname: 'hossam',
              password: '$2b$10$4DKe4SJIpZgiJEiqLrMdcOWnI0Bb8zXyP418Qz9duS335awVztEQW'
            },
            {
              id: 2,
              firstname: 'marwan',
              lastname: 'khaled',
              password: '$2b$10$oZvVAKjRxWEqGIfvHNxD3esco0o5wCPDhiJuMxOumH3hY0yYmypea'
            }
          ] */
