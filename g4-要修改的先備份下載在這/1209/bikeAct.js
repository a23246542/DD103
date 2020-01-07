function init() {

    var data = [];

    var memNo, memNickName, memPic;
    if (sessionStorage['memNo'] != null || sessionStorage['memNo'] != undefined || sessionStorage['memPic'] != undefined) {
        memNo = JSON.parse(sessionStorage['memNo']);
        memNickName = sessionStorage['memNickName'];
        memPic = sessionStorage['memPic'];
    }

    $.ajax({
        url: "php/bikeAct.php",
        type: "GET",
        data: {},
        success: function (res) {


            data = JSON.parse(res);
            console.log(data);




            Vue.component('post-act', {
                props: [
                    'item', 'actNo',
                ],
                data() {
                    return {
                        asn: this.actNo,
                        stren: this.item.actStren,
                    }
                },
                methods: {
                    getActNo() {
                        this.$emit('get-asn', this.asn);
                        console.log("組件");
                    },
                    openDetail(e) {


                        $(e.target).parent().parent().parent().parent().next().addClass('open');
                        $('.close-detail').on('click', function () {
                            $(this).parent().parent().removeClass('open');
                        })


                    }
                },
                computed: {
                    getTime() {
                        //"2019-11-20"
                        //"2019-09-20"
                        var actStartDate = this.item.actStartDate;


                        var weekDay = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];
                        var day = new Date(actStartDate).getDay();



                        var arr = actStartDate.slice(5).split("-");
                        var month = Number(arr[0]);
                        var date = Number(arr[1]);
                        var actDate = weekDay[day] + "\xa0" + month + "月" + date + "日";
                        return actDate;

                    },
                    getStartDay() {
                        var actStartDate = this.item.actStartDate;
                        var weekDay = ["日", "一", "二", "三", "四", "五", "六"];
                        var startDay = new Date(actStartDate).getDay();
                        var actStartDay = "(" + weekDay[startDay] + ")";
                        return actStartDay;
                    },
                    getEndDay() {
                        var actEndDate = this.item.actDeadLine;
                        var weekDay = ["日", "一", "二", "三", "四", "五", "六"];
                        var endDay = new Date(actEndDate).getDay();
                        var actEndDay = "(" + weekDay[endDay] + ")";
                        console.log(actEndDay);
                        return actEndDay;
                    },
                    getStrenCircle() {

                        switch (this.stren) {
                            case "休閒級":
                                return 1;
                                break;

                            case "運動級":
                                return 2;
                                break;

                            case "挑戰級":
                                return 3;
                                break;

                            default:
                                break;
                        }
                    }
                },
                template: `
                <div>
                    <div class="post-detail col-xl-4 col-md-6 col-sm-12">
                        <div class="post-item">
                            <div class="avatar"><img :src=item.memPic alt=""></div>
                            <figure class="post-img">
                                <img :src=item.actPic alt="">
                            </figure>
                            <div class="post-intro">
                                <a href="activity_inner.html">
                                    <h3 class="title" @click="getActNo">{{item.actName}}</h3>
                                </a>
                                <div class="txt">
                                    <div class="meta-top">
                                        <div class="date">{{getTime}}</div>
                                        <div class="location">{{item.actLoc.substr(0,6)}}</div>
                                        <span class="open-detail" @click="openDetail"></span>
                                    </div>

                                    <div class="meta-bottom">
                                        <span class="hard">{{item.actStren}}<span class="circle" v-for="item in getStrenCircle"></span></span>
                                        <div class="social">
                                            <span class="people">{{item.actTotal+"/"+item.actLimit}}</span>
                                            <span class="msg">{{item.comNum}}</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    
                        <div class="detail">
                            <div class="title">{{item.actName}}</div>
                                <ul>
                                    <li>{{"集合地點-"+item.actLoc.length>8? item.actLoc.substr(0,8)+"...":item.actLoc}}</li>
                                    <li>{{"出發日期-"+item.actStartDate+getStartDay}}</li>
                                    <li>{{"報名截止-"+item.actDeadLine+getEndDay}}</li>
                                    <li>{{item.actContent}}</li>
                                    <span class="close-detail"></span>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>
                `,

            });

            new Vue({
                el: '#app',
                data: {

                    filterActs: data,
                    zone: [],
                    hard: [],
                    zoneStatus: false,
                    hardStatus: false,
                    type: '1',
                    actNo: 1,
                    filterText: "",
                },
                created() {

                },
                mounted() {
                    var vm = this;
                    $('.tab-bikes').on('click', 'li', function (e) {
                        let index = $(this).index();
                        $('.banner-bg li.active').removeClass('active').fadeOut(100, function () {
                            $('.banner-bg li').eq(index).fadeIn(100).addClass('active');
                        });

                    });


                    $('.banner-bg li').hide().first().show().addClass('active');
                    $('.tab-bikes li').first().addClass('.active');

                    // ------------------------手機----------------------------

                    $('.m-filter').click(function (e) {
                        //  e.preventDefault();
                        if ($('.condition').hasClass('m-open') == false) {
                            $('.condition').addClass('m-open');
                            // $('.m-open').css('transform', 'translateY(0)');
                        } else {
                            // $('.m-open').css('transform', 'translateY(100%)');
                            $('.condition').removeClass('m-open');
                        }

                    })

                    $('.m-close-filter').click(function () {
                        $('.condition').removeClass('m-open');
                    })

                    // ------------------日期篩選----------------------

                    $('#date-picker-end').on("change", function () {

                        var startDate = $('#date-picker-start').val();
                        var endDate = $(this).val();

                        console.log(startDate);
                        console.log(endDate);

                        $.ajax({
                            url: "php/date.php",
                            dataType: "json",
                            type: "POST",
                            data: {
                                startDate: startDate,
                                endDate: endDate
                            },
                            success: function (res) {
                                console.log(res);
                                // var date = JSON.parse(res);
                                // console.log(date);
                                console.log(vm);
                                // var vm =this;
                                // Vue.$set(vm,vm.filterActs,res);
                                vm.filterActs = res;

                            },
                            error: function (res) {
                                console.log(res);

                            }
                        })



                    })


                },
                created() {

                },
                methods: {
                    getActNo(asn) {
                        console.log(asn);
                        var vm = this;
                        vm.actNo = asn;
                        localStorage['actNo'] = asn;
                    },
                    filterData() {
                        var vm = this;
                        if (vm.filterText != "") {
                            vm.filterActs = data.filter(item => {
                                return item.actName.toLowerCase().match(vm.filterText.trim().toLowerCase());
                            })
                        } else {
                            vm.filterActs = data;
                        }

                    },
                    getDate() {

                    },
                    zoneFilter(e) {
                        console.log(e.target.checked);
                        if (e.target.checked) {
                            this.zone.push(e.target.value);
                            // console.log(this.zone.indexOf(e.target.value));     
                            // console.log(e.checked);

                        } else {
                            // console.log(this.zone.indexOf(e.target.value));
                            this.zone.splice(this.zone.indexOf(e.target.value), 1)
                        }
                        console.log(this.zone);

                    },
                    hardFilter(e) {
                        if(e.target.checked){
                            this.hard.push(e.target.value);                     
                        }else{
                            this.hard.splice(this.zone.indexOf(e.target.value),1)
                        }
                    },
                    zoneChangeStatus(e) {
                        if(this.zone.length!=0||e.target.checked){
                            this.zoneStatus=true;
                        }else{
                            this.zoneStatus=false;
                        }
                       
                    },
                    hardChangeStatus(e) {
                        if(this.hard.length!=0||e.target.checked){
                            this.hardStatus=true;
                        }else{
                            this.hardStatus=false;
                        }
                        
                    },
                    changeType(e) {
                        dataType = e.target.getAttribute('data-type');

                        switch (dataType) {
                            // switch(e.target.dataset.type){                                
                            case '1':
                                this.type = '1';
                            case '2':
                                this.type = '2';
                            case '3':
                                this.type = '3';
                        };

                    },
                    jqueryFn() {

                        $('.tab-bikes').on('click', 'li', function (e) {
                            let index = $(this).index();
                            $('.banner-bg li.active').removeClass('active').fadeOut(100, function () {
                                $('.banner-bg li').eq(index).fadeIn(100).addClass('active');
                            })

                            $('.tab-bikes .type').not(this).removeClass('active').stop().animate({
                                top: '0px'
                            }, 300, );
                            $(this).addClass('active').stop().animate({
                                top: '15px'
                            }, 300, );
                        })



                    },

                },
                computed: {
                    actsFilter() {
                        if (this.zoneStatus == false && this.hardStatus == false) {
                            return this.filterActs;
                        } else if (this.zoneStatus == true && this.hardStatus == false) {
                            return this.filterActs.filter((item) => {
                                return (this.zone.indexOf(item.actZone)) !== -1
                            })
                        } else if (this.zoneStatus == false && this.hardStatus == true) {
                            return this.filterActs.filter((item) => {
                                return (this.hard.indexOf(item.actStren)) !== -1
                            })
                        } else {
                            return this.filterActs.filter((item) => {
                                return (this.zone.indexOf(item.actZone)) !== -1
                            }).filter((item) => {
                                return (this.hard.indexOf(item.actStren)) !== -1
                            })
                        }
                    }
                }
            })





        },

    })
}




window.addEventListener("load", init, false);