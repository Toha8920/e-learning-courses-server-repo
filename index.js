const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;


const courses = require('./data/coureses.json')


app.get('/', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id == id);
    res.send(selectedCourse)
})


app.get("/", (req, res) => {
    res.send('Server is running')
})

app.listen(Port, () => {
    console.log("server is running", Port)
})