const mongoose = require("mongoose");

const Note = mongoose.model("note");

module.exports = app => {
  // Read notes
  app.get("/api/notes", async (req, res) => {
    const notes = await Note.find();

    res.send(notes);
  });

  // Create a note
  app.post("/api/notes", async (req, res) => {
    const note = new Note({
      title: req.body.title,
      body: req.body.body,
      created_at: Date.now(),
      updated_at: Date.now(),
      deleted_at: ""
    });

    await note.save((err, note) => {
      res.send(note);
    });
  });

  // Delete a note
  app.delete("/api/delete/:id", (req, res) => {
    const _id = req.params.id;

    Note.findByIdAndRemove(_id, (err, data) => {
      if (err) {
        return res.sendStatus(500);
      }
      return res.sendStatus(200);
    });
  });

  // Update a note
  app.put("/api/edit/:id", async (req, res, next) => {
    const _id = req.params.id;

    const filter = {};
    filter["_id"] = _id;

    let updatedNote = await Note.findOneAndUpdate(filter, req.body, {
      new: true
    });

    res.send(updatedNote);
  });
};
