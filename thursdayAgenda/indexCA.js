// 🧠 Importerar Express samt våra routes och error-middleware
import express from "express";
import usersRouterCA from "./routesCA/usersCA.js";
import errorHandlerCA from "./middlewaresCA/errorHandlerCA.js";

const app = express();

// 🧠 Gör så att vi kan läsa JSON-data från inkommande requests
app.use(express.json());

// 🧠 Alla routes kopplade till användare går via /users
app.use("/users", usersRouterCA);

// 🧠 Här placerar vi vår globala felhanteringsmiddleware sist
app.use(errorHandlerCA);

// 🧪 Startar servern
app.listen(8080, () => {
  console.log("Servern kör på http://localhost:8080");
});
