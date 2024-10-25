function saveEntry() {
    const entryText = document.getElementById('diaryEntry').value;
    if (entryText.trim() != '') {
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerText = entryText;
        document.getElementById('entries').appendChild(entry);
        document.getElementById('diaryEntry').value = '';
    }
}

function clearEntry() {
    document.getElementById('diaryEntry').value = '';
}
