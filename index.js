const express = require('express');
const app=express();
const port =3001;

app.get('/',(req,res)=>{
    res.send("This Is Home Page");
    res.end();
});
app.get('/about',(req,res)=>{
    res.send("This Is About Page");
    res.end();
});
app.get('/contact',(req,res)=>{
    res.send("This Is Contact Page");
    res.end();
});

app.listen(port,()=>{
    console.log("App Started on port 3001");
})