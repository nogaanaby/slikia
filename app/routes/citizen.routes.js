module.exports = app => {
    const citizens = require("../controllers/citizen.controller.js");
  
    var router = require("express").Router();

    router.get("/", citizens.findAll);
    router.get("/:id", citizens.findOne);
    router.post("/", citizens.create);
    router.put("/:id", citizens.update);
    router.delete("/:id", citizens.delete);
  
     app.use('/api/citizens', router);
  };
  