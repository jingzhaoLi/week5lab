let express= require('express');
let app=express();
let morgan=require('morgan');
let bodyParser=require('body-parser')
let ejs=require('ejs');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
// app.set(views,views);

    //pre posessing before app.get
    // app.use(function(req,res,next){
    //     console.log("Hello from middleware...1");
    //     next();
    // })
    // app.use(function(req,res,next){
    //     console.log("Hello from middleware...2");
    //     next();
    // })

//static file
// app.use(express.static('views'));
app.use(express.static('images'));
app.use(morgan('short'));
// app.set('portnNo',8080);//set pair of key and value
//format url encoded
app.use(bodyParser.urlencoded({
    extended: false
}));
let ar=[{name:"Tim",age:23},{
    name:'john',age:24}];
app.get('/',function(req,res){
    console.log('i am inside app.get');
    // res.sendFile('index.html');
    // res.send("Thank you for your request")
    let randomId=2;
    res.render('index.html',{username:"Tim",data: ar});
});
//catch post request
app.post("/data",function(req,res){
    console.log("i got a post request");
    console.log(req.body.carName);
    
    

});
app.listen(8080);

