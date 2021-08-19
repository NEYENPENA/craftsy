const express = require('express');
const app = express();
const port = 3080;
const user = require('./routes/user');
const main = require('./routes/main');


app.use(express.static('public'));

app.use('/', user);
app.use('/', main);

app.listen(port, () => console.log("Server listening at http://localhost:" + port));