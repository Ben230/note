(function() {
  console.log('Test NotListView with no notes')
  var noteBook = new NoteBook();
  var noteListView = new NoteListView(noteBook);

  eval.isTrue(noteListView.return() === "");

})();

(function() {
  console.log('Test NoteListView with one note')
  var note1 = new Note('test note 1');
  var noteBook = new NoteBook();
  noteBook.addNote(note1);
  var noteListView = new NoteListView(noteBook);

  eval.isTrue(noteListView.return() === "<ul><li><div>test note 1</div></li></ul>");

})();

(function() {
  console.log('Test NoteListView with two notes')
  var note1 = new Note('test note 1');
  var note2 = new Note('test note 2');
  var noteBook = new NoteBook();
  noteBook.addNote(note1);
  noteBook.addNote(note2);
  var noteListView = new NoteListView(noteBook);

  eval.isTrue(noteListView.return() === "<ul><li><div>test note 1</div></li><li><div>test note 2</div></li></ul>");

})();

(function(){
    console.log('Tests NoteListView returns abbreviation if notes has 21characters.')
    var note = new Note('The rain in Espanol!!');
    var noteBook = new NoteBook();
    noteBook.addNote(note);
    var noteListView = new NoteListView(noteBook);
    eval.isTrue(noteListView.return() === "<ul><li><div>The rain in Espanol!...</div></li></ul>")

})();
