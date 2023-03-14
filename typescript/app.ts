
const add = () => {
    const idCounter: number = window['idCount'] || 0;
    const newNoteText: string = (<HTMLInputElement>document.getElementById('logInput')).value

    if (newNoteText) {
        const newElement = document.createElement('pre');

        newElement.textContent = newNoteText;
        newElement.setAttribute('id', `note-${String(idCounter)}`);
    
        document.getElementById('row').appendChild(newElement);

        (<HTMLInputElement>document.getElementById('logInput')).value = '';

        window['idCount'] = idCounter + 1;
    }
};

const removeLastNote = () => {
    const lastNote = document.getElementById(`note-${String((window['idCount'] || 1 ) -1 )}`);
    
    if (lastNote) {
        lastNote.remove();

        window['idCount'] -= 1;
    }
};

export { add,removeLastNote };