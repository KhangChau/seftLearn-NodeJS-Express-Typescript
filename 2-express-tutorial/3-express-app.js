const express = require('express');
const path = require('path')

const app = express();

// instead manually defined router to upload static files like work with nodeJS
// express provide express.static(<dirToPublicFolder>)
// express will do the job above for you when you drop those static into the folder
app.use(express.static('./public'));

// ~~~~~~~~~~~~~~
// res.sendFile() with the ABSOLUTE path
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,  "./navbar-app/index.html"));
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