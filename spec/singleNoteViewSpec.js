(function() {
  console.log('Test returns full note html')
  var note = new Note('pesto');
  var singleNoteView = new SingleNoteView(note);
  eval.isTrue(singleNoteView.returnNoteContent() === "<div>pesto</div>")
})();
