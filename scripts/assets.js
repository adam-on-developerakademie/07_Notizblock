
function tableHead() {
    return `<tr class="tableHead">
                <th class="tableHead" id="tableCollumnChangeId">ändern</th>
                <th class="tableHead" id="tableCollumnDateId">Datum</th>
                <th class="tableHead" id="tableCollumnTitleId">Titel</th>
                <th class="tableHead" id="tableCollumnContentId">Inhalt</th>
                <th class="tableHead" id="tableCollumnStatusId">Status</th>
            </tr>`
}

function tableContentNormal(myClass) {
    for (i = 0; i < noteDateNormal.length; i++) {
        if (i == noteDateNormal.length - 1) { myClass = ' tableBottom' } else { myClass = '' }
        document.getElementById('tableId').innerHTML +=
            `<tr onclick="myEdit(this)" name='["Normal","${i}"]'>
                <th class="normalClass leftCell${myClass}"><button onclick="contentChangeArray('Normal','Archive',${i})">S</button><button onclick="contentChangeArray('Normal','Delete',${i})">L</button></th>
                <th class="normalClass ${myClass}">${noteDateNormal[i]}</th>
                <th class="normalClass ${myClass}">${noteTitleNormal[i]}</th>
                <th class="normalClass ${myClass}">${noteContentNormal[i]}</th>
                <th class="normalClass rightCell${myClass}">Normal</th>
            </tr>`}
}
function tableContentArchive(myClass) {
    for (i = 0; i < noteDateArchive.length; i++) {
        if (i == noteDateArchive.length - 1) { myClass = ' tableBottom' } else { myClass = '' }
        document.getElementById('tableId').innerHTML +=
            `<tr onclick="myEdit(this)"  name='["Archive","${i}"]'>
                <th class="archiveClass leftCell${myClass}"><button onclick="contentChangeArray('Archive','Normal',${i})">N</button><button onclick="contentChangeArray('Archive','Delete',${i})">L</button></th>
                <th class="archiveClass ${myClass}">${noteDateArchive[i]}</th>
                <th class="archiveClass ${myClass}">${noteTitleArchive[i]}</th>
                <th class="archiveClass ${myClass}">${noteContentArchive[i]}</th>
                <th class="archiveClass rightCell${myClass}">geSpeichert</th>
            </tr>`}
}
function tableContentDelete(myClass) {
    for (i = 0; i < noteDateDelete.length; i++) {
        if (i == noteDateDelete.length - 1) { myClass = ' tableBottom' } else { myClass = '' }
        document.getElementById('tableId').innerHTML +=
            `<tr onclick="myEdit(this)"  name='["Delete","${i}"]'>
                <th class="deleteClass leftCell${myClass}"><button onclick="contentChangeArray('Delete','Normal',${i})">N</button><button onclick="contentChangeArray('Delete','Archive',${i})">S</button></th>
                <th class="deleteClass ${myClass}">${noteDateDelete[i]}</th>
                <th class="deleteClass ${myClass}">${noteTitleDelete[i]}</th>
                <th class="deleteClass ${myClass}">${noteContentDelete[i]}</th>
                <th class="deleteClass rightCell${myClass}">geLöscht</th>
            </tr>`}
}