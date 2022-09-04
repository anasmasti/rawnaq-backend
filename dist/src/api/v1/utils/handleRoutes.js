"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleRoutes = (app, ...routes) => {
    routes.forEach((route) => {
        return app.use("/api/v1/", [route]);
    });
};
exports.default = handleRoutes;
