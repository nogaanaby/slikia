const db = require("../models");
const Citizen = db.citizens;
const Op = db.Sequelize.Op;

// // Create and Save a new Citizen
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.title) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
  
//     // Create a Citizen
//     const citizen = {
//       title: req.body.title,
//       description: req.body.description,
//       published: req.body.published ? req.body.published : false
//     };
  
//     // Save Citizen in the database
//     Citizen.create(citizen)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Citizen."
//         });
//       });
// };
  

// Retrieve all Citizen from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Citizen.findAll({ where: condition })
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

// // Find a single Citizen with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     Citizen.findByPk(id)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving Citizen with id=" + id
//         });
//       });
// }

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
