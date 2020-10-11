# slikia
crm for the Slikia


 npm install

 sudo apt install mysql-server //or whatever server you have

 sudo service mysql start // start mysql services, if its ubuntu and you use root@localhost you should give a password to you root mysql user otherwize its not gong to give you to access the database: https://stackoverflow.com/questions/7864276/cannot-connect-to-database-server-mysql-workbench
 
create databse slikia;

npx sequelize-cli db:migrate







then run all the sequlize command or so


npx sequelize-cli db:migrate:undo:all --to 20201006082948-create-citizen.js


npx sequelize-cli model:generate --name Purchase --attributes citizenId:integer,budgetId:integer,productId:integer,purchaseQuantity:integer --underscored






npx sequelize-cli model:generate --name Citizen --attributes firstName:string,lastName:string,citizenId:integer --underscored




quantity:integer,category:string,price:integer --underscored


npx sequelize-cli migration:generate --name migration-skeleton