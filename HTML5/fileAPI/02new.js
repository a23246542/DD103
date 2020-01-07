function doFirst(){

    document.getElementById("theFile").onchange= fileChange;

}

function fileChange(){
    // 可以測試有選到才會呼叫
    // alert();

    // 1找到檔案
    // document.getElementById('theF')
    // let file = document.getElementById('theFlie').file[0];
    // 好像要加s
    let file = document.getElementById('theFlie').files[0];
    // 2組字串
    let message = "";
    // 3.丟進去字串
    message += 'file name:' + file.name + '\n';
    message += 'file type:' +file.type + '\n';
    // message += `flie size ${file.size} byte(s) \n`;
    message += `flie size ${file.size} byte(s)+ \n`;
    // message += `last modified:${file.lastModifiedDate.toTime()} \n //沒寫完ㄡ  `
    message += `last modified:${file.lastModifiedDate.toString()} \n  `//預設
    // 4.取得值 有輸入的資料都是用value
    document.getElementById('fileInfo').value = message;
    
}
window.onload = doFirst;

