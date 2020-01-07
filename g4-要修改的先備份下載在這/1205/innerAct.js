


function init(){


     {/* <!-- <img class="el el-photo"></!--> */}
    {/* <script  type="text/x-template" id="act-inner">
        <div>
                <div class="row">
                    <div class="act-img col-xl-6 col-md-6 col-sm-12 ">        
                        <div class="slider-top">
                            <img src="https://picsum.photos/500/400?random=1" alt=""></img>
                        </div>
                        <div class="slider-bottom">
                        </div>

                    </div>

                    <div class="act-info col-xl-6 col-md-6 col-sm-12">
                        <div class="organizer">
                            <div class="avatar">
                                <img src="./images/act_inner_image/avatar.PNG" alt=""></img>
                            </div>
                            <div class="name">Meiching Chiang</div>
                           
                        </div>
                        <h2 class="title">金龍湖自行車漫遊</h2>
                        <div class="act-time">2019/11/3 10:30上午</div>
                        <div class="last-time">最後確認2019/11/01</div>
                        <div class="depart-pos"><i class="fas fa-map-marker-alt"></i>出發地 新北汐止,金龍湖金龍路123號</div>
                        <button class="submit">我要參加</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="intro-row">
                            <div class="block">
                                <div class="sub-title">適合車種</div>
                                <div class="type">公路車</div>
                            </div>
                            <div class="block">
                                <div class="sub-title">騎乘性質</div>
                                <div class="strength">休閒級</div>
                            </div>
                            <div class="block">
                                <div class="sub-title">參加人數</div>
                                <div class="applicant">5人</div>
                            </div>
                        </div>
                    </div>
                 
                </div>
                <div class="row">
                    <div class="group col-12">
                        <div class="title">參加成員</div>
                        <div class="avatar">
                            <img src="https://picsum.photos/60/60?random=10" alt=""></img>
                        </div>
                        <div class="avatar">
                            <img src="https://picsum.photos/60/60?random=10" alt=""></img>
                        </div>
                        <div class="avatar">
                            <img src="https://picsum.photos/60/60?random=10" alt=""></img>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="act-desc col-12">
                      
                        <div class="desc-txt">
                            每逢十月下旬，夏熱的天氣開始漸漸轉為舒適宜人的秋涼，除了是楓葉染紅的好時節外，也是芒花盛開之際。芒花不如玫瑰擁有艷麗的外衣，然而在秋冬之交這片開滿山的芒花勾畫出的雪白世界，容易讓人沉醉於其中的浪漫氛圍。
                            「不厭亭」取自李白的詩句「相看兩不厭」，有人稱天堂路、寂寞公路等等，不難想其所擁有的高人氣。雖然他的海拔只有531公尺，從不厭亭往下看來時路，其線條頗為壯觀，與合歡山有幾分神似，因此也才有「小武嶺」之稱。在秋芒隨風搖曳起舞下，除了能夠以360度無死角眺望雙溪的風景，還可以一睹瑞芳和基隆之美。
                            五分山的地標是中央氣象局氣象雷達站，也是很多車友想征服的重要山頭，在單車界極負盛名。上到電達站後，往瑞芳和基隆港方向視野極佳，山海景致一覽無遺。
                            這次活動我們將水湳洞、黃金瀑布、九份、不厭亭、五分山雷達站等景點結合，１０２＋１０６經典路線，包山包海，一次吃到飽(保證不會吐)。
                            <br></br>
                            <br></br>
                            路線說明:
                            起點：暖暖運動公園，大概上午七點出發。
                            　終點：暖暖運動公園，下午前回到終點。
                            　自行補給、沒有支援車！五分山最高，只有700公尺多一點，沿途有多家便利超商與市集飲食店。
                        </div>
                        <div class="report">
                          
                            <i class="fas fa-exclamation-triangle"></i>
                            <span id="report-btn">檢舉活動</span>
                           

                        </div>
                        <div id="report-box-wrap">
                            <div class="report-box">
                                <h3>檢舉活動</h3>
                                <select name="reportMessage" id="">
                                    <option value="">請選擇原因</option>
                                    <option value="1">1.非相關自行車活動</option>
                                    <option value="2">2.外部商品廣告</option>
                                    <option value="3">3.活動內文不當</option>
                                </select>
                                <button id="report-send-btn">確認</button>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </script> */}
  
        var data={};
        var actNo=JSON.parse(localStorage['actNo']);
        var memNo,memNickName,memPic;
        if(sessionStorage['memNo']!= null || sessionStorage['memNo']!=undefined){
            memNo=JSON.parse(sessionStorage['memNo']);
            memNickName = sessionStorage['memNickName'];
            memPic = sessionStorage['memPic'];
        }
       
        $(function(){ 
            pushHistory(); 
            window.addEventListener("popstate", function(e) { 
             parent.location.href="activity.html";//回活動頁
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
            url:"php/innerAct.php?actNo="+actNo,
            type:"GET",
            // async:false,
            data:{
                // actNo:this.actNo,
                // inner:{},
            },
            // dataType:"JSON",
            success:function(res){
                console.log(res);
                data = JSON.parse(res);
                console.log(data);
                // this.inner=data; 



                Vue.component('act-inner',{
                    props:['inner','nickName','nickPic','attendList'],
                    data(){
                        return{
                            newAttend:{},
                            attendNum:this.inner.actTotal,
                            attendArr:this.attendList,
                            actTime:this.inner.actTime,
                            pic:this.nickPic,
                            
                        };
                    },
                    methods:{
                        actJoin:function(){
                            // this.$emit('actJoin');
                            // var vm = this;
                            if(sessionStorage['memNo'] == null){
                                alert("尚未登入");
                                return;
                            }
                            alert("報名成功");
                            this.$emit('act-join');
                            this.attendNum++;
                            this.newAttend = Object.assign({},{
                                    memNickName:memNickName,
                                    memPic:memPic,
                                    // vm.$set(vm.new)
                            });
                            // this.$set(this.newAttend,memNickName,JSON.parse(localStorage['memNickName']));
                            // this.$set(this.newAttend,memPic,JSON.parse(localStorage['memPic']));
                            this.attendArr.push(this.newAttend);
                        },
                        reportAct:function(e){
                   
                            // $('#report-box-wrap').show();
                            $(e.target).parent().next("#report-box-wrap").fadeIn(300);
                           
                            console.log("fade");
                        },
                        closeReport:function(e){
                             $(e.target).parents("#report-box-wrap").fadeOut(200);
                        },
                        sendReport:function(e){

                            if(sessionStorage['memNo'] == null){
                                alert("檢舉前需要登入會員喔");
                                return;
                            }
                            $(e.target).parents("#report-box-wrap").fadeOut(200,function(){
                                console.log($('#reportMessage').val());
                                
                                $.ajax({
                                    url:"php/reportAct.php",
                                    type:"POST",
                                    data:{
                                        memNo:memNo,
                                        reportReason:$('#reportMessage').val()
                                    },
                                    success:function(res){
                                        console.log(res);
                                        
                                    },error:function(res){
                                        console.log(res);
                                        
                                    }

                                })
                                alert("檢舉已送出");
                            });

                        }
                    },
                    computed:{
                        // attArr(){
                        //     return this.attendArr;

                        // },
                        // attNum(){
                        //     return this.attendNum;
                        // },
                        getType(){
                            var type = this.inner.typeNo.split('');
                            var typeArr = type.map(function(item){
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
                        getTime(){

                            var arr = this.actTime.slice(0,6).split(":");
                            var slot = arr[0]>=12? "下午":"上午";
                            var hour = arr[0]>12? (arr[0]-12).toString():`${arr[0]}`;
                            var min = arr[1].toString();
                            // var Time = hour.concat(":",min," ",slot);
                            var Time = hour+":"+min+" "+slot;

                            return Time;
                            // return hour;
                        }
                    },
                    template:`
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


                console.log("here");

                    // "出發地"+_s{{inner.actLoc.substr(0,6)}}+","+_s{{inner.actLoc.substr(7,-1):}}
                {/* <div class="act-time">{{inner.actStartDate}}10:30上午</div> */}
                
                new Vue({
                    el:'#app1',
                    data:{
                        actNo:data.inner.actNo,
                        inner:data.inner,
                        // nickName:"哈囉",
                        // nickName:data.initMem.memNickName,
                        nickName:data.initMem['memNickName'],
                        nickPic:data.initMem['memPic'],
                        attendMem:data.attendMem,
                        // nickName:data.initMem['memNickName'],
                    
                    },
                    mounted(){
                        // console.log(this.inner);
                        // $('#report-btn').click(function () {
                        //     $('#report-box-wrap').show();
                        //     console.log("test");
                
                        // })
                        // $.ajax({
                        //     url:"php/innerAct.php",
                        //     type:"GET",
                        //     async:false,
                        //     data:{
                        //         // actNo:this.actNo,
                        //         // inner:{},
                        //     },
                        //     // dataType:"JSON",
                        //     success:function(res){
                        //         var data = JSON.parse(res);
                        //         console.log(data);
                        //         this.inner=data;
                        //     }
                
                        // })
                
                        // getAct();
                    },
                    methods:{
                        // getAct(){
                        //     let api="php/innerAct.php"
                        //     let vm = this;
                        //     vm.$http.get(api).then((res)=>{
                        //         data = JSON.parse(res);
                        //         console.log(data);
                        //         vm.inner=data;
                        //     })
                        // }
                        joinOne:function(){
                           
                            $.ajax({
                                url:"php/joinOne.php",
                                type:"POST",
                                data:{
                                    actNo:actNo,
                                    memNo:memNo,
                                },
                                success:function(res){
                                    // console.log("傳了");
                                    console.log(res);
                                    
                                },
                                error:function(){
                                    console.log("gg");
                                    
                                }

                            })
                        },
                        // reportThis:function(e){
                        //     console.log("test");
                        //     $(e.target).click(function(){
                        //         $('#report-box-wrap').show();
                    
                        //     })
                        // }
                
                    }
                })






            }

        })
    

    // getAct()

    
    
}






window.addEventListener("load",init);