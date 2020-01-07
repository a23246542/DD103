{/* <script src='https://cdnjs.cloudflarmemNoe.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script> */}
{/* <script type="module" src="js/dropkick.js"></script> */}

$(document).ready(function(){

   
    // var actNo=JSON.parse(localStorage['actNo']);
    var memNo,memNickName,memPic;
    if(sessionStorage['memNo']!= null || sessionStorage['memNo']!=undefined || sessionStorage['memPic']!=null){
        //  memNo=sessionStorage['memNo'];
        //  console.log(typeof(memNo));
         memNo = JSON.parse(sessionStorage['memNo']);
         console.log(typeof(memNo));
         memNickName = sessionStorage['memNickName'];
         memPic = sessionStorage['memPic'];
    }
    
    

    $('#twzipcode').twzipcode({
        onCountySelect:function(){
            $('.county').addClass("dk-select-open-up");
        }
    });
    var info= document.getElementById("file-info");
    document.getElementById("drag-box").ondragover = dragOver;
    document.getElementById("drag-box").ondrop = dropped;
    document.getElementById("the-file").onchange = fileChange;
    // document.getElementById("theFile").onchange = fileChange;

    function dragOver(e) {
        e.preventDefault();

    }

    let image = document.getElementById('drag-img');
    var aa;

    var actImgName;

    function dropped(e) {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        // document.getElementById("the-file").innerText = file.name;
        info.innerText= file.name;
        actImgName="./images/"+file.name;

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', function (e) {
        console.log(file);
    
        image.src = this.result;
        aa = this.result;
            // image.style.maxWidth = '500px';
            // image.style.maxHeight = '400px';

        });
    }

    

    function fileChange() {
        let file = document.getElementById("the-file").files[0];
        console.log(file);
        
        let message = '';
        message += file.name;
        info.innerText= file.name;
        actImgName="./images/"+file.name;

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', function () {
            image.src = this.result;

            // aa = this.result;
            // console.log(aa);  
            // // setTimeout(saveImage(aa), 10000);
            // document.getElementById('hidden_data').value = aa;
            // setTimeout(saveImage(aa), 10000);
        })


    }

    function upImg(){
          // var file_data = $('#hidden_data').prop('files')[0]; 
        var file_data = $('#the-file')[0].files[0];   //取得上傳檔案屬性
        var form_data = new FormData();  //建構new FormData()
        form_data.append('hidden_data', file_data);  //吧物件加到file後面
                                            
        $.ajax({
            url: 'php/uploadAct.php',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,     //data只能指定單一物件                 
            type: 'post',
            success: function(data){
                console.log(data);
            },
            error: function(data){
                console.log(data);
            }     
        });
    }

    // function saveImage(aa){
    //     document.getElementById('hidden_data').value = aa;
    //     console.log(document.getElementById("form1"));
        
    //     var formData = new FormData(document.getElementById("form1")['0']);

    //     console.log(formData.toString());

    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function(){
    //         if( xhr.status == 200){
    //         if(xhr.responseText == "error"){
    //             alert("Error");
    //         }else{
    //             alert('Succesfully uploaded');  
    //             console.log(xhr.responseText);
    //         }
    //         }else{
    //         alert(xhr.status)
    //         }
    //     }
        
    //     xhr.open('POST', 'uploadAct.php', true);
    //     xhr.send(formData);

    // }


    
    // $('.county').dropkick();
    // $('.district').dropkick();
    
    $('#level').dropkick(
        // initialize(){},

    );


    // ============================表單==================================
    


//    -----------------------縣市區域-----------------------
    var countyList ={
         north:['台北市','新北市','基隆市','桃園市','新竹市','新竹縣','宜蘭縣','連江縣'],
         central:['苗栗縣','台中市','彰化縣','南投縣','雲林縣','金門縣'],
         south:['嘉義市','嘉義縣','台南市','高雄市','屏東縣','澎湖縣'],
         east:['花蓮縣','台東縣'],
    }


    let region="";
    let selectedCounty;
    // $('#twzipcode').find('input[type="select"][name="county"]').on("change",function(){
    
    $('#twzipcode').find('select[name="county"]').on("change",function(){
        
        console.log($(this).val());
        selectedCounty = $(this).val();
        
        if($.inArray(selectedCounty,countyList.north)!==-1){
            // console.log(selectedCounty);
            // console.log(countyList.north);
            region = "北部";
        }else if($.inArray(selectedCounty,countyList.central)!==-1){
            region = "中部";
        }else if($.inArray(selectedCounty,countyList.south)!==-1){
            region = "南部";
        }else{
            region = "東部";
        }
        console.log(region);
    })

    
    
    // ===============表單送出==============================
    

    // $('#act-submit').on("click",formData);
    $('#act-submit').on("click",function(){


                upImg();
        // e.preventDefault();
                // var form = $('#act-form')
                // var formData = new FormData(form);
                
                // 表單驗證 正規表達
                // 1.如果維空

                // -------------活動地點------------------
                var actLoc='';
                var county,district;
                function getLocation(){
                    
                    county = selectedCounty;
                    district = $('#twzipcode').find('select[name="district"]').val()
                    loc =$('#loc').val();
                    actLoc += county;
                    actLoc += district;
                    actLoc += loc;
                    console.log(actLoc);
                
                }

                getLocation();


            
                // --------活動車種---------
                let checkedValue = $('input[name^=type]:checked').map(function(){
                    // return item.val();
                    return $(this).val();
                });

                let typeStr = Array.from(checkedValue).join('');
                // console.log(typeStr);
                console.log($('#the-file').val());
                console.log($('#title').val());
                console.log(actLoc);
                console.log(region);
                console.log($('#act-content').val());
                console.log($('#date').val());
                console.log($('#time').val());
                console.log($('#DeadLineDate').val());
                console.log(typeStr);
                console.log($('#level').val());
                console.log($('#limit').val());
                
            
                // 少了舉辦人會員 他同時是一個參加人
                // total預設值1
                // id圖片
                

                $.ajax({
                    url:"./php/actForm.php",
                    type:"POST",
                    data:{
                        
                        // act_img:$('#the-file').val(),
                        // act_img:$('#the-file').va,
                        act_pic:actImgName,
                        act_title:$('#title').val(),
                        // act_twzip:$('#twzipcode').val(),
                        act_location:actLoc,
                        act_region:region,
                        act_content:$('#act-content').val(),
                        act_date:$('#date').val(),
                        act_time:$('#time').val(), //時間格式
                        act_DeadLineDate:$('#DeadLineDate').val(),
                        act_type:typeStr,
                        act_stren:$('#level').val(),
                        act_limit:$('#limit').val(), //下拉取值
                        memNo:memNo,

                        
                    },
                    // dataType:"JSON",
                    success:function(msg){

                        // alert(msg);

                        // alert("成功");
                        // var msg = JSON.parse(jsonStr)
                        // if (msg.json_msg=="success"){
                        //     alert("成功");
                        //     // $("#result").text(msg.json_msg);
                        // }else{
                        //     alert("半成功");
                        //     // $("#result").text(msg.json_msg);
                        alert("成功建立活動");
                        location.href="activity.html";

                        // }
                    },err:function(res){
                        console.log(res);
                        // alert("回傳失敗");
                    }

                })

            
            

                


    });
   
        
    // $('#title').focus(function(){
    $(document).on('focus','#title,#loc,#limit',function(){
        console.log("test");

        $(this).parent().next().addClass('focus');
    }).on('blur','#title,#loc,#limit',function(){
        $(this).parent().next().removeClass('focus');
    })
        


    


    
})