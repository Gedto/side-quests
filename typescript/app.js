"use strict";
exports.__esModule = true;
exports.removeLastNote = exports.add = void 0;
var add = function () {
    var idCounter = window['idCount'] || 0;
    var newNoteText = document.getElementById('logInput').value;
    if (newNoteText) {
        var newElement = document.createElement('pre');
        newElement.textContent = newNoteText;
        newElement.setAttribute('id', "note-".concat(String(idCounter)));
        document.getElementById('row').appendChild(newElement);
        document.getElementById('logInput').value = '';
        window['idCount'] = idCounter + 1;
    }
};
exports.add = add;
var removeLastNote = function () {
    var lastNote = document.getElementById("note-".concat(String((window['idCount'] || 1) - 1)));
    if (lastNote) {
        lastNote.remove();
        window['idCount'] -= 1;
    }
};
exports.removeLastNote = removeLastNote;
