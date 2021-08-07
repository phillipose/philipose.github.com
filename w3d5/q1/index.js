const express = require('express');
const app = express();

app.get('/ ', (req,res) =>{
  let name = req.name || 'person';
  let age = req.age || 40;

  res.send(`welcome ${name}, age:${age}`);

});
app.listen(3000, () => {
  console.log("server started at 3000");
 });