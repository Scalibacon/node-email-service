import { Router } from "express";
import emailRouter from "./Email.routes";

const routes = Router();
routes.use('/email', emailRouter);

export default routes;