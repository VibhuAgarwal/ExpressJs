import { Router } from "express";
import usersRouter from "./users.mjs";
import productsRouter from "./products.mjs";

const router = Router();

router.use(usersRouter);
router.use(productsRouter);
console.log("fjfjdbf");

export default router;
