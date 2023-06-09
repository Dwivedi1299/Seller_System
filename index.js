const express=require('express');
const dp=require('./config/mongoose')
const  app=express();
const Seller=require('./models/contact') 
const  Registation=require('./models/Reg')

const port=8000;
app.use(express.urlencoded({extended:false}));
//use routes
//
//

//set view engine
app.set('view engine','ejs');
app.set('views','./views')


app.use(express.static('assets'));

app.use('/',require('./routes'));
//
app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runnig on port"+port);
})
