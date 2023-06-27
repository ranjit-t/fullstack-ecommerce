import express from "express";

const router = express.Router();
router.use(express.json());

//Controllers

import {
  signUpController,
  loginController,
  loginVerifyController,
  logOutController,
} from "../controllers/users-controller.js";

//

//Signup Route

router.post("/signup", signUpController);

//Login Route

router.post("/login", loginController);

router.post("/loginverify", loginVerifyController);
router.get("/logout", logOutController);

export default router;
