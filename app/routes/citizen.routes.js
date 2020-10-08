module.exports = app => {
    //const citizens = require("../controllers/citizen.controller.js");
  
    var router = require("express").Router();
  

    router.get("/", (req,res)=>{
      try{
        res.send("hi")
      }catch(e){
        res.status(500).send(e)
      }
    });


    // // Create a new citizen
    // router.post("/", citizens.create);
  
    // // Retrieve all citizens
    // router.get("/", citizens.findAll);
  
    // // Retrieve all published citizens
    // router.get("/published", citizens.findAllPublished);
  
    // // Retrieve a single citizen with id
    // router.get("/:id", citizens.findOne);
  
    // // Update a citizen with id
    // router.put("/:id", citizens.update);
  
    // // Delete a citizen with id
    // router.delete("/:id", citizens.delete);
  
    // // Delete all citizens
    // router.delete("/", citizens.deleteAll);
  
     app.use('/api/citizens', router);
  };
  