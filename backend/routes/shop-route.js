import express from "express";

const router = express.Router();
router.use(express.json());

//Controllers

import { cartController } from "../controllers/shop-controller.js";

router.post("/addcartitems", cartController);

export default router;
