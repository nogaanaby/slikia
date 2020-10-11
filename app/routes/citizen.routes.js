module.exports = app => {
    const citizens = require("../controllers/citizen.controller.js");
  
    var router = require("express").Router();
  

    router.get("/", citizens.findAll);
    router.get("/:id", citizens.findOne);
    router.post("/", citizens.create);

    // // Create a new citizen
    //

  
    // // Retrieve all published citizens
    // router.get("/published", citizens.findAllPublished);
  
    // Retrieve a single citizen with id

  
    // // Update a citizen with id
    // router.put("/:id", citizens.update);
  
    // // Delete a citizen with id
    // router.delete("/:id", citizens.delete);
  
    // // Delete all citizens
    // router.delete("/", citizens.deleteAll);
  
     app.use('/api/citizens', router);
  };
  