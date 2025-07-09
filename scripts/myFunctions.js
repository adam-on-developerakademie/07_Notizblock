window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        showArray();
    } else {
        showArraySmall();
    }
})

function myDate() {
    let x = new Date();
    let myDatetime = myDuble(x.getDate()) + '.' + myDuble(x.getMonth() + 1) + '.' + x.getFullYear() + ' ' + myDuble(x.getHours()) + ':' + myDuble(x.getMinutes()) + ':' + myDuble(x.getSeconds());
    return myDatetime;
}

function myDuble(text) {
    let x = ('00' + text);
    return x.substring((x.length - 2), x.length);
}

function saveToLocalStorage() {
    localStorage.setItem('noteDateArchive', JSON.stringify(noteDateArchive));
    localStorage.setItem('noteTitleArchive', JSON.stringify(noteTitleArchive));
    localStorage.setItem('noteContentArchive', JSON.stringify(noteContentArchive));

}
function loadFromLocalStorage() {

    if (typeof localStorage != 'undefined') {
        if (localStorage.getItem('noteDateArchive') != null) {
            noteDateArchive = JSON.parse(localStorage.getItem('noteDateArchive'));
            noteTitleArchive = JSON.parse(localStorage.getItem('noteTitleArchive'));
            noteContentArchive = JSON.parse(localStorage.getItem('noteContentArchive'));
            if (window.innerWidth > 500) { showArray() } else { showArraySmall() };
        } else { saveToLocalStorage() }
    }
}

function myEdit(myArrayValue) {
    let myRowName = myArrayValue.getAttribute("name");
    let myRow = JSON.parse(myRowName);
    if (document.getElementById('checkboxId').checked) {
        document.getElementById('inputTitleId').value = eval('noteTitle' + myRow[0] + '[' + myRow[1] + ']');
        document.getElementById('inputContentId').value = eval('noteContent' + myRow[0] + '[' + myRow[1] + ']');
        document.getElementById('inputTitleId').classList.remove('inputContent');
        document.getElementById('inputContentId').classList.remove('inputContent');
        myEditArray = myRow
    } else {
        document.getElementById('inputTitleId').value = '';
        document.getElementById('inputContentId').value = '';
        document.getElementById('inputTitleId').placeholder = eval('noteTitle' + myRow[0] + '[' + myRow[1] + ']');
        document.getElementById('inputContentId').placeholder = eval('noteContent' + myRow[0] + '[' + myRow[1] + ']');
        document.getElementById('inputTitleId').classList.remove('inputContent');
        document.getElementById('inputContentId').classList.remove('inputContent');
    }
}

function unCheckedCheckbox() {
    if (document.getElementById('checkboxId').checked == false) {
        document.getElementById('inputTitleId').value = '';
        document.getElementById('inputContentId').value = '';
        document.getElementById('inputTitleId').placeholder = '';
        document.getElementById('inputContentId').placeholder = '';
        document.getElementById('inputTitleId').classList.remove('inputContent');
        document.getElementById('inputContentId').classList.remove('inputContent');
        myEditArray.length = 0

    }
}

function myOnclickInput() {
    document.getElementById('inputTitleId').placeholder = 'Trage hier den Titel deiner Notiz ein.';
    document.getElementById('inputContentId').placeholder = 'Trage hier den Inhalt deiner Notiz ein.';
    document.getElementById('inputTitleId').classList.remove('inputContent');
    document.getElementById('inputContentId').classList.remove('inputContent');

}

