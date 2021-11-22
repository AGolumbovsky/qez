const express = require('express');
const app = express();
const port = process.env.PORT || 8787;
const cors = require('cors');

const question = require('./question.json')

app.use(cors({origin: true}))

app.get('/test', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/level-one', (req, res) => {
    // from db
    // res.send("Great success!!!");
    res.json(question)
    console.log("Great success!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));