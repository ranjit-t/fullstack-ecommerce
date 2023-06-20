import express from "express";

const router = express.Router();
router.use(express.json());

//Controllers

import {
  signUpController,
  loginController,
  loginVerifyController,
} from "../controllers/users-controller.js";

//

//Signup Route

router.post("/signup", signUpController);

//Login Route

router.post("/login", loginController);

router.post("/loginverify", loginVerifyController);

export default router;
