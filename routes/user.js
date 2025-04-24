import { Router } from "express";
import userSchema from "../validators/userSchema.js";

const router = Router();

// POST för att skapa en ny användare
router.post("/", (req, res, next) => {
// valider inkommande data med vårt joi-schema
const {error} = userSchema.validate(req.body);

if (error) {
    return next(error);
}



res.status(201).json({message: "användare skapad!"})


});

export default router;