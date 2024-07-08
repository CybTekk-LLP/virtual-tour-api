import { Router } from "express";
import uploadRouter from "./upload.router";

const appRouter = Router();

appRouter.use("/uploads", uploadRouter);

export { appRouter };
