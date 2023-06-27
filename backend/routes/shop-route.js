import express from "express";

const router = express.Router();
router.use(express.json());

//Controllers

import {
  cartController,
  deleteCartController,
  getCartController,
  addOrderController,
  getOrderController,
} from "../controllers/shop-controller.js";

router.post("/addcartitems", cartController);
router.post("/deletecartitems", deleteCartController);
router.post("/getcartitems", getCartController);
router.post("/addorderitems", addOrderController);
router.post("/getordereditems", getOrderController);

export default router;
