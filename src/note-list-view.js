(function(exports) {
  function NoteListView(noteBook) {
    this.notes = noteBook.returnNotes();
  };

  NoteListView.prototype.return = function() {
    var notes = this.notes;
    if (notes.length === 0) {
      return "";
    } else {
      notes.forEach(function(note, index) {
        if (note.length <= 20) {

        } else {
          notes[index] = notes[index].slice(0,20);
          notes[index] += "..."
        }
      });
      return "<ul><li><div>" + notes.join("</div></li><li><div>")
      + "</div></li></ul>";
    }
  };

  exports.NoteListView = NoteListView;
})(this);
