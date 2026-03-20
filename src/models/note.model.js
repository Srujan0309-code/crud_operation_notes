const mongose = require('mongoose');

const noteSchema = new mongose.Schema({
    title: "String",
    content: "String",
});

const Note = mongose.model('Note', noteSchema);

module.exports = Note;