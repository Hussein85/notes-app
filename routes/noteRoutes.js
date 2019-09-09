const mongoose = require("mongoose");

const Note = mongoose.model("note");

module.exports = app => {
  app.get("/api/notes", async (req, res) => {
    const notes = await Note.find();

    res.send(notes);
  });

  app.post("/api/notes", async (req, res) => {
    const note = new Note({
      title: req.body.title,
      body: req.body.body,
      created_at: Date.now(),
      updated_at: Date.now()
    });

    await note.save((err, note) => {
      res.send(note);
    });
  });

  app.delete("/api/delete/:id", (req, res) => {
    const _id = req.params.id;

    Note.findByIdAndRemove(_id, (err, data) => {
      if (err) {
        return res.sendStatus(500);
      }
      return res.sendStatus(200);
    });
  });

  app.put("/api/edit/:id", async (req, res, next) => {
    const _id = req.params.id;

    const filter = {};
    filter["_id"] = _id;
    const update = req.body;

    let updatedNote = await Note.findOneAndUpdate(filter, update, {
      new: true
    });

    res.send(updatedNote);
  });
};
