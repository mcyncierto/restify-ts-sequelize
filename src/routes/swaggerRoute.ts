import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui";
import { Routes } from "./routes";
import { HttpServer } from "../server/httpServer";

export class SwaggerRoute implements Routes {
  public initialize(router: HttpServer): void {
    router.get("/api-docs", this.swagger.bind(this));
  }

  private async swagger(req: Request, res: Response): Promise<SwaggerUI> {
    const swaggerSpec = swaggerJSDoc({
      definition: {
        openapi: "3.1.0",
        info: {
          title: "API Documentation",
          version: "1.0.0",
        },
      },
      apis: ["../../swaggerDocs/*.ts"],
    });
    const swaggerUi = SwaggerUI({
      spec: swaggerSpec,
      dom_id: "#swagger",
    });

    return swaggerUi;
  }
}
