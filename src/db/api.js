const client = require('../db/connection.js');

var items = [];
 client.connect();

 client.query ('SELECT * FROM item;', async (err, res) => {
   if (err) throw err;
   for (let row of res.rows) {
    // console.log(JSON.stringify(row));
       items = ['JSON.stringify(row)'];
   }   client.end();
 });

console.log(items);