(function(exports) {
  function NoteController(noteBook) {
    this.noteView = new NoteListView(noteBook)
    // spec: constructor should add note to noteBook
  }

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteView.return();
  }

  exports.NoteController = NoteController
})(this);

// In console:
// 1. Create noteBook object
// 2. Create noteController object
// 3. Call noteController.insertHTML()

// Spike:

// (function(exports) {
  // function NoteController(noteBook) {
    // this.noteBook = noteBook;
    // var note1 = new Note("Favourite drink: seltzer");
    // this.noteBook.addNote(note1);
    // this.noteView = new NoteListView(this.noteBook);
  // };

  // NoteController.prototype.insertHTML = function() {
    // var element = document.getElementById("app");
    // element.innerHTML = this.noteView.return();
  // };

  // exports.NoteController = NoteController;
// })(this);
