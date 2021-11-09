const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    Host: 'ec2-107-23-135-132.compute-1.amazonaws.com',
    Database: "dfrn3numo46rsb",
    User: "nrwtcnxdafbpfi",
    Port: "5432",
    Password: "b9c114b44e256fda6de15e0a9f0e21bcf44d9666d0657c6cfaa63ccb8aa9048d",
    URI: "postgres://nrwtcnxdafbpfi:b9c114b44e256fda6de15e0a9f0e21bcf44d9666d0657c6cfaa63ccb8aa9048d@ec2-107-23-135-132.compute-1.amazonaws.com:5432/dfrn3numo46rsb"
});

client.connect();

client.query('SELECT * FROM item;', (err, res)=> { 
    if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
    client.end();
})
