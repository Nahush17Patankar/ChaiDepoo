require('dotenv').config();
const express= require('express');
const app = express();

const port=3000;

app.get('/',(req,res) => {
    res.send("Hi");

})

app.get('/twitter', (req,res) => {
    res.send("Welcome to twitter");

})

app.get('/login',(req,res) => {
    res.send('<h1>Lofin in nahush code </h1>');

})

app.get('/youtube', (req,res) => {
    res.send("<h2>Welcome to Chai</h2>");
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);

})

app.get('/github', (req,res) => {
    res.json({name: "Nahush", compnay:"Cogni"})
})