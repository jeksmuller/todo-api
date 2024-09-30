import express from 'express';


// Create an express app
const app = express();

// Define routes
app.get('/hello', function(req, res, next) {
    console.log(req.headers);
    res.json('you visited the hello endpoint!');
});

app.get('/goodbye', function (req, res, next) {
    console.log(req.query);
    res.json('same to you')
    
});

//  Listen for incoming requests
app.listen(3000, function(){
    console.log('app is listening on port 3000');
});