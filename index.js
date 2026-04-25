const express = require("express");
const app = express();
const fs = require(`fs`);
const path = require("path");
const helmet = require(`helmet`);
app.disable("x-powered-by");
const https = require("https");
app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
    xPoweredBy:false
  }),
);

const codeQuotes = JSON.parse(
  fs.readFileSync(path.join(__dirname, "qoutes.json")),
);
const privatekey = fs.readFileSync(path.join(__dirname, `localhost.key`));
const privateCrt = fs.readFileSync(path.join(__dirname, `localhost.crt`));


const httpsCredentials = { key: privatekey, cert: privateCrt };

const server = https.createServer(httpsCredentials, app);

app.get("/qoutes", (req, res) => {
  const qoutesValue = Object.keys(codeQuotes);
  const keys = qoutesValue[Math.floor(Math.random() * qoutesValue.length)];
  const randomLine = codeQuotes[keys];
  res.send(randomLine).status(200);
});
server.listen(3000, (req, res) => {
  console.log(`Server is spinning on port 3000`);
});
