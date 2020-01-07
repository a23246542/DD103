//內容第一層overflow
var container = document.getElementById("chatBot-box");
//內容第二層(包p)
var content = document.getElementById("chatBot-content");


// 捲軸維持跑到最底端
function chatBotScrollTo(container, content) {

    let h = content.offsetHeight;

    $("#chatBot-box").animate({
        scrollTop: h
    }, "slow");



}


var chatData = [];
var userText = $('#chat-bot').find(".input");






// -----------------------------------------------------


function botReply(reply) {


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

    var content = document.getElementById("chatBot-content");


    content.innerHTML = content.innerHTML + frag;
    chatBotScrollTo(container, content);




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

        $("#chatBot-box").animate({
            scrollTop: h
        }, "slow");

        var userMsg = userText.val();

        setTimeout(function () {
            checkUserText(userMsg);
        }, 1000);


        userText.val("");
    }

}




// ---------------------------init--------------------------------------

function botTag(tags) {

    var qq = '';
    var group = $('#chat-box').find('#QA-group');
    for (let i = 0; i < tags.length; i++) {

        qq += "<li class='QA'>" + tags[i].csKey + "</li>";


    }
    // console.log(qq);
    $("#QA-group").append(qq);


    $(document).on("click", ".QA", function () {
        var chatBot = $("#chat-bot");
        let tagText = $(this).text();
        console.log(tagText);
        chatBot.find('.input').val(tagText);
        putUserText();

    });



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



})