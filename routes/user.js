import { Router } from "express";
import { getProfile, loginUser, logoutUser, registerUser, updateprofile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthentication } from "../middlewares/auth.js";

// create routes
const userRouter = Router();

// define routes
userRouter.post('/users/register', registerUser)

userRouter.post('/users/login', loginUser)

userRouter.get('/users/me', isAuthentication, hasPermission('get_profile'), getProfile)

userRouter.post('/users/logout', isAuthentication, logoutUser)


userRouter.patch('/users/me', isAuthentication, hasPermission('update_profile'), userAvatarUpload.single('avatar'), updateprofile);


// export default
export default userRouter;