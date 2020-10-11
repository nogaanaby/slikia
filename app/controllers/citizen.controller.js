const db = require("../models");
const Citizen = db.Citizen;
//const Citizen = require("../models/citizen.js");
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    console.log(req.body)
    if (!req.body.budgetId || !req.body.firstName || !req.body.lastName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const citizen = {
      budgetId: req.body.budgetId,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };
  
    Citizen.create(citizen)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Citizen."
        });
      });
};
  

exports.findAll = (req, res) => {
    Citizen.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving citizens."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Citizen.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Citizen with id=" + id
        });
      });
}

// // Update a Citizen by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Citizen with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Citizens from the database.
// exports.deleteAll = (req, res) => {
  
// };

// // Find all published Citizens
// exports.findAllPublished = (req, res) => {
  
// };
