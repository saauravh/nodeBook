const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

const app = new express()


app.listen(4000, () => {
    console.log('App listening at port 4000')
})


app.use(express.static('public'))   //For adding static files





//      Urls redirect

app.set('view engine', 'ejs')   // add ejs templating

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
})

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})

app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})

app.get('/post/new', (req, res)  => {
    res.render('create')
    res.redirect('/')
    
})


