/* Express dependency */
const express = require ('express');
const ejs = require('ejs')
const app = express();

// set EJS as the "view engine"
// view engine = template engine
app.set("view engine", "ejs");


// ROUTES (a url fragment) => a JavaScript function

app.get("/", function(req,res){
    // req: request (what the client is sending over)
    // res: response (what you are going to send back to the client)

    //res.send("<h1>Hello world</h1>"); // send the text "hello world" back to the client
    
    //res.render("index"); // send back the content of index.ejs (file is assumed to be in the views folder)

    res.render("index",{
            "yourName":"Jon Snow",
            "luckyNumber": Math.random() * 100 
        }); // send back the content of index.ejs
            // second arg is an object (the key is the placeholder,)
            // res.render() will assume the file to be in the ` views` folder

});

app.get("/about-us", function(req,res){
    res.send("About Us");
})

app.get("/test", function(req,res){
    res.send("test");
})

// match hello/<anything>
// will match hello/paul or hello/daniel
app.get('/hello/:firstName', function(req,res){
    res.send("Hello " + req.params.firstName);
})


// start server
app.listen(8080, function(){
    console.log("Express server has started");
})

