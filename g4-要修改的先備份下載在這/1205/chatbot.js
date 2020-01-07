

// var container = $('#chatBot-box'); //外層固定高 捲軸
// var content = $('#chatBot-content'); //內層超出範圍

//內容第一層overflow
var container = document.getElementById("chatBot-box");
//內容第二層(包p)
var content = document.getElementById("chatBot-content");


// 捲軸維持跑到最底端
function chatBotScrollTo(container, content) {

    let h = content.offsetHeight;

    $("#chatBot-box").animate({ scrollTop: h },"slow");
    
  
    
}


var chatData = [];
var userText = $('#chat-bot').find(".input");
// var userText=$('chat-box').find(".input");
// var content = $('#chatBot-content');





// -----------------------------------------------------


function botReply(reply) {
 
    // var frag = document.createDocumentFragment();
    // var html = "";
    var frag = `
        <div class="dialog official">
        <div class="avatar">
            <div class="pic">
                <img src="./images/chat_bot/offical-1.jpg" alt="">
            </div>
            <div class="name">客服</div>
        </div>
        <div class="msg">
            ${reply}
        </div>
    </div>
    `;
    // content.appendChild(frag);
    var content= document.getElementById("chatBot-content");

    // setTimeout(function (params) {
        content.innerHTML =content.innerHTML +　frag;
        chatBotScrollTo(container, content);
    // },400)
    
    // content.appendChild(html);

    // content.append(frag);
    //更新卷軸

    

}


function checkUserText(userMsg) {

    // for(let i=0;i<chatDate;)
    var ans = "";
    console.log(userMsg);

    chatData.forEach(function (item) {
        console.log(item.csKey);

        if (userMsg.indexOf(item.csKey) != -1 || item.csKey.indexOf(userMsg) != -1) {
            ans = item.csAns;
        }


    })

    if (ans == "") {
        ans = "稍等片刻，將請專人為您處理!"
    };

    console.log(ans);

    botReply(ans);

}

function putUserText(params) {
    let userText = $('#chat-bot').find(".input");
    // let container = $('#chatBot-box'); //外層固定高 捲軸
    // let content = $('#chatBot-content'); //內層超出範圍
    var content = document.getElementById("chatBot-content");
    if (userText.val() == "") {
        return;
    } else {


        let frag = document.createDocumentFragment();
        let dialog = $('<div class="dialog customer"></div>').get(0);
        // console.log(dialog);

        // let avatar = $('<div/>').addClass('avatar'
        //     ).append(
        //         $('<div/>').get(0).addClass("pic").append(
        //             $('<img>').attr(src,"./images/chat_bot/customr-1.jpg")
        //         )
        //     ).append(
        //         $('<div/>').get(0).addClass("name").text("顧客A")
        //     )
        let avatar = "";
        avatar += '<div class="avatar">';
        avatar += '<div class="pic">';
        avatar += '<img src="./images/chat_bot/customr-1.jpg" alt="">';
        avatar += '</div>';
        avatar += '<div class="name">你</div>';
        avatar += '</div>';


        // console.log(userText.val());

        let msg = $('<div class="msg"></div>').text(userText.val()).get(0);

        // dialog.appendChild(avatar).appendChild(msg);
        // dialog.innerHtml=avatar;

        dialog.innerHTML = avatar;
        dialog.appendChild(msg);
        console.log(dialog);

        frag.appendChild(dialog);
        content.appendChild(frag);
        //傳送顧客輸入文字
        // getUserText();
        // chatBotScrollTo(container, content);
        // checkUserText(userText.val());
        
        let h = content.offsetHeight;
        // console.log(h);

        $("#chatBot-box").animate({ scrollTop: h },"slow");
       
        var userMsg = userText.val();
    
       setTimeout(function(){
       checkUserText(userMsg);
        },1000);


        userText.val("");
    }

}




// ---------------------------init--------------------------------------

function botTag(tags) {

    var qq = '';
    var group = $('#chat-box').find('#QA-group');
    // var group = $('#chat-box').find('.QA-group')[0];
    for (let i = 0; i < tags.length; i++) {
        //創造節點
        // var qa = $(`<div class='QA'>${tags[i].csKey}</div>`).get(0);
        // var newlab=$("<li><li>")[0];
        // console.log(newlab);
        qq += "<li class='QA'>"+tags[i].csKey+"</li>";
        // var qq = $("<li></li>").addClass("QA").text(tags[i].csKey).get(0);
        // qa.on('click', function(){
        //     let tagText = $(this).text();
        //     chatBot.find('.input').val() = tagText;
        //     chatBot.find('.send').click();
        // }); //??先綁定事件再插入 還是插入後再綁定事件

        // var keytag = document.createElement("li");
        // //定義元素樣式
        // keytag.className = "QA";
        // //創造節點
        // var textnodeB = document.createTextNode(tags[i].csKey);
        // keytag.appendChild(textnodeB);

        // console.log(group);
        // group.appendChild(qq);


        // console.log(qa);

    }
    console.log(qq);
    $("#QA-group").append(qq);

// $('#QA-group').on("click",".QA",function(){
    $(document).on("click",".QA", function(){
        var chatBot = $("#chat-bot");
        let tagText = $(this).text();
        console.log(tagText);
        chatBot.find('.input').val(tagText);
        putUserText();
        // chatBot.find('.send').click(putUserText);
    });


    // $('.QA').click(function(){
    //     console.log("QAQAQA");
        

    // })
    
    // for(let i=0; i<document.getElementsByClassName("QA").length;i++){

    //         document.getElementsByClassName("QA")[i].onclick=function(){
    //         let tagText = $(this).text();
    //         chatBot.find('.input').val() = tagText;
    //         chatBot.find('.send').click();
    //     }

    // }
   
}



function getTag() {

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {

            var data = JSON.parse(xhr.responseText);
            console.log(data);
            // console.log(xhr.responseText);
            botTag(data); //倒出標籤
            chatData = data;

        } else {
            console.log(xhr.status);

        }
    }

    var url = "php/robot.php";
    xhr.open("Get", url, true);
    xhr.send(null);
}



$(document).ready(function () {


    var chatBot = $("#chat-bot");

    
    $('#greet').hide();

    $('.chat-bot-btn').click(function () {
        $('#chat-bot').toggleClass('open');
        setTimeout(function () {
            $('#greet').show()
        }, 500)
    })
    getTag();
    chatBot.find('.send').on('click', putUserText);

    // if(window.innerWidth < 768){
    //     $('#chat-bot').css({
    //         width: '80%',
    //         top: '70px',
    //         left: '0px',
    //         right: '0px',
    //         margin: '0 auto',
    //     });
    //     $('#QA-group').css({
    //         'min-height': 'inherit',
    //     });
    //     $('#input-search-bar').css({
    //         'margin-top': '5px',
    //         padding: '5px',
    //         'box-sizing': 'border-box',
    //         width: '150px',
    //         height: '45px',
    //         'max-height': '50px',
    //     });
    //     $('.chat-bot-btn').css({
    //         'transform': 'translateY(60px)',
    //     });
    // }

})