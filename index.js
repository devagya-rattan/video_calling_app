const express = require("express");
const app = express();
const cors = require("cors")
const port = 8080;
const colors = require("colors");
app.use(cors());

app.listen(port,()=>{
    console.log(` Server is working on port ${port} `.bgWhite.black)
})