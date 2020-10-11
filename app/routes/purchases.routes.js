module.exports = app => {
    const purchases = require("../controllers/purchase.controller.js");
  
    var router = require("express").Router();

    router.get("/", purchases.findAll);
    router.get("/:id", purchases.findOne);
    router.post("/", purchases.create);
    router.put("/:id", purchases.update);
    router.delete("/:id", purchases.delete);
  
     app.use('/api/purchases', router);
  };
  