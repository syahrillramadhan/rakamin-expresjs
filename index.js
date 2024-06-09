const express = require('express')
const routes = require('./routes')

const port = 3000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes);

app.listen(port, () => {
    console.log(`Server running in ${port}`);
});