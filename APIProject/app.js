const express = require("express");
const https   = require("https");
const bodyParser = require("body-parser");
let alert = require('alert');

const app = express();

var weatherdescription = "";
var temp = "";
var imageURL ="";
var unit = "";
var query = "";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req, res){
var hello = "Wellcome ,Do you want to know weather conditions today"

res.render("list", {wellcome:hello, Description:weatherdescription,tempreture:temp, source:imageURL});

});

app.post("/", function(req, res){

  query =req.body.cityName;
  const appKey = "f780088c6b542591e8846f237eb8dd6b";
  const units = req.body.units;

  if(units === "Celsius"){unit = "metric";}
  else if(units === "Fahrenheit"){unit = "imperial";}

  const url ="https://api.openweathermap.org/data/2.5/weather?ln=tr&q=" + query + "&appid=" + appKey + "&units="+unit;

  https.get(url,function(responce){
      if(responce.statusCode<400){
       responce.on("data", function(data){
         console.log(responce.statusCode);
       const weatherData = JSON.parse(data);
       temp ="Tempretur is: " + weatherData.main.temp + " " +units +" in " + query;
       weatherdescription ="Weather description: " +weatherData.weather[0].description;
       var icon = weatherData.weather[0].icon;
       imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

     });
     }
else {
  alert("Your Data is not true");
}

res.redirect("/");

  });
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
