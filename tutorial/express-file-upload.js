var express = require('express');
var app = express();
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

app.get('/file_upload', function(req, res){
    res.sendFile(__dirname + '/' + "static/html/fileUpload.html");
});

app.post('/file_upload', upload.single('file'), function(req, res){
    console.log(req.file.filename);
    console.log(req.file.path);
    console.log(req.file.mimetype);
    var file = __dirname + '/' + req.file.filename;

    fs.readFile(req.file.path, function(err, data){
        fs.writeFile(file, data, function(err){
            var response ={};
            if(err){
                console.log(err);
            }
            else{
                response ={
                    message : "File uploaded succesfuuly",
                    filename: req.file.filename
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })