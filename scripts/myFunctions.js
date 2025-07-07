function myDate() {
    let x = new Date()
    let myDatetime = myDuble(x.getDate()) + '.' +myDuble(x.getMonth()+1)+ '.' + x.getFullYear()+ ' '+myDuble(x.getHours())+':'+myDuble(x.getMinutes())+':'+myDuble(x.getSeconds())
    return myDatetime
}
myDate()

function myDuble(text) {
    let x = ('00' + text);
    return x.substring((x.length - 2),x.length)
}
