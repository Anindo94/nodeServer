const express = require('express');
const ejs = require('ejs');

const port = process.env.PORT || 3000;
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    // res.send('<h1>hello express</h1>');
    res.render('home.ejs',{
        siteTitle: 'Home',
        pageTitle: 'Home Page',
        bodyContain: 'hello home',
        currentYear: new Date().getFullYear()
});
});

app.get('/about', (req,res) => {
    res.render('about.ejs',{
        siteTitle: 'About',
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad',(req,res) => {
    res.send({
errorMsg:'this is an error !'
    });
})

app.listen(port, () => {
    console.log(`server is up on ${port}`);
});