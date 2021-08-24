const express = require('express');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Event Details API");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
