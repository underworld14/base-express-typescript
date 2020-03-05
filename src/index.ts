import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
