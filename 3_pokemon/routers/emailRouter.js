import { Router } from "express";
import { sendMail } from "../utils/emailGenerator.js";
const emailRouter = Router();

emailRouter.post("/email", (req, res) => {
  sendMail(req.body);

  res.send("ok");
});

export default emailRouter;
