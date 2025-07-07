
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
    for (i = 0; i < noteDateArray.length; i++) {
        tableRowCounter = tableRowCounter + 1;
        if (i == noteDateArray.length - 1) { myClass = ' tableBottom' } else { myClass = '' }
        document.getElementById('tableId').innerHTML +=
            `<tr>
                <th class="leftCell${myClass}"><button onclick="contentChangeArray(${'normal','archive',i})">A</button><button onclick="contentChangeArray(${'normal','delete',i})">D</button></th>
                <th class="${myClass}">${noteDateArray[i]}</th>
                <th class="${myClass}">${noteTitleArray[i]}</th>
                <th class="${myClass}">${noteContentArray[i]}</th>
                <th class="rightCell${myClass}">normal</th>
            </tr>`}
}
function tableContentArchive(myClass) {
    for (i = 0; i < noteDateArchive.length; i++) {
        tableRowCounter = tableRowCounter + 1;
        if (i == noteDateArchive.length - 1) { myClass = ' tableBottom' } else { myClass = '' }
        document.getElementById('tableId').innerHTML +=
            `<tr>
                <th class="leftCell${myClass}"><button onclick="contentChangeArray(${'archive','normal',i})">N</button><button onclick="contentChangeArray(${'archive','delete',i})">D</button></th>
                <th class="${myClass}">${noteDateArchive[i]}</th>
                <th class="${myClass}">${noteTitleArchive[i]}</th>
                <th class="${myClass}">${noteContentArchive[i]}</th>
                <th class="rightCell${myClass}">archiviert</th>
            </tr>`}
}
function tableContentDelete(myClass) {
    for (i = 0; i < noteDateDelete.length; i++) {
        tableRowCounter = tableRowCounter + 1;
        if (i == noteDateDelete.length - 1) { myClass = ' tableBottom' } else { myClass = '' }
        document.getElementById('tableId').innerHTML +=
            `<tr>
                <th class="leftCell${myClass}"><button onclick="contentChangeArray(${'delete','normal',i})">N</button><button onclick="contentChangeArray(${'delete','archive',i})">A</button></th>
                <th class="${myClass}">${noteDateDelete[i]}</th>
                <th class="${myClass}">${noteTitleDelete[i]}</th>
                <th class="${myClass}">${noteContentDelete[i]}</th>
                <th class="rightCell${myClass}">gelöscht</th>
            </tr>`}
}