const app = require('./app');

const port = 8080;

app.listen(port,function (){
    console.log(`Server Running successfully on port ${port}`);
});