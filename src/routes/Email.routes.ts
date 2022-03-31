import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import emailController from "../controllers/email.controller";

const emailRouter = Router();

emailRouter.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    content: Joi.string().required()
  })
}), emailController.sendEmail);

export default emailRouter;