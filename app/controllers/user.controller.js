const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

exports.create = (req, res) => {
  console.log(req.body)
  if (!req.body.userName || !req.body.password || !req.body.userType) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
//admin password: noamslikia
  const user = {
    userName: req.body.userName,
    password: req.body.password,
    userType: req.body.userType,
    token: null
  };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


exports.login = (req, res) => {
  
  if (!req.body.userName || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const user = {
    userName: req.body.userName,
    password: req.body.password
  };

  //search my username in the database  
  User.findOne({ where: { userName: user.userName } })
    .then(thisUser => {
      console.log("try login",thisUser)
      //if you found me then check if I typed the correct password
      //the password is in hash mode - I need to convert one of them to the other ones form  
      bcrypt.compare( user.password, thisUser.password, function(err, result) {
        console.log("even the password ok")
        //if the user typed in the correct password, I save the login token in the database under his user.
        thisUser.token="tokenTest123456789";
        thisUser.save();
        res.send(thisUser);
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "username or password are incorrect"
      });
    });
};

exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};


exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
}

