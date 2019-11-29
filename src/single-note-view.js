(function(exports) {
  function SingleNoteView(note) {
    this.note = note.returnNote();
  }

  SingleNoteView.prototype.returnNoteContent = function () {
    return "<div>" + this.note + "</div>";
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
