const express = require("express")
const app = express()
const codeQuotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    quote: "Code is like humor. If you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    quote: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel"
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann"
  },
  {
    quote: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon"
  },
  {

    quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry"
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson"
  }
];
app.get("/qoutes" , (req,res)=>{
    const qoutesValue = Object.keys(codeQuotes)
    const keys = qoutesValue[Math.floor(Math.random()*qoutesValue.length)]
    const randomLine = codeQuotes[keys] 
    res.send(randomLine).status(200)
})


app.listen(3000 , (req,res)=>{
    console.log(`Server Spinning on port 3000`);
    
})