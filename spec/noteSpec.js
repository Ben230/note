(function() {
  console.log('Test Note returns the note')
  var note = new Note("test text");

  eval.isTrue(note.returnNote() === "test text");
})();
