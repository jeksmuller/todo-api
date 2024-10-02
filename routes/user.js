import { Router } from "express";
import { login, logout, register } from "../controllers/user.js";

// create routes
const userRouter = Router();

// define routes
userRouter.post('/users/register',register )

userRouter.post('/users/login', login)

userRouter.post('/users/logout', logout)


// export default
export default userRouter;