
let noteDateArray = [];
let noteTitleArray = [];
let noteContentArray = [];
let noteDateArchive = ['A1'];
let noteTitleArchive = ['A2'];
let noteContentArchive = ['A3'];
let noteDateDelete = ['D1'];
let noteTitleDelete = ['D2'];
let noteContentDelete = ['D3'];
let tableArray = []
let myArray


function insetIntoArray(arrayName, arrayContent, noteDate, noteStatus) {
    if (arrayName != null) { myArray = eval(arrayName); myArray.push(arrayContent) };
    console.log('<' + noteDateArray + '<  >' + noteTitleArray + '<  >' + noteContentArray + '>');
}

function insertCheck() {
    if (document.getElementById('inputTitleId').value != '' && document.getElementById('inputContentId').value != '') {
        insetIntoArray('noteDateArray', myDate());
        insetIntoArray('noteTitleArray', document.getElementById('inputTitleId').value);
        insetIntoArray('noteContentArray', document.getElementById('inputContentId').value);
        document.getElementById('inputTitleId').value = ''; document.getElementById('inputTitleId').classList.remove('inputContent');
        document.getElementById('inputContentId').value = ''; document.getElementById('inputContentId').classList.remove('inputContent');
        document.getElementById('inputTitleId').focus()
        showArray();
    } else {
        if (document.getElementById('inputTitleId').value == '') { document.getElementById('inputTitleId').focus(); document.getElementById('inputTitleId').classList.add('inputContent') };
        if (document.getElementById('inputContentId').value == '') { document.getElementById('inputContentId').focus(); document.getElementById('inputContentId').classList.add('inputContent') };
    }
}
let tableRowCounter = 0
function showArray() {
    let myClass = ''; tableRowCounter = 0
    document.getElementById('tableId').innerHTML = tableHead();
    tableContentNormal(myClass);
    tableContentDelete(myClass);
    tableContentArchive(myClass);
    console.log(tableRowCounter)

}

