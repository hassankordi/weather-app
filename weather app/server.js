// Setup empty JS object to act as endpoint for all routes
// import "body-parser";
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express();



/* Middleware*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));





/*post the obj who i send it*/

app.post("/postll", function (req, res) {
  projectData = req.body;
  console.log(projectData)

})


/*get the obj who i send it*/

app.get("/ll" , function(req,res){
     
      res.send(projectData)
      console.log(projectData)
  
     
  })


const port = 1000;
const server = app.listen(port, function () {
  console.log("local host at " + port)
})





