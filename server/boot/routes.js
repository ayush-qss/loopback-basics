"use strict";

module.exports = function (app) {
  var router = app.loopback.Router();

  router.post("/register", async function (req, res) {
    const { email, password, name } = req.body;
    const data = await app.models.Userdata.create({ email, password, name });
    return res.json(data);
  });

  router.post("/login", async function (req, res) {
    const { email, password } = req.body;
    const data = await app.models.Userdata.find({ where: { email, password } });
    return res.json(data);
  });

  app.use(router);
};
