import { Router, Express } from "express";

const handleRoutes = (app: Express, ...routes: Router[]) => {
  routes.forEach((route) => {
    return app.use("/api/v1/", [route]);
  });
};

export default handleRoutes;
