// var element = document.getElementById("app")
// element.innerHTML = "howdy"



(function(exports) {
  function NoteController(noteBook) {
    this.noteBook = noteBook;
    var note1 = new Note("Favourite drink: seltzer");
    this.noteBook.addNote(note1);
    this.noteView = new NoteListView(this.noteBook);
  };

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteView.return();
  };

  exports.NoteController = NoteController;
})(this);
