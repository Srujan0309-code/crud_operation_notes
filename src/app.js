const express = require("express");
const notemodel = require("./models/note.model");
const app = express();
app.use(express.json());
app.post("/notes", async (req, res) => {
     const data = req.body;
    await notemodel.create({
        title: data.title,
        content: data.content,
    });
    res.status(201).json({ message: "Note created successfully" });
});

app.get("/notes", async (req, res) => {
    const notes = await notemodel.find();

    res.status(200).json({
       "message" : "Notes retrieved successfully",
        data: notes,
    });
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    await notemodel.findByIdAndDelete({
        _id: id,
    });
    res.status(200).json({ message: "Note deleted successfully" });
});

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await notemodel.findOneAndUpdate({
        _id: id,
    }, {
        
        content: data.content,
    });
    res.status(200).json({ message: "Note updated successfully" });
});
module.exports = app;
