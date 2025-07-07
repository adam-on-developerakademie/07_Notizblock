
let noteDateArry=[];
let noteTitleArry=[];
let noteContentArry=[];
let noteDateArchive=[];
let noteTitleArchive=[];
let noteContentArchive=[];
let noteDateDelete=[];
let noteTitleDelete=[];
let noteContentDelete=[];
let tableArry=[]
let myArry


function insetIntoArry(arryName,arryContent,noteDate,noteStatus){

    if(arryName!=null) {myArry=eval(arryName);myArry.push(arryContent)};


    console.log('<'+ noteDateArry +'<  >'+ noteTitleArry +'<  >'+ noteContentArry + '>');
}


insetIntoArry()


function insertCheck(){
if(document.getElementById('inputTitleId').value!='' && document.getElementById('inputContentId').value!='')  { 
    insetIntoArry('noteTitleArry',document.getElementById('inputTitleId').value);
    insetIntoArry('noteContentArry',document.getElementById('inputContentId').value);
    document.getElementById('inputTitleId').value=''; document.getElementById('inputTitleId').classList.remove('inputContent')
    document.getElementById('inputContentId').value=''; document.getElementById('inputContentId').classList.remove('inputContent')
}else {
if(document.getElementById('inputTitleId').value==''){document.getElementById('inputTitleId').focus(); document.getElementById('inputTitleId').classList.add('inputContent')};
if(document.getElementById('inputContentId').value==''){document.getElementById('inputContentId').focus(); document.getElementById('inputContentId').classList.add('inputContent')};
}
}

