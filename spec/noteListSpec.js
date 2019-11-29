(function() {
  console.log('Test NoteList returns notes')
  var note1 = new Note('text 1');
  var note2 = new Note('text 2');
  var noteBook = new NoteBook();

  noteBook.addNote(note1);
  noteBook.addNote(note2);

  eval.isTrue(noteBook.returnNotes()[0] === "text 1");
  eval.isTrue(noteBook.returnNotes()[1] === "text 2");
})();
