"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var orders_controller_1 = __importDefault(require("../controllers/orders.controller"));
var verifyAuthToken_middleware_1 = __importDefault(require("../middleware/verifyAuthToken.middleware"));
var ordersRouter = express_1.default.Router();
// addorder
ordersRouter.post('/', verifyAuthToken_middleware_1.default, orders_controller_1.default.addOrder);
// addProduct to an order by order_id
ordersRouter.post('/products', verifyAuthToken_middleware_1.default, orders_controller_1.default.addProduct);
// get Current Order By User_id
ordersRouter.get('/current/:user_id', verifyAuthToken_middleware_1.default, orders_controller_1.default.getOrderByUser_id);
exports.default = ordersRouter;
