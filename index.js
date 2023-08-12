const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var cors = require('cors')
app.use(cors());

const categorizes = require('./data/categorizes.json');

app.get('/', (req, res) => {
    res.send('Dragon is running!')
})

app.get('/categorizes', (req, res) => {
    res.send(categorizes);
})

app.listen(port, () => {
    console.log(`Dragon API running on port ${port}`)
})