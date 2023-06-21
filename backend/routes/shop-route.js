import express from "express";

const router = express.Router();
router.use(express.json());

//Controllers

import {
  cartController,
  getCartController,
} from "../controllers/shop-controller.js";

router.post("/addcartitems", cartController);
router.post("/getcartitems", getCartController);

export default router;
