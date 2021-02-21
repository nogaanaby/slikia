const express = require("express");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const mysql = require("mysql");
const cors = require("cors");
const { Sequelize } = require('sequelize');

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


/*******************************************************/
const db = require("./app/models");


//create if exist only, dont create the same table twice
//create table name only small ketter start
//update fields: add. delete,edit

db.sequelize.sync();
// use ‘force’ option to sync between model schema and database only when you don’t need to maintain data in the table.
//this command would alter the table but delete your data
// db.sequelize.sync({ alter: true, force: true  }).then(() => {

//     console.log("Drop and re-sync db.");
//   }).catch(e => {
//     console.log(e)
//   })
/******************************************************/

require("./app/routes/citizen.routes")(app);
require("./app/routes/user.routes")(app);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

