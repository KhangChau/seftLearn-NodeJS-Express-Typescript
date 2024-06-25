const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("hello world");
})
// ~~~~~~~~~~~~~~
app.get('/index', (req, res) => {
    res.status(200).sendFile("./navbar-app/index.js");
})
// ~~~~~~~~~~~~~~~
app.get('/about', (req, res) => {
    res.status(200).send("about");
})
app.get('/*', (req, res) => {
    res.status(404).send("<h1>We don't found the page you looking for.</h1>");
})


app.listen(8080, () => {
    console.log(`server is running http://localhost:8080`);
})