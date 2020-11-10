module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    router.get("/:id", users.findOne);
  
     app.use('/api/user', router);
  };
  