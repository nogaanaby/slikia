module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    router.get("/:id", users.findOne);
    router.post("/", users.create);
    router.get("/", users.findAll);

    router.post("/login", users.login);
    router.get("/getInfo/:token", users.getInfo);

     app.use('/api/user', router);
  };
  