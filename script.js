
let noteDateArray = [];
let noteTitleArray = [];
let noteContentArray = [];
let noteDateArchive = [];
let noteTitleArchive = [];
let noteContentArchive = [];
let noteDateDelete = [];
let noteTitleDelete = [];
let noteContentDelete = [];
let tableArray = []
let myArray


function insetIntoArray(arrayName, arrayContent, noteDate, noteStatus) {
    if (arrayName != null) { myArray = eval(arrayName); myArray.push(arrayContent) };
    console.log('<' + noteDateArray + '<  >' + noteTitleArray + '<  >' + noteContentArray + '>');
}

let tableLineNumber = 0
function insertCheck() {
    if (document.getElementById('inputTitleId').value != '' && document.getElementById('inputContentId').value != '') {
        insetIntoArray('noteDateArray', myDate());
        insetIntoArray('noteTitleArray', document.getElementById('inputTitleId').value);
        insetIntoArray('noteContentArray', document.getElementById('inputContentId').value);
        document.getElementById('inputTitleId').value = ''; document.getElementById('inputTitleId').classList.remove('inputContent');
        document.getElementById('inputContentId').value = ''; document.getElementById('inputContentId').classList.remove('inputContent');
        document.getElementById('inputTitleId').focus()
        tableLineNumber = tableLineNumber + 1
        showArray();
    } else {
        if (document.getElementById('inputTitleId').value == '') { document.getElementById('inputTitleId').focus(); document.getElementById('inputTitleId').classList.add('inputContent') };
        if (document.getElementById('inputContentId').value == '') { document.getElementById('inputContentId').focus(); document.getElementById('inputContentId').classList.add('inputContent') };
    }
}

function tableHead() {
    return `<tr class="tableHead">
                <th class="tableHead" id="tableCollumnChangeId">ändern</th>
                <th class="tableHead" id="tableCollumnDateId">Datum</th>
                <th class="tableHead" id="tableCollumnTitleId">Titel</th>
                <th class="tableHead" id="tableCollumnContentId">Inhalt</th>
                <th class="tableHead" id="tableCollumnStatusId">Status</th>
            </tr>`
}

function showArray() {
    document.getElementById('tableId').innerHTML = tableHead()
    for (i = 0; i < noteDateArray.length; i++) {
        document.getElementById('tableId').innerHTML +=
            `<tr>
                <th class="leftCell"></th>
                <th>${noteDateArray[i]}</th>
                <th>${noteTitleArray[i]}</th>
                <th>${noteContentArray[i]}</th>
                <th class="rightCell"></th>
            </tr>`;

    }
}

