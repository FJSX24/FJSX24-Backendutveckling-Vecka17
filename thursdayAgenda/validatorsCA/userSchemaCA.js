import Joi from "joi";

// 🧠 Här definierar vi reglerna för hur en "user" måste se ut
const userSchemaCA = Joi.object({
  name: Joi.string().min(3).required(), // Minst 3 tecken
  email: Joi.string().email().required(), // Måste vara giltig e-post
  age: Joi.number().integer().min(18).required(), // Minst 18 år
});

export default userSchemaCA;
