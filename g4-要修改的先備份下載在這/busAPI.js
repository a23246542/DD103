let routes = document.querySelectorAll('.route');
let directions = document.querySelectorAll('.direction');
let computerShow = document.querySelector('.computerShow');
let mobileShow = document.querySelector('.mobileShow');
let chplace = document.querySelector('.chplace');
let chtime = document.querySelector('.chtime');
let stopIdOrder = [];
let busPosition = [];
let busStopData = [];
let stopArray = [];
let routename = "856(台灣好行-黃金福隆線)";/*856 791 788 班次 */
let direction = 0;//去程 返程
let urRoute = { /*預設  856 去程*/
    'url1Text': `${routename}?$top=1`,
    'stopFrom': 0,
    'stopEnd': 14,
    'RouteName': routename
}
let url1 = `https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/NewTaipei/${urRoute.url1Text}&$format=JSON`;
let url2 = `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeNearStop/City/NewTaipei/${routename}?$format=JSON`;
let url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei/${routename}?$format=JSON`;
routes.forEach(function (dom) {
    dom.addEventListener('click', function () {
        document.querySelector('.route.active').classList.remove('active');
        this.classList.add('active');
        routename = this.getAttribute('data-route');
        changeObjectData();

    });
});

directions.forEach(function (dom) {
    dom.addEventListener('click', function () {
        document.querySelector('.direction.active').classList.remove('active');
        this.classList.add('active');
        direction = this.getAttribute('data-target');
        changeObjectData();
    });
});


function changeObjectData() {
    if (routename == "856(台灣好行-黃金福隆線)") {
        urRoute.stopFrom = 0;
        urRoute.stopEnd = 14;
        urRoute.RouteName = routename;
        if (direction == 0) {
            urRoute.url1Text = `${routename}?$top=1`;
        } else {
            urRoute.url1Text = `${routename}?$top=1&$skip=1`;
        }
    } else if (routename == "791" && direction == "0") {
        urRoute.url1Text = `${routename}?$top=1`;
        urRoute.stopFrom = 35;
        urRoute.stopEnd = 51;
        urRoute.RouteName = routename;
    } else if (routename == "791" && direction == "1") {
        urRoute.url1Text = `${routename}?$top=1&$skip=1`;
        urRoute.stopFrom = 25;
        urRoute.stopEnd = 41;
        urRoute.RouteName = routename;
    } else if (routename == "788" && direction == "0") {
        urRoute.url1Text = `${routename}?$top=1&$skip=2`;
        urRoute.stopFrom = 8;
        urRoute.stopEnd = 24;
        urRoute.RouteName = `${routename}往基隆`;
    } else {
        urRoute.url1Text = `${routename}?$top=1&$skip=3`;
        urRoute.stopFrom = 41;
        urRoute.stopEnd = 54
        urRoute.RouteName = `${routename}去海科館`;
        direction = 0;
    }
    linkAll();
}


function makeAjaxCall(url) {
    var promiseObj = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("xhr done successfully");
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    resolve(respJson);
                } else {
                    reject(xhr.status);
                    console.log("xhr failed");
                }
            } else {
                console.log("xhr processing going on");
            }
        }
        console.log("request sent succesfully");
    });
    return promiseObj;
}

function linkAll() { //es6 promise
    url1 = `https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/NewTaipei/${urRoute.url1Text}&$format=JSON`;
    url2 = `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeNearStop/City/NewTaipei/${routename}?$format=JSON`;
    url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei/${routename}?$format=JSON`;
    makeAjaxCall(url1).then(function (data) {
        linkStopOrder(data);
        return makeAjaxCall(url);
    }).then(function (data) {
        linkData(data);//非同步
        drawStaticRoute();//同步
        return makeAjaxCall(url2);
    }).then(function (data) {
        linkBusPos(data);
    });
    chplace.innerText = `${routename.substr(0, 3)}公車`;
}

function drawStaticRoute() {
    if (document.body.offsetWidth > 991) {  //電腦
        mobileShow.innerHTML = '';
        console.log('2');
        showComputerDom();
    } else { //手機
        computerShow.innerHTML = '';
        showCellphoneDom();
    }
    inputData();//站名
}

function linkStopOrder(dealData) {   //取得站名排列順序
    stopIdOrder = [];
    // function updateStop(data) {
    // let dealData = JSON.parse(data);
    console.log(dealData);
    console.log(urRoute.stopFrom);
    console.log(urRoute.stopEnd);
    console.log(dealData[0].Stops[1].StopID);
    for (let i = urRoute.stopFrom; i <= urRoute.stopEnd; i++) {
        stopIdOrder.push(dealData[0].Stops[i].StopID);
    }
    console.log(stopIdOrder);

    // }
    // let xhr1 = new XMLHttpRequest();
    // xhr1.onload = function () {
    // if (xhr1.status == 200) {
    // updateStop(xhr1.responseText);
    // linkData();

    //偵測手機板or電腦版
    //     if (document.body.offsetWidth > 991) {  //電腦
    //         mobileShow.innerHTML = '';
    //         console.log('2');
    //         showComputerDom();
    //     } else { //手機
    //         computerShow.innerHTML = '';
    //         showCellphoneDom();
    //     }
    //     inputData();



    //     linkBusPos();
    // } else {
    //     console.log(xhr1.status);
    // }
    // }

    //console.log(url1);

}

function linkBusPos(dealData) {    //取得公車目前位置 
    console.log('5');
    busPosition = [];
    // function updateBusPosition(data) {
    // let dealData = JSON.parse(data);
    //console.log(dealData);
    for (let i = 0; i < dealData.length; i++) {
        if (dealData[i].RouteName.Zh_tw == urRoute.RouteName && dealData[i].Direction == direction) {
            busPosition.push({ 'PlateNumb': dealData[i].PlateNumb, 'StopName': dealData[i].StopName.Zh_tw, 'A2EventType': dealData[i].A2EventType });
        }
    }
    //console.log(busPosition);
    dynamicBus(); //變
    // };
    // let xhr2 = new XMLHttpRequest();
    // xhr2.onload = function () {
    //     if (xhr2.status == 200) {
    //         updateBusPosition(xhr2.responseText);
    //     } else {
    //         console.log(xhr2.status);
    //     }
    // }

    //console.log(url2);
    // xhr2.open('GET', url2, true);
    // xhr2.send(null);
}
let timepass = 30;
timer1 = setInterval(function () {
    makeAjaxCall(url).then(function (data) {
        linkData(data);
        return makeAjaxCall(url2);
    }).then(function (data) {
        linkBusPos(data);
    });
}, 30000);

timer2 = setInterval(function () {
    timepass--;
    chtime.innerText = `(${timepass}秒前更新)`;
    if (timepass == 0) {
        timepass = 30;
    }
}, 1000);

function linkData(dealData) {//依照順序找出相對的站內資料
    busStopData = [];
    // function updateRoute(data) {
    // let dealData = JSON.parse(data);
    let selectRoute = [];
    // console.log(dealData);
    for (let i = 0; i < dealData.length; i++) {
        if (dealData[i].RouteName.Zh_tw == urRoute.RouteName && dealData[i].Direction == direction) {
            selectRoute.push(dealData[i]);
        }
    }
    //console.log(stopIdOrder);
    for (let i = 0; i < stopIdOrder.length; i++) {
        // console.log(stopIdOrder[i]+" *************");
        for (let j = 0; j < selectRoute.length; j++) {
            //console.log(selectRoute[j].StopID);
            if (selectRoute[j].StopID == stopIdOrder[i]) {
                busStopData.push(selectRoute[j]);
            }
        }
    }
    //console.log(busStopData[0].EstimateTime);
    console.log(busStopData);
    console.log('1');
    // //偵測手機板or電腦版
    // if (document.body.offsetWidth > 991) {  //電腦
    //     mobileShow.innerHTML = '';
    //     showComputerDom();
    // } else { //手機
    //     computerShow.innerHTML = '';
    //     showCellphoneDom();
    // }
    // inputData();


    // }
    // let xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //     if (xhr.status == 200) {
    //         updateRoute(xhr.responseText);
    //     } else {
    //         console.log(xhr.status);
    //     }
    // }

    //console.log(url);
    // xhr.open('GET', url, true);
    // xhr.send(null);

}


function showComputerDom() { //顯現html位置
    console.log('3');
    let str = '';
    let busStopDataLen = busStopData.length;
    let odd = true;
    //console.log(busStopDataLen);
    for (let i = 0; i < busStopDataLen; i++) {
        if (i < 5) {
            str += `
          <div class="stop left">
              <div class="t sFont relative">
                  <div class="eta" id="etai${i}"></div>
                  <div class="etaol" id="etao${i}"></div>
              </div>
              <div class="m fill relative">
                  <div class="stopIcon">
                      <div class="busl" id="busi${i}"></div>
                  </div>
                  <div class="buslo" id="buso${i}"></div>
              </div>
              <div class="b relative">
                  <div class="stopnameC"></div>
              </div>
          </div>
      `;
        }
        if (i == 4 && i != busStopDataLen - 1) {
            str += ` <div class="bar left">
                    <div class="t"></div>
                    <div class="m fill"></div>
                    <div class="b fill"></div>
                </div>
                <div class="clearfix"></div>
                <div class="bar right">
                        <div class="t fill"></div>
                        <div class="m fill"></div>
                        <div class="b "></div>
                </div>
        `;
        }
    }
    for (let i = 5; i < busStopDataLen; i += 4) {
        let j;
        for (j = i; j < i + 4 && j < busStopDataLen; j++) {
            if (odd) {
                str += `
                    <div class="stop right">
                        <div class="t sFont relative">
                            <div class="eta" id="etai${j}"></div>
                            <div class="etaor" id="etao${j}"></div>
                        </div>
                        <div class="m fill relative">
                            <div class="stopIcon">
                                <div class="busr" id="busi${j}"></div>
                            </div>
                            <div class="busro" id="buso${j}"></div>
                        </div>
                        <div class="b relative">
                            <div class="stopnameC"></div>
                        </div>
                    </div>
            `;
            }
            if (!odd) {
                str += `
                <div class="stop left">
                    <div class="t sFont relative">
                        <div class="eta" id="etai${j}"></div>
                        <div class="etaol" id="etao${j}"></div>
                    </div>
                    <div class="m fill relative">
                        <div class="stopIcon">
                            <div class="busl" id="busi${j}"></div>
                        </div>
                        <div class="buslo" id="buso${j}"></div>
                    </div>
                    <div class="b relative">
                        <div class="stopnameC"></div>
                    </div>
                </div>
             `;
            }
        }
        if (j < busStopDataLen) {
            if (odd) {
                str += `
            <div class="stope right">
                <div class="t"></div>
                <div class="m fill"></div>
                <div class="b"></div>
            </div>
            <div class="bar right">
                <div class="t"></div>
                <div class="m fill"></div>
                <div class="b fill"></div>
            </div> 
            <div class="clearfix"></div>
            <div class="bar left">
                <div class="t fill"></div>
                <div class="m fill"></div>
                <div class="b"></div>
            </div>
            <div class="stope left">
                <div class="t"></div>
                <div class="m fill"></div>
                <div class="b"></div>
            </div>
        `;
                odd = false;
            } else {
                str += `
            <div class="bar left">
                    <div class="t"></div>
                    <div class="m fill"></div>
                    <div class="b fill"></div>
                </div>
                <div class="clearfix"></div>
                <div class="bar right">
                        <div class="t fill"></div>
                        <div class="m fill"></div>
                        <div class="b "></div>
                </div>
        `;
                odd = true;
            }
        }
    }
    computerShow.innerHTML = str;


}

function showCellphoneDom() {
    let str = '';
    let busStopDataLen = busStopData.length;
    for (let i = 0; i < busStopDataLen; i++) {
        str += `
        <div class="ms">
            <div class="eta" id="etaiM${i}"></div>
            <div class="stopnameC"></div>
        </div>
    `;
    }
    mobileShow.innerHTML = str;
}


function inputData() {
    console.log('4');
    stopArray = [];
    //放入車站名稱
    let stopnameC = document.querySelectorAll('.stopnameC');
    stopnameC.forEach(function (dom, index) {
        let stop = busStopData[index].StopName.Zh_tw;
        dom.innerHTML = stop;
        stopArray.push(stop);
    });
}

function dynamicBus() {
    let eta = document.querySelectorAll('.eta');
    let busBody = document.querySelectorAll('[class^="busBody"]');
    let bustitle = document.querySelectorAll('.bustitle');
    let stopSatus;
    let estTime;//預估時間
    let msg;

    busBody.forEach(function (dom) {
        console.log(dom);
        console.log(dom.parentNode);
        dom.parentNode.removeChild(dom);
    });
    bustitle.forEach(function (dom) {
        dom.parentNode.removeChild(dom);
    });

    //放入公車狀態
    eta.forEach(function (dom, index) {
        stopSatus = busStopData[index].StopStatus;
        console.log(stopSatus);
        if (stopSatus == 1) {
            msg = `<span class="etaNonStop">未發車</span>`;
        } else if (stopSatus == 3) {
            msg = `<span class="etaNonStop">末班車已過</span>`;
        } else if (stopSatus == 0) {
            estTime = Math.floor(busStopData[index].EstimateTime / 60.0);
            if (estTime == 0 && document.body.offsetWidth < 992) {
                msg = `<span class="etaArrive">進站中</span>`;
            } else if (estTime > 1) {
                msg = `<span class="etaOnload">約${estTime}分</span>`;
            } else {
                msg = `<span class="etaComin">將到站</span>`;
            }
        }
        dom.innerHTML = msg;
    });


    //console.log(busPosition.length);
    for (let i = 0; i < busPosition.length; i++) {
        console.log(`公車${i},編號:${busPosition[i].PlateNumb},名稱:${busPosition[i].StopName},車子狀態:${busPosition[i].A2EventType}`);
    }
    for (let i = 0; i < busPosition.length && document.body.offsetWidth > 991; i++) {
        let busCurrentStop = busPosition[i].StopName;
        let busCurrentStopIndex = stopArray.indexOf(busCurrentStop);
        console.log(`第${i}班公車正在第${busCurrentStopIndex}站`);
        if (busCurrentStopIndex != -1) {
            let io = busPosition[i].A2EventType == 1 ? 'i' : 'o';
            console.log(`第${i}班公車正在${io == 'i' ? '進站' : '離站'}`);
            let bus = document.getElementById(`bus${io}${busCurrentStopIndex}`);
            let busClass = bus.getAttribute('class');
            console.log(`公車放入class名稱:${busClass}`);
            if (i != stopIdOrder.length - 1) { //最後一班離開不顯示
                document.getElementById(`eta${io}${busCurrentStopIndex}`).innerHTML = `<span class="bustitle">${busPosition[i].PlateNumb}</span>`;
                if (busClass == "busl" || busClass == "buslo") {
                    bus.innerHTML = `<div class="busBodyL"></div>`;
                } else {
                    bus.innerHTML = `<div class="busBodyR"></div>`;
                }
            }
        }
    }
}

linkAll();