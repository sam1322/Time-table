const express = require('express') ; 
const app =express() ;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

database = [
    {login:"sriram" , password:"123" },
    {login:"sam" , password:"132" },
    {login:"abc" , password:"abc" },
]

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

// app.get('/error',(req,res)=>{
//     res.send("<h1>Error occured please try again </h1>")
// })

app.post('/search' , (req,res) =>{
  
    console.log("This is the req.body searched by client: ", req.body);

    database.forEach(element => {
        if(element.login==req.body.login&&element.password==req.body.password)
        {
            res.render("homepage")
        }
        console.log("This is element ",element.login,"this is req.body.login",req.body.login)
    });
    res.render("error.ejs")

})
app.post('/sem51',(req,res)=>{
    res.render("sem51.ejs")
})
app.post('/sem52',(req,res)=>{
    res.render("sem52.ejs")
})
app.post('/sem53',(req,res)=>{
    res.render("sem53.ejs")
})
app.listen(3000,()=>{
    console.log('Running at Port 3000')

})