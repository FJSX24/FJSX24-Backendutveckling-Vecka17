import { Router } from "express";
import userSchemaCA from "../validatorsCA/userSchemaCA.js";

const router = Router();

// 📌 POST /users – Skapa ny användare
router.post("/", (req, res, next) => {
  // 🧠 Validerar inkommande data med vårt Joi-schema
  const { error } = userSchemaCA.validate(req.body);

  // 🚨 Om något är fel – skicka vidare till errorHandler
  if (error) return next(error);

  // 🧪 Om allt är korrekt, skicka OK-respons
  res.status(201).json({ message: "Användare skapad!" });
});

export default router;
