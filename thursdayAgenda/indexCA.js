import express from "express";

// Lägg till app.use(cors()) för att lösa CORS
import cors from "cors";

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import userRouterCA from "./routesCA/userCA.js";


const app = express();
const PORT = 8081;

app.use(cors()); 

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "RESTful API",
      description: "API-dokumentation med Swagger",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8081",
        description: "Lokal utvecklingsserver",
      },
    ],
  },
  apis: ["./routesCA/*.js"], // Här letar Swagger efter @swagger-kommentarer
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use("/api/users", userRouterCA);

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs); // detta är resultatet från swaggerJsDoc()
});

app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`);
});
