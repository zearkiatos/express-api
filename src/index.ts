import express from "express";
const app = express();
const port: number = 3000;

app.get("/", (request, response) => {
  response.json({
    status: "success",
    message: "Hello World! 👋 🌎",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
