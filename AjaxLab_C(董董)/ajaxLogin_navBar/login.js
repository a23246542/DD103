function $id(id){
  return document.getElementById(id);
} 

function showLoginForm(){
  //檢查登入bar面版上 spanLogin 的字是登入或登出
  //如果是登入，就顯示登入用的燈箱(lightBox)
  var spanLogin = $id("spanLogin");
  var lightBox = $id("lightBox");
  if(spanLogin.innerHTML == "登入"){
     lightBox.style.display="";
  }else{//是登出
        //將登入bar面版上，登入者資料清空 
        //spanLogin的字改成登入
        //將頁面上的使用者資料清掉
        spanLogin.innerHTML = "登入";
        $id("memName").innerHTML = "&nbsp;";
        $id("memId").value="";
        $id("memPsw").value="";
        //-------------------------回Server端清除session資料
        let xhr = new XMLHttpRequest();
        xhr.onload=function(){
          if( xhr.status != 200){
            alert(xhr.status);
          }
        }
        xhr.open("get", "ajaxLogout.php", true);
        xhr.send(null);
  } 
}//showLoginForm

function sendForm(){
  var memId = $id("memId").value;
  var memPsw = $id("memPsw").value;
  //------------------回Server端檢查帳密是否正確
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if( xhr.status == 200){
      //--------------
      let member = JSON.parse(xhr.responseText);
      if( member.memName ){ //登入成功
        //登入成功
        //登入bar面版上 memName 的字改成會員匿稱
        $id("memName").innerHTML = member.memName;
        //登入bar面版上 spanLogin 的字改成登出
        $id("spanLogin").innerHTML = "登出";
        //將登入表單上的資料清空，並隱藏起來
        $id("lightBox").style.display = "none"; 
      }else{//查無此人
        alert("帳密錯誤");
      }
      //--------------
    }else{
      alert(xhr.status);
    }
  }
  let url = `ajaxLogin.php?memId=${memId}&memPsw=${memPsw}`;
  xhr.open("get", url, true);
  xhr.send( null);
}

function cancelLogin(){
  //將登入表單上的資料清空，並將燈箱隱藏起來
  $id("memId").value="";
  $id("memPsw").value="";
  $id("lightBox").style.display = "none";
}

 //window.onload

window.addEventListener("load", function  (){

  //---------------------------------------------------------註冊燈箱的功能
  //===設定spanLogin.onclick 事件處理程序是 showLoginForm
  $id("spanLogin").onclick = showLoginForm;
  //===設定btnLogin.onclick 事件處理程序是 sendForm
  $id("btnLogin").onclick = sendForm;
  //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
  $id("btnLoginCancel").onclick = cancelLogin;

  //---------------------------------------------------------檢查是否已登入
  let xhr = new XMLHttpRequest();
  xhr.onload=function(){
    let member = JSON.parse(xhr.responseText);
    if(member.memName){
      $id("memName").innerHTML = member.memName;
      $id("spanLogin").innerHTML = "登出";
    }
  }
  xhr.open("get", "getLoginInfo.php", true);
  xhr.send(null);
}, false);	