function init() {

    var data = {};
    var actNo = JSON.parse(localStorage['actNo']);
    var memNo, memNickName, memPic;
    if (sessionStorage['memNo'] != null || sessionStorage['memNo'] != undefined) {
        memNo = JSON.parse(sessionStorage['memNo']);
        memNickName = sessionStorage['memNickName'];
        memPic = sessionStorage['memPic'];
    }

    $(function () {
        pushHistory();
        window.addEventListener("popstate", function (e) {
            parent.location.href = "activity.html"; //回活動頁
        }, false);

        function pushHistory() {
            var state = {
                title: "車友活動",
                url: "#"
            };
            window.history.pushState(state, "title", "#");
        }
    });


    $.ajax({
        url: "php/innerAct.php?actNo=" + actNo,
        type: "GET",
        data: {

        },
        success: function (res) {
            console.log(res);
            data = JSON.parse(res);
            console.log(data);




            Vue.component('act-inner', {
                props: ['inner', 'nickName', 'nickPic', 'attendList'],
                data() {
                    return {
                        newAttend: {},
                        attendNum: this.inner.actTotal,
                        attendArr: this.attendList,
                        actTime: this.inner.actTime,
                        pic: this.nickPic,

                    };
                },
                methods: {
                    actJoin: function () {

                        if (sessionStorage['memNo'] == null) {
                            swal("尚未登入","","info");
                            return;
                        }
                        swal("報名成功","","success");
                        this.$emit('act-join');
                        this.attendNum++;
                        this.newAttend = Object.assign({}, {
                            memNickName: memNickName,
                            memPic: memPic,

                        });
                        this.attendArr.push(this.newAttend);
                    },
                    reportAct: function (e) {

                        // $('#report-box-wrap').show();
                        $(e.target).parent().next("#report-box-wrap").fadeIn(300);

                        console.log("fade");
                    },
                    closeReport: function (e) {
                        $(e.target).parents("#report-box-wrap").fadeOut(200);
                    },
                    sendReport: function (e) {

                        if (sessionStorage['memNo'] == null) {
                            swal("檢舉前需要登入會員喔","","warning");
                            return;
                        }
                        $(e.target).parents("#report-box-wrap").fadeOut(200, function () {
                            console.log($('#reportMessage').val());

                            $.ajax({
                                url: "php/reportAct.php",
                                type: "POST",
                                data: {
                                    actNo:actNo,
                                    memNo: memNo,
                                    reportReason: $('#reportMessage').val()
                                },
                                success: function (res) {
                                    console.log(res);

                                },
                                error: function (res) {
                                    console.log(res);

                                }

                            })
                            swal("檢舉已送出","","success");
                        });

                    }
                },
                computed: {
                    getType() {
                        var type = this.inner.typeNo.split('');
                        var typeArr = type.map(function (item) {
                            switch (item) {
                                case "1":
                                    return "公路車";
                                    break;

                                case "2":
                                    return "登山車";
                                    break;

                                case "3":
                                    return "城市車";
                                    break;

                                default:
                                    break;
                            }

                        })

                        return typeArr;
                    },
                    getTime() {

                        var arr = this.actTime.slice(0, 6).split(":");
                        var slot = arr[0] >= 12 ? "下午" : "上午";
                        var hour = arr[0] > 12 ? (arr[0] - 12).toString() : `${arr[0]}`;
                        var min = arr[1].toString();
                        var Time = hour + ":" + min + " " + slot;

                        return Time;

                    }
                },
                template: `
                    <div>
                        <div class="row d-flex">
                            <div class="act-img col-xl-6 col-md-6 col-sm-12 ">        
                                <div class="slider-top">
                                    <img :src=inner.actPic alt=""></img>
                                </div>
                                <div class="slider-bottom">
                                </div>
            
                            </div>
            
                            <div class="act-info col-xl-6 col-md-6 col-sm-12">
                                <div class="organizer">
                                    <div class="avatar">
                                        <img :src=nickPic alt=""></img>
                                    </div>
                                    <div class="name">{{nickName}}</div>
                                </div>
                                <h2 class="title">{{inner.actName}}</h2>
                                <div class="act-time">{{inner.actStartDate.replace(/-/g,"/")+"\xa0"+","+"\xa0"+getTime}}</div>
                                <div class="last-time">{{"最後確認"+inner.actDeadLine.replace(/-/g,"/")}}</div>
                                <div class="depart-pos"><i class="fas fa-map-marker-alt"></i>{{inner.actLoc}}</div>
                                <button class="submit" @click="actJoin">我要參加</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="intro-row">
                                    <div class="block">
                                        <div class="sub-title">適合車種</div>
                                            <div class="type">
                                                <div v-for="item in getType">
                                                        {{item}}
                                                </div>
                                            </div>
                                        <!--<div class="type">{{inner.typeNo}}</div>-->
                                    </div>
                                    <div class="block">
                                        <div class="sub-title">騎乘性質</div>
                                        <div class="strength">{{inner.actStren}}</div>
                                    </div>
                                    <div class="block">
                                        <div class="sub-title">人數限制</div>
                                        <div class="applicant">{{inner.actLimit}}</div>
                                    </div>
                                </div>
                            </div>
                             <!-- ==============================參加成員================================ -->
                        </div>
                        <div class="row">
                            <div class="group col-12">
                                <div class="title">{{"參加成員("+attendNum+")"}}</div>
                                <div class="avatar">
                                    <img :src=nickPic alt=""></img>
                                </div>
                                <div class="avatar" v-for="item in attendArr" >
                                    <img :src=item.memPic alt=""></img>
                                </div>
                            
                            </div>
                        </div>
            
            
                        <div class="row">
                            <div class="act-desc col-12">
                            
                                <div class="desc-txt">
                                     {{inner.actContent}}
                                </div>
                                <div class="report">
                                
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <span id="report-btn"  @click="reportAct">檢舉活動</span>
                                
            
                                </div>
                                <div id="report-box-wrap">
                                    <div class="report-box">
                                        <div class="left-btn" @click="closeReport"></div>   
                                        <h3>檢舉活動</h3>
                                        <select name="reportMessage" id="reportMessage">
                                            <option value="">請選擇原因</option>
                                            <option value="非相關自行車活動">1.非相關自行車活動</option>
                                            <option value="外部商品廣告">2.外部商品廣告</option>
                                            <option value="活動內文不當">3.活動內文不當</option>
                                        </select>
                                        <button id="report-send-btn" @click="sendReport">確認</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    
                    `,
            })


            new Vue({
                el: '#app1',
                data: {
                    actNo: data.inner.actNo,
                    inner: data.inner,
                    nickName: data.initMem['memNickName'],
                    nickPic: data.initMem['memPic'],
                    attendMem: data.attendMem,

                },
                mounted() {

                },
                methods: {

                    joinOne: function () {

                        $.ajax({
                            url: "php/joinOne.php",
                            type: "POST",
                            data: {
                                actNo: actNo,
                                memNo: memNo,
                            },
                            success: function (res) {
                                // console.log("傳了");
                                console.log(res);

                            },
                            error: function () {
                                // console.log("gg");

                            }

                        })
                    },

                }
            })






        }

    })






}






window.addEventListener("load", init);