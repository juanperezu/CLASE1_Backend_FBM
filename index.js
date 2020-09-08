const express = require('express');
const app = express(); //constructor  Clase Express
const bodyParser = require('body-parser');
app.get('/',function(req,res){
res.send('Hola Mundasso PCJIC');// genera una respuest(res)response
});

app.get('/json',function(req,res){ // Request(req)
    //Response res
res.json({hola:'Media Técnica PCJIC'});
});

app.get('/acerca',function(req,res){ // Request(req)
    //Response res
res.send("Acerca del proyecto");
});

app.get('/inicio',function(req,res){ // Request(req)
    //Response res
res.send("Home");
});


app.get("/user/:id",function(req,res){
res.send("user "+req.params.id);

});

// Nuevo
app.patch('/modificar/user',(req,res) => {
    console.log(req.body);
    const {name,last_name,age,is_active} = req.body;
    res.send({
        id:'19',
        name,
        last_name,
        age,
        is_active
    });
});





app.listen(5057,function(){
console.log("El servidor se encuentra activo");

});


