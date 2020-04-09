const express = require('express');
require('dotenv').config();

const app = express();

// Endpoints
app.get("/public", function(req, res) {
    res.json({
        message: "Hello"
    });
});

app.listen(3001);

console.log("API server listening on " + process.env.REACT_APP_API_URL);