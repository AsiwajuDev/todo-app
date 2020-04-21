const functions = require("firebase-functions");
const app = require("express")();

const { getAllTodos } = require("./APIs/todos");

app.get("/todos", getAllTodos);
app.get("*/timestamp", (request, response) => {
  response.send(`${Date.now()}`);
});

exports.api = functions.https.onRequest(app);
