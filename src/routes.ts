import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { CreateTagController } from "./Controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateComplimentController } from "./Controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplementsController } from "./Controllers/ListUserSendComplementsController";
import { ListUserReceiveComplementsController } from "./Controllers/ListUserReceiveComplementsController";
import { ListTagsController } from "./Controllers/ListTagsController";
import { ListUserController } from "./Controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplementsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplementsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/complements/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/complements/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/Tags", ensureAuthenticated, listTagsController.handle);
router.get("/Users", ensureAuthenticated, listUsersController.handle);

export { router };