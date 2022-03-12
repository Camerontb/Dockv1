const mysql = require('mysql2')
const { createPool } = require('mysql2/promise')

//Shrey i've also tried the const connection.query() method before using pool and i still cant write to the DB
//Can you please check your port no. If its correct. On my system its connecting with port no . 8889
const pool = mysql.createPool({
  host: 'localhost',
  user: 'postgres',
  password: 'Diesel',
  database: 'cams',
  port: 3500,
  waitForConnections: true,
})

module.exports = pool
