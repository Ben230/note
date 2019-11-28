(function() {
  console.log('Test instantiate NoteController')
  function NoteBookDouble() {};
  NoteBookDouble.prototype = {
      returnNotes: function() { return ['pesto'] }
  };
  var controller = new NoteController(new NoteBookDouble());
  eval.isTrue(controller instanceof NoteController);
})();

(function() {
  console.log('Test insert HTML')
  function NoteBookDouble() {};
  NoteBookDouble.prototype = {
      returnNotes: function() { return ['pesto'] }
  };
  var noteBookDouble = new NoteBookDouble()
  var controller = new NoteController(noteBookDouble);
  controller.insertHTML()
  eval.isTrue(document.getElementById('app').getElementsByTagName('div')[0].innerHTML === 'pesto')
})()


