const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var cors = require('cors')
app.use(cors());

const categorizes = require('./data/categorizes.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('Dragon is running!')
})

app.get('/categorizes', (req, res) => {
    res.send(categorizes);
})

app.get('/news', (req, res) => {
    res.send(news);
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectNews = news.find(n => n._id === id);
    res.send(selectNews);
})
app.get('/categorizes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categorizesNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categorizesNews);
    }

})
app.listen(port, () => {
    console.log(`Dragon API running on port ${port}`)
})