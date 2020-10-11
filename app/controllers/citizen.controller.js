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


exports.update = (req, res) => {
  const id = req.params.id;

  Citizen.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Citizen was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Citizen with id=${id}. Maybe Citizen was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Citizen with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Citizen.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Citizen was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Citizen with id=${id}. Maybe Citizen was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Citizen with id=" + id
      });
    });
};
