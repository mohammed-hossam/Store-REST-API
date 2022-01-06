import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const tokenSecret = process.env.TOKEN_SECRET as Secret;

async function verifyAuthToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (authorizationHeader) {
            const token = authorizationHeader?.split(' ')[1];
            // const decodedData(firstName,lastName,password) = jwt.verify(token, tokenSecret);
            jwt.verify(token, tokenSecret);
            return next();
        }
        return res.status(401).json('Please enter token with the request');
    } catch (err) {
        return res
            .status(401)
            .json(
                'token is not right, you are not authorized to do this operation'
            );
    }
}

export default verifyAuthToken;
