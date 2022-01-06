"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var orders_controller_1 = __importDefault(require("../controllers/orders.controller"));
var ordersRouter = express_1.default.Router();
// ordersRouter.get('/current/:user_id', ordersController.getOrderByUser_id);
ordersRouter.post('/', orders_controller_1.default.addOrder);
ordersRouter.post('/:order_id/products', orders_controller_1.default.addProduct);
exports.default = ordersRouter;
