
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
let myEditArray = []

function insetIntoArray(arrayName, arrayContent) {
    if (arrayName != null) { myArray = eval(arrayName); myArray.push(arrayContent) };
}
function updateArrayFunction() {
    let updateArry = eval('noteDate' + myEditArray[0])
    updateArry.splice(myEditArray[1], 1, myDate())
    updateArry = eval('noteTitle' + myEditArray[0])
    updateArry.splice(myEditArray[1], 1, document.getElementById('inputTitleId').value)
    updateArry = eval('noteContent' + myEditArray[0])
    updateArry.splice(myEditArray[1], 1, document.getElementById('inputContentId').value)
     myOnclickInput()
     if(window.innerWidth>500){showArray()}else{showArraySmall()};
}

function insertCheck() {
    if (myEditArray.length != 0) {
        updateArrayFunction()
    } else {
        insertCheckFolow(myEditArray)
    }
}

function insertCheckFolow() {
    if (document.getElementById('inputTitleId').value != '' && document.getElementById('inputContentId').value != '') {
        insetIntoArray('noteDateNormal', myDate());
        insetIntoArray('noteTitleNormal', document.getElementById('inputTitleId').value);
        insetIntoArray('noteContentNormal', document.getElementById('inputContentId').value);
        document.getElementById('inputTitleId').value = ''; document.getElementById('inputTitleId').classList.remove('inputContent');
        document.getElementById('inputContentId').value = ''; document.getElementById('inputContentId').classList.remove('inputContent');
        document.getElementById('inputTitleId').focus()
        if(window.innerWidth>500){showArray()}else{showArraySmall()};
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
    saveToLocalStorage()
}
function showArraySmall() {
    let myClass = ''
    document.getElementById('tableId').innerHTML = tableHeadSmall();
    tableContentNormalSmall(myClass);
    tableContentDeleteSmall(myClass);
    tableContentArchiveSmall(myClass);
    saveToLocalStorage()
}

function contentChangeArray(sourceArray, destinationArray, i) {
    for (j = 0; j < arrays.length; j++) {
        let sArray = eval(arrays[j] + sourceArray); let dArry = eval(arrays[j] + destinationArray);
        dArry.push(sArray[i])
        sArray.splice(i, 1)
         if(window.innerWidth>500){showArray()}else{showArraySmall()};
    }
}

function resolutionCheck (){console.log(window.innerWidth)}
resolutionCheck ()