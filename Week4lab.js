let express = require('express');
let app = express();
//Setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let bodyParser = require("body-parser");

app.use(express.static('images'));
app.use(express.static('css'));

app.use(bodyParser.urlencoded({
    extended:true
}))
let viewsPath = __dirname + "/views/";
let db = [];

app.get("/", function (req, res) {
    console.log("Homepage request");
    // generate the relative path
    let fileName = viewsPath + "index.html";
    // send index.html back to the client
    res.sendFile(fileName);
  });

app.get("/newTask",function (req,res) {
    let fileName=viewsPath+"newTask.html"
    res.sendFile(fileName);
  });
app.get("/listTask",function (req,res) {
    res.render("listTask",{Data:db});
  });
app.post("/data",function(req,res){
    db.push(req.body);
    res.render("listTask",{Data:db})
})

app.listen(8080);