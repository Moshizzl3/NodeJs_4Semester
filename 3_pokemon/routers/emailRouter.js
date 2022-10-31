import { Router } from "express";
import { sendMail } from "../utils/emailGenerator.js";
const emailRouter = Router();

emailRouter.post("/email", (req, res) => {
  sendMail(req.body)
    .then((mail) => {
      res.status(200).send({ data: mail });
    })
    .catch((err) => {
      res.status(404).send({ data: err });
    });
});

export default emailRouter;
