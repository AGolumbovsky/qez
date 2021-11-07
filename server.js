const express = require('express');
const app = express();
const port = process.env.PORT || 8787;

app.get('/test', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/level-one', (req, res) => {
    // from db
    res.send("Great success!!!");
    console.log("Great success!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));