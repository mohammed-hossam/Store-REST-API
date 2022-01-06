"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var products_controller_1 = __importDefault(require("../controllers/products.controller"));
var verifyAuthToken_middleware_1 = __importDefault(require("../middleware/verifyAuthToken.middleware"));
var productsRouter = express_1.default.Router();
productsRouter.get('/', products_controller_1.default.getAllProducts);
productsRouter.get('/:product_id', products_controller_1.default.getSingleProduct);
productsRouter.post('/', verifyAuthToken_middleware_1.default, products_controller_1.default.createSingleProduct);
exports.default = productsRouter;
