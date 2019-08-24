const mongoose = require("mongoose");

const Todo = mongoose.model("todos");

module.exports = app => {
  app.get("/api/todos", async (req, res) => {
    const todos = await Todo.find();

    res.send(todos);
  });

  app.post("/api/todos", async (req, res) => {
    const todo = new Todo({
      content: req.body.content
    });

    await todo.save((err, todo) => {
      res.send(todo);
    });
  });

  app.delete("/api/delete/:id", (req, res) => {
    const _id = req.params.id;

    Todo.findByIdAndRemove(_id, (err, data) => {
      if (err) {
        return res.sendStatus(500);
      }
      return res.sendStatus(200);
    });
  });
};
