const client = require('../db/connection.js');


 client.connect();

 client.query ('SELECT * FROM item;', async (err, res) => {
   if (err) throw err;
   for (let row of res.rows) {
      console.log(JSON.stringify(row));
   }   client.end();
 });

console.log(items);