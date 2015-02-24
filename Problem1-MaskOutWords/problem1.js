var words = ["last", "properties", "think", "associated"];
var text = "In the last section, we discussed properties./n We can think of properties as variables associated with an object.";

var maskOutWords = function(words, text) {
  for (var i = 0; i < words.length; i++) {
    var word = words[i],
        wordLength = word.length,
        indexOf = text.indexOf(word);

    while (indexOf !== -1) {
      for (var n = indexOf; n < indexOf + wordLength; n++) {
        text = text.substring(0, n) + "*" + text.substring(n + 1, text.length);
      }
      indexOf = text.indexOf(word, indexOf + 1);
    }
  }
  return text;
}

console.log(maskOutWords(words, text));
