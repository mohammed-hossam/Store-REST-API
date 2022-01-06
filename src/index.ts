import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import usersRouter from './routes/users.routes';
import productsRouter from './routes/products.routes';
import ordersRouter from './routes/orders.routes';

dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app: Application = express();
const mainApiRoute = '/api/v1';
app.use(express.json({ type: 'application/json' }));

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

app.get('/', (req: Request, res: Response): void => {
    res.send('welcome');
});

app.use(`${mainApiRoute}/users`, usersRouter);
app.use(`${mainApiRoute}/products`, productsRouter);
app.use(`${mainApiRoute}/orders`, ordersRouter);

app.use((req: Request, res: Response) => {
    res.status(404).send('page not found please enter correct URL');
});

export default app;

/* const _routes: [string, Router][] = [
  ['/products', ProductController],
  ['/users', UserController],
  ['/orders', OrderController]
];

export const routes: Function = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  }); */
