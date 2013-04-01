$(document).on("keypress", "input[type!='password'], textarea", function (event) {
    if (Math.random() < 0.05) {
        changeKey($(this), event.keyCode);
        console.log(1);
        return;
    }
    if (Math.random() < 0.02) {
        removeSpace($(this), event.keyCode);
        console.log(2);
        return;
    }
    if (Math.random() < 0.02) {
        duplicateKey($(this), event.keyCode);
        console.log(3);
        return;
    }
    if (Math.random() < 0.02) {
        missKey($(this), event.keyCode);
        console.log(4);
        return;
    }
});

function changeKey(obj, kc) {
    if ((kc >= 65 && kc <= 90) || (kc >= 97 && kc <= 122)) {
        event.preventDefault();
        obj.insertAtCaret(moveKey[String.fromCharCode(event.keyCode)], "");
    }
}

function removeSpace(obj, kc) {
    if (kc === 32) {
        event.preventDefault();
        obj.insertAtCaret("", "");
    }
}

function duplicateKey(obj, kc) {
    if ((kc >= 65 && kc <= 90) || (kc >= 97 && kc <= 122)) {
        event.preventDefault();
        obj.insertAtCaret(String.fromCharCode(event.keyCode) + String.fromCharCode(event.keyCode), "");
    }
}

function missKey(obj, kc) {
    if ((kc >= 65 && kc <= 90) || (kc >= 97 && kc <= 122)) {
        event.preventDefault();
        obj.insertAtCaret("", "");
    }
}

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