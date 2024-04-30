// app.js
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// const petRoutes = require('./routes/pet.routes.js')
const ownerRoutes = require('./routes/owner.route.js')
// Define routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server

const uri= process.env.DB_CONNECTION
const PORT = process.env.PORT

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to database');

        // Set up routes
        // app.use("/api/pets", petRoutes);
        app.use("/api/owners", ownerRoutes);

        // Listen on port 3001
        app.listen(3001 || PORT , () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch(err => console.log('Connection Failed!', err));