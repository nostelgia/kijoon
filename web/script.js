const express = require('express')
const app = express()
const port = 9670

app.get('/homepage',homepage);
app.listen(port,webstart);

function homepage(req,res)
{
    res.send("들어온 걸 환영해!");
}
function webstart(){
    console.log("주소는 http://localhost:9670/homepage");
}