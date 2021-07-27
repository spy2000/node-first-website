const express = require('express');
const path = require('path')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;


//get files paths
const publicPath = path.join(__dirname,"../public")
const viewPath = path.join(__dirname,"../templete/views")
const partialPath = path.join(__dirname,"../templete/partials")

//set view engine
app.set('view engine','hbs')

//set view file path
app.set('views',viewPath)

//set partial file path
hbs.registerPartials(partialPath)

//set middle file path
app.use(express.static(publicPath))

app.get("/",(req,res)=>{
    res.render('index');
    
})
app.get("/about",(req,res)=>{
    res.render('about');

})
app.get("/contact",(req,res)=>{
    res.render('contact');

})
app.get("/weather",(req,res)=>{
    res.render('weather');

})
// app.get('*',(req,res)=>{
    
// })

app.listen(port,()=>console.log(`server runing on port ${port}`))