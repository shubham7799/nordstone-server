const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}));

app.post('/add',(req,res)=>{
    res.status(200).json({value:parseInt(req.body.n1)+parseInt(req.body.n2)});
});

app.post('/mult',(req,res)=>{
    res.status(200).json({value:parseInt(req.body.n1)*parseInt(req.body.n2)});
});

app.post('/sub',(req,res)=>{
    res.status(200).json({value:parseInt(req.body.n1)-parseInt(req.body.n2)});
});

app.listen(process.env.PORT || 3000,()=>{console.log("Listening...")})