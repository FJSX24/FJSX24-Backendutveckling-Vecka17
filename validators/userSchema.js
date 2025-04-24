import Joi from "joi";

// Här ska vi definiera våra regler hur en user måste se ut
const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).required(),
    password: Joi.string().min(7).required()
});

export default userSchema;