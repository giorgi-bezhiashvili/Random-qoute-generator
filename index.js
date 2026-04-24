const express = require("express")
const app = express()
const fs = require(`fs`)
const path = require("path")
const codeQuotes = JSON.parse(fs.readFileSync(path.join(__dirname , "qoutes.json")))
app.get("/qoutes" , (req,res)=>{
    const qoutesValue = Object.keys(codeQuotes)
    const keys = qoutesValue[Math.floor(Math.random()*qoutesValue.length)]
    const randomLine = codeQuotes[keys] 
    res.send(randomLine).status(200)
})


app.listen(3000 , (req,res)=>{
    console.log(`Server Spinning on port 3000`);
    
})