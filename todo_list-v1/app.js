const express= require("express")
const bodyParser= require("body-parser")
const ejs=require("ejs")
const app=express();
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"))
var items=["Buy food","cook food","eat food"]
app.get("/",(req,res)=>{
    var today=new Date();
    var currentDay=today.getDay();
    var day="";
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",option)
    res.render('index',{kindDay:day,item:items})
});
app.post("/",function(req,res){
    let v=req.body.newvalue
    if(v.length>0)
    items.push(v)
    res.redirect("/")
})

app.listen(3000,()=>{
    console.log("server started on port number 3000");
});