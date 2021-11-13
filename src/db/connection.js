const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://nrwtcnxdafbpfi:b9c114b44e256fda6de15e0a9f0e21bcf44d9666d0657c6cfaa63ccb8aa9048d@ec2-107-23-135-132.compute-1.amazonaws.com:5432/dfrn3numo46rsb",
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = client;