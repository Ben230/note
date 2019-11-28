(function(exports) {
  function NoteListView(noteBook) {
    this.notes = noteBook.returnNotes();
  };

  NoteListView.prototype.return = function() {
    if (this.notes.length === 0) {
      return "";
    } else {
    return "<ul><li><div>" + this.notes.join("</div></li><li><div>")
    + "</div></li></ul>";
    }
  };

  exports.NoteListView = NoteListView;
})(this);
