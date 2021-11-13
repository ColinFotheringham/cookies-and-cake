// import Nav from './MainNav/MainNav';
import React from 'react';
const client = require('../db/connection.js');

var items = [];

client.connect();

client.query ('SELECT * FROM item;', async (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
   console.log(JSON.stringify(row));
    items = [JSON.stringify(row)];

  }
  client.end();
});



function Cookiecakes() {
  return (
    <div>
     <h1>Cookie Cakes Page</h1>
    </div>
  );
}

export default Cookiecakes;
