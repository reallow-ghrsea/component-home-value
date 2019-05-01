const { Client } = require('pg');

// const client = new Client({
//   host: "localhost",
//   port: 5432,
//   user: "senwl",
//   database: "propertydata"
// })

const client = new Client({
  host: "ec2-54-149-68-183.us-west-2.compute.amazonaws.com",
  port: 5432,
  user: "sen",
  password: "$sensdc",
  database: "propertydata"
})

client.connect()
  .then(() => console.log('connected to db'))
  .catch(err => console.log(err));


module.exports = {
  readAllProperties: (callback) => {
    client.query('SELECT * FROM home_value LIMIT 10', (err, data) => {
      if (err) {
        return console.log(err);
      }
      callback(err, data)
    })
  
  }, 

  // // Query to grab data for comparableHomes 
  readAllComparableHomes: (callback) => {
    client.query('SELECT * FROM comp_home LIMIT 10', (err, data) => {
      if (err) {
        return console.log(err);
      }
      callback(err, data)
    })

  }, 

  // // Query to grab data for localhomes 
  readAllLocalHomes: (callback) => {
    client.query('SELECT * FROM local_homes LIMIT 10', (err, data) => {
      if (err) {
        return console.log(err);
      }
      callback(err, data)
    })
  },

  // Query to grab data from a single property 
  readSingleProperty: (id, callback) => {
    client.query(`SELECT * FROM home_value  WHERE id = ${id}`, (err, data) => {
      if (err) return console.log(err);
      callback(err, data);
    })
    
  }
}