const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 8787; //Line 3

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.listen(port, () => console.log(`Listening on port ${port}`));