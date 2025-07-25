import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";

env.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT;

app.get("/login", (req, res) => {
  res.render("login.ejs");
})

app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})