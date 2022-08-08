const handleRoutes = (app, ...routes) => {
  routes.forEach((route) => {
    return app.use("/api/v1/", [route]);
  });
};


module.exports = handleRoutes