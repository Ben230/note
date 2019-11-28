var eval = {
  isTrue: function(parameter) {
    if (parameter) {
      console.log('True');
    } else {
      throw new Error("Evaluation failed: " + parameter + " is not truthy");
    }
  },

  doesInclude: function(text, target) {
    if (text.includes(target)) {
      console.log('True');
    } else {
      throw new Error("Evaluation failed: Coudln't find " + target + " in " + text);
    }
  }

};
