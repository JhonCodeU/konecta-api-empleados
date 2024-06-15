import swaggerJSDoc from "swagger-jsdoc";

// options for the swagger docs
const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "API REST empleados",
      description: "Servicio REST para la gestión de empleados",
      version: '1.0.0',
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
      {
        url: "https://api.example.com",
        description: "Servidor de producción",
      },
    ],
    schemes: ["http", "https"],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [
    "./src/routes/auth.routes.ts",
    //"./src/routes/settlement/settlement.routes.ts",
  ],
  security: [
    {
      bearerAuth: []
    },
  ],
};

const specs = swaggerJSDoc(options);

export { specs };
