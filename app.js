const express = require('express');
const app=express();

app.get(
    '/',(req,res)=>{
        res.send({hi: 'There is any one? '});
    }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);