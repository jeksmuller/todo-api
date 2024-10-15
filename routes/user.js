import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateprofile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

// create routes
const userRouter = Router();

// define routes
userRouter.post('/users/register',registerUser )

userRouter.post('/users/login', loginUser)

userRouter.post('/users/logout', logoutUser)


userRouter.post('/users/me',  userAvatarUpload.single('avatar'), updateprofile);


// export default
export default userRouter;