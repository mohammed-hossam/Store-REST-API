"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_products_model_1 = __importDefault(require("../models/order_products.model"));
var order_model_1 = __importDefault(require("../models/order.model"));
var orderModel = new order_model_1.default();
var orderProductsModel = new order_products_model_1.default();
function addOrder(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user_id, status_1, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    user_id = Number(req.body.user_id);
                    status_1 = req.body.status;
                    if (!(user_id && status_1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, orderModel.create({ user_id: user_id, status: status_1 })];
                case 1:
                    data = _a.sent();
                    res.status(200).json(data);
                    return [3 /*break*/, 3];
                case 2:
                    res.status(400).send('please enter right required data');
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    res.status(400).send('operation failed');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var order_id, product_id, quantity, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    order_id = Number(req.body.order_id);
                    product_id = Number(req.body.product_id);
                    quantity = Number(req.body.quantity);
                    if (!(order_id && product_id && quantity)) return [3 /*break*/, 2];
                    return [4 /*yield*/, orderProductsModel.create({
                            order_id: order_id,
                            product_id: product_id,
                            quantity: quantity,
                        })];
                case 1:
                    data = _a.sent();
                    res.status(200).json(data);
                    return [3 /*break*/, 3];
                case 2:
                    res.status(400).send('please enter right required data');
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    res.status(400).send('please enter right required data');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getOrderByUser_id(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user_id, data, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user_id = Number(req.params.user_id);
                    return [4 /*yield*/, orderModel.showCurrentByUser_id(user_id)];
                case 1:
                    data = _a.sent();
                    res.status(200).json(data);
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    res.status(400).json('please enter right required data');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var ordersController = {
    addOrder: addOrder,
    addProduct: addProduct,
    getOrderByUser_id: getOrderByUser_id,
};
exports.default = ordersController;
