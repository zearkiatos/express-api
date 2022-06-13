const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.json({
      status: 'success',
      message: 'Hello World! 👋 🌎'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
