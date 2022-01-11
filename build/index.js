"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
var users_routes_1 = __importDefault(require("./routes/users.routes"));
var products_routes_1 = __importDefault(require("./routes/products.routes"));
var orders_routes_1 = __importDefault(require("./routes/orders.routes"));
dotenv.config();
var port = Number(process.env.PORT) || 3000;
var app = (0, express_1.default)();
var mainApiRoute = '/api/v1';
app.use(express_1.default.json({ type: 'application/json' }));
app.listen(port, function () {
    console.log("http://localhost:".concat(port, "/"));
});
app.get('/', function (req, res) {
    res.send('welcome');
});
app.use("".concat(mainApiRoute, "/users"), users_routes_1.default);
app.use("".concat(mainApiRoute, "/products"), products_routes_1.default);
app.use("".concat(mainApiRoute, "/orders"), orders_routes_1.default);
app.use(function (req, res) {
    res.status(404).send('page not found please enter correct URL');
});
exports.default = app;
