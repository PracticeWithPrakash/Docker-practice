import express from "express";
const app = express();

const data = [
  {
    name: "Prakaksh",
    roll: 101,
  },
  {
    name: "Tushar",
    roll: 102,
  },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/", (req, res) => {
  res.send("Your sent a post request");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
