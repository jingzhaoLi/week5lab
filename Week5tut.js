let express = require('express');
let app = express();
//Setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


var db=[];
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended:false
}))

var filePath=__dirname+"/views/"
app.use(express.static("img"));

app.get("/",function (req,res) {
    let fileName=filePath+ "index1.html";
    res.sendFile(fileName)
})
app.get("/addCustomer",function(req,res){
    let fileName=filePath+"addCustomer.html";
    res.sendFile(fileName);
})
app.get("/showall",function(req,res){
    res.render("showall",{customer:db});

})

app.post("/addCustomerInfo",function (req,res) {
    db.push(req.body);
    res.render("showall",{customer:db});
})
app.listen(8080);
