const express = require('express');
const app = express();
const port = process.env.PORT || 8787;
const cors = require('cors');

const question1 = require('./questions1.json')
const question2 = require('./questions2.json')


app.use(cors({origin: true}))

app.get('/test', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/level-one', (req, res) => {
    // from db
    // res.send("Great success!!!");
    res.json(question1)
    console.log("Great success! Level One");
});

app.get('/level-two', (req, res) => {
    // from db
    // res.send("Great success!!!");
    res.json(question2)
    console.log("Great success! Level Two");
});

app.listen(port, () => console.log(`Listening on port ${port}`));