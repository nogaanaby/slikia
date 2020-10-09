const express = require("express");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const mysql = require("mysql");
const cors = require("cors");
const { Sequelize } = require('sequelize');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


console.log("before connction");

/********************************************************/
const sequelize = new Sequelize('slikia', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/var/run/mysqld/mysqld.sock',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
});

console.log("reached here?");

try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


/*******************************************************
const db = require("./app/models");

//db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
******************************************************/

//require("./app/routes/citizen.routes")(app);


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

