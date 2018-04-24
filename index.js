
var express = require('express');
var app = express();

app.get("/", function(req, res){
  res.send("hi there weclome to the test!");
});

app.get("/speak/:animal", (req, res)=> {
  var animal = req.params.animal;
  var str = "The " + animal + " says ";
  if (animal === "pig"){
    str += "OINK";
  }
  else if(animal === "cow"){
    str += "MOOOO";
  }
  else if(animal === "dog"){
    str += "WOOF";
  }
  res.send(str);
});

app.get("/repeat/:word/:num", (req, res) => {
  var word = req.params.word, 
  num = parseInt(req.params.num),
  str = "";

  for (var i = 0; i<num; i++){
    str += word + ' ';
  }
  res.send(str);


});

app.get("*",(req,res)=>{
  res.send("WAAAAAAAAAAAAAAT");
});

app.listen(3000, () => {
  console.log("runs fine!");
});