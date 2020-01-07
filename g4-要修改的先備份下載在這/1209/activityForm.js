$(document).ready(function () {



    var memNo, memNickName, memPic;
    if (sessionStorage['memNo'] != null || sessionStorage['memNo'] != undefined || sessionStorage['memPic'] != null) {

        memNo = JSON.parse(sessionStorage['memNo']);
        console.log(typeof (memNo));
        memNickName = sessionStorage['memNickName'];
        memPic = sessionStorage['memPic'];
    }



    $('#twzipcode').twzipcode({
        onCountySelect: function () {
            $('.county').addClass("dk-select-open-up");
        }
    });
    var info = document.getElementById("file-info");
    document.getElementById("drag-box").ondragover = dragOver;
    document.getElementById("drag-box").ondrop = dropped;
    document.getElementById("the-file").onchange = fileChange;


    function dragOver(e) {
        e.preventDefault();

    }

    let image = document.getElementById('drag-img');

    var actImgName;

    function dropped(e) {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        // document.getElementById("the-file").innerText = file.name;
        info.innerText = file.name;
        actImgName = "./images/" + file.name;

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', function (e) {
            console.log(file);

            image.src = this.result;


        });
    }



    function fileChange() {
        let file = document.getElementById("the-file").files[0];
        console.log(file);

        let message = '';
        message += file.name;
        info.innerText = file.name;
        actImgName = "./images/" + file.name;

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', function () {
            image.src = this.result;

        })


    }

    function upImg() {
        // var file_data = $('#hidden_data').prop('files')[0]; 
        var file_data = $('#the-file')[0].files[0]; //取得上傳檔案屬性
        var form_data = new FormData(); //建構new FormData()
        form_data.append('hidden_data', file_data); //物件加到file後面

        $.ajax({
            url: 'php/uploadAct.php',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data, //data只能指定單一物件                 
            type: 'post',
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
    }



    $('#level').dropkick();


    // ============================表單==================================



    //    -----------------------縣市區域-----------------------
    var countyList = {
        north: ['台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣', '連江縣'],
        central: ['苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '金門縣'],
        south: ['嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '澎湖縣'],
        east: ['花蓮縣', '台東縣'],
    }


    let region = "";
    let selectedCounty;


    $('#twzipcode').find('select[name="county"]').on("change", function () {

        console.log($(this).val());
        selectedCounty = $(this).val();

        if ($.inArray(selectedCounty, countyList.north) !== -1) {
            // console.log(selectedCounty);
            // console.log(countyList.north);
            region = "北部";
        } else if ($.inArray(selectedCounty, countyList.central) !== -1) {
            region = "中部";
        } else if ($.inArray(selectedCounty, countyList.south) !== -1) {
            region = "南部";
        } else {
            region = "東部";
        }
        console.log(region);
    })



    // ===============表單送出==============================



    $('#act-submit').on("click", function () {


        upImg();

        // -------------活動地點------------------
        var actLoc = '';
        var county, district;

        function getLocation() {

            county = selectedCounty;
            district = $('#twzipcode').find('select[name="district"]').val()
            loc = $('#loc').val();
            actLoc += county;
            actLoc += district;
            actLoc += loc;
            console.log(actLoc);

        }

        getLocation();



        // --------活動車種---------
        let checkedValue = $('input[name^=type]:checked').map(function () {
            // return item.val();
            return $(this).val();
        });

        let typeStr = Array.from(checkedValue).join('');
        // console.log(typeStr);
        // console.log($('#the-file').val());
        // console.log($('#title').val());
        // console.log(actLoc);
        // console.log(region);
        // console.log($('#act-content').val());
        // console.log($('#date').val());
        // console.log($('#time').val());
        // console.log($('#DeadLineDate').val());
        // console.log(typeStr);
        // console.log($('#level').val());
        // console.log($('#limit').val());



        $.ajax({
            url: "./php/actForm.php",
            type: "POST",
            data: {

                act_pic: actImgName,
                act_title: $('#title').val(),
                act_location: actLoc,
                act_region: region,
                act_content: $('#act-content').val(),
                act_date: $('#date').val(),
                act_time: $('#time').val(), //時間格式
                act_DeadLineDate: $('#DeadLineDate').val(),
                act_type: typeStr,
                act_stren: $('#level').val(),
                act_limit: $('#limit').val(), //下拉取值
                memNo: memNo,


            },
            // dataType:"JSON",
            success: function (msg) {

                swal("成功建立活動","","success");
                location.href = "activity.html";


            },
            error: function (res) {
                console.log(res);

            }

        })







    });



    $(document).on('focus', '#title,#loc,#limit', function () {
        console.log("test");

        $(this).parent().next().addClass('focus');
    }).on('blur', '#title,#loc,#limit', function () {
        $(this).parent().next().removeClass('focus');
    })







})