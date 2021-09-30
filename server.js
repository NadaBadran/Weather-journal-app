// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

// Start up an instance of app

const server = express();
// Cors for cross origin allowance
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.listen(5050, ()=> {
    console.log("server is running");
});


server.post("/save", (req, res,)=> {
    projectData = {
    date: req.body.date,
    temperature: req.body.temp,
    feeling: req.body.feeling,
  };
});

server.get("/weather", (req, res) =>{
  res.send(projectData);
});

// Initialize the main project folder
server.use(express.static('website'));


  

// Setup Server



