function init() {


    var data = [];
    var actNo = localStorage['actNo'];
    var memNo, memNickName, memPic;
    if (sessionStorage['memNo'] != null || sessionStorage['memNo'] != undefined) {
        memNo = sessionStorage['memNo'];
        memNickName = sessionStorage['memNickName'];
        memPic = sessionStorage['memPic'];
    }

    $.ajax({
        url: "php/getComment.php?actNo=" + actNo,
        type: "GET",
        data: {},
        success: function (res) {
            // console.log(res);

            data = JSON.parse(res);
            console.log(data);



            Vue.component("comment-input", {
                template: `
                        <div>
                            <div class="comment-input">
                                <p class="title">留下意見</p>
                                <textarea name="" id="" aria-label="" placeholder="有任何疑問嗎" v-model="message" @input="checkLimit"></textarea>
                                <div class="input-group">
                                    <span class="errMeg"></span>
                                    <span class="counter">{{counter}}/100</span>
                                </div>
                                <div>
                                    <button @click.prevent="InputEvent" class="send" >留言</button>
                                </div>
                            </div>
                    </div>`,
                data: function () {
                    return {
                        message: "",


                    }
                },
                methods: {
                    checkLimit:function () {

                        this.message = this.message.substr(0, 100);
                    },
                    InputEvent:function () {

                        if (sessionStorage['memNo'] == null) {
                            swal("尚未登入","","info");
                            return;
                        }
                        var value = this.message.trim();

                        if (!value) {
                            return;
                        }

                        this.$emit('input-text', value);
                        this.message = "";
                    }
                },
                computed: {
                    counter: function () {
                        return this.message.trim().length;
                    }
                }

            })



            Vue.component("comment-list", {
                template: `
                        <div>     
                            <div class="comment-item">
                                <div class="avatar">
                                    <img :src=item.memPic alt="">
                                </div>
                                <div class="content">
                                    <div class="comment-name">{{item.memNickName}}</div>
                                    <div class="comment-txt">{{item.comContent}}</div>
                                    <div class="comment-date">{{item.comDate.slice(0,-3)}}</div>
                                </div>
                            </div>
                        </div>
                    `,
                props: ['item', 'itemMsg'],
                data: function () {
                    return {
                        // comArr:this.item,
                        // newMsg:{},
                    }
                },
                methods: {
                   
                },
               

            })


            new Vue({
                el: '#app',
                data: {
                    userMessage: {},
                    list: data,
                },
                methods: {
                    putText: function (newMsg) {
   

                        var dates = new Date();
                        var month = dates.getMonth() + 1;
                        var date = dates.getDate();
                        var hour = dates.getHours();
                        var min = dates.getMinutes();
                        var sec = dates.getMinutes();

                        var comDate = dates.getFullYear() + '-' +
                            (month < 10 ? '0' : '') + month + '-' +
                            (date < 10 ? '0' : '') + date + " " +
                            (hour < 10 ? '0' : '') + hour + ":" +
                            (min < 10 ? '0' : '') + min + ":" +
                            (sec < 10 ? '0' : '') + sec;



                        this.list.push({
                            actNo: JSON.parse(localStorage['actNo']),
                            comContent: newMsg,
                            comDate: comDate,
                            memNickName: memNickName,
                            memNo: memNo,
                            memPic: memPic,
                        });


                        $.ajax({
                            url: "php/comment.php",
                            type: "POST",
                            data: {
                                actNo: JSON.parse(localStorage['actNo']),
                                memNo: memNo,
                                comContent: newMsg,
                            },
                            success: function (res) {
    
                                console.log(res);
    
                            },
                            error: function (res) {
                                console.log("前台傳送失敗");
                                console.log(res);


                            }

                        })

                    }
                },


            })

        },
        error: function (res) {
            console.log(res);

            console.log("撈取失敗");


        }
    });

}


window.addEventListener("load", init);