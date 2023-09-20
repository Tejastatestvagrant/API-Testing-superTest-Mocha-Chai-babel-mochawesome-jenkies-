const express = require("express");
const app = express();
const port = 5000;
const  bodyParser = require("body-parser");
const cors = require('cors')
const router = require("./Router/user")
//connect the database
require("./model/db");

app.use(cors())
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use("/api",router)




// where we start the server 
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});




