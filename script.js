
let noteDateNormal = [];
let noteTitleNormal = [];
let noteContentNormal = [];
let noteDateArchive = [];
let noteTitleArchive = [];
let noteContentArchive = [];
let noteDateDelete = [];
let noteTitleDelete = [];
let noteContentDelete = [];
let arrays = ['noteDate', 'noteTitle', 'noteContent']

function insetIntoArray(arrayName, arrayContent, noteDate, noteStatus) {
    if (arrayName != null) { myArray = eval(arrayName); myArray.push(arrayContent) };
    console.log('<' + noteDateNormal + '<  >' + noteTitleNormal + '<  >' + noteContentNormal + '>');
}

function insertCheck() {
    if (document.getElementById('inputTitleId').value != '' && document.getElementById('inputContentId').value != '') {
        insetIntoArray('noteDateNormal', myDate());
        insetIntoArray('noteTitleNormal', document.getElementById('inputTitleId').value);
        insetIntoArray('noteContentNormal', document.getElementById('inputContentId').value);
        document.getElementById('inputTitleId').value = ''; document.getElementById('inputTitleId').classList.remove('inputContent');
        document.getElementById('inputContentId').value = ''; document.getElementById('inputContentId').classList.remove('inputContent');
        document.getElementById('inputTitleId').focus()
        showArray();
    } else {
        if (document.getElementById('inputTitleId').value == '') { document.getElementById('inputTitleId').focus(); document.getElementById('inputTitleId').classList.add('inputContent') };
        if (document.getElementById('inputContentId').value == '') { document.getElementById('inputContentId').focus(); document.getElementById('inputContentId').classList.add('inputContent') };
    }
}

function showArray() {
    let myClass = ''
    document.getElementById('tableId').innerHTML = tableHead();
    tableContentNormal(myClass);
    tableContentDelete(myClass);
    tableContentArchive(myClass);
  }

function contentChangeArray(sourceArray, destinationArray, i) {
    for (j = 0; j < arrays.length; j++) {
        let sArray = eval(arrays[j] + sourceArray); let dArry = eval(arrays[j] + destinationArray);
        dArry.push(sArray[i])
        sArray.splice(i, 1)
        console.log(sArray, dArry)
        showArray();
    }
}
