"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_controller_1 = __importDefault(require("../controllers/users.controller"));
var verifyAuthToken_middleware_1 = __importDefault(require("../middleware/verifyAuthToken.middleware"));
var usersRouter = express_1.default.Router();
// usersRouter.get('/test', (_req, res) => {
//     res.send('sh8al el7amd l Allah');
// });
usersRouter.get('/', verifyAuthToken_middleware_1.default, users_controller_1.default.getAllUsers);
usersRouter.get('/:user_id', verifyAuthToken_middleware_1.default, users_controller_1.default.getSingleUser);
usersRouter.post('/', verifyAuthToken_middleware_1.default, users_controller_1.default.createSingleUser);
// to create token for first user at all in the app
usersRouter.post('/signup', users_controller_1.default.createSingleUser);
exports.default = usersRouter;
