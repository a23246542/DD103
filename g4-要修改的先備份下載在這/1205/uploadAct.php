<?php
// if(is_array($_FILES)) {
//     if(is_uploaded_file($_FILES['userImage']['tmp_name'])) {

//     $sourcePath = $_FILES['userImage']['tmp_name'];
//     $targetPath = "images/".$_FILES['userImage']['name'];
   
//     }
// }


$upload_dir = "images/";  //檢查資料夾存不存在
if( ! file_exists($upload_dir )){
  mkdir($upload_dir);
}

$imgDataStr = $_POST['hidden_data'];//收到convas.toDataURL()送來的資料
$imgDataStr = str_replace('data:image/jpeg;base64,', '', $imgDataStr); //將檔案格式的資訊拿掉
// $imgDataStr = str_replace(' ', '+', $imgDataStr);
$data = base64_decode($imgDataStr);

//準備好要存的filename
$fileName = date("Ymd");  //或time()

$file = $upload_dir . $fileName . ".png";
$success = file_put_contents($file, $data);

echo "跑完";
// echo $success ? $file : 'error';


// if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){

//     $dir = "images";
//     if(file_exists("images")===false){
//         mkdir("images"); //make directory
//     }
 
//      $psn ="8";

//     $fileInfoArr = pathinfo($_FILES["upFile"]["name"]);
//     $fileName = "{$psn}.{$fileInfoArr["extension"]}";

//     $from = $_FILES["upFile"]["tmp_name"];
//     // $to = "images/". $_FILES["upFile"]["name"];  //images/smile.gif
//     $to = "images/$fileName";  //images/smile.gif

//     if(copy($from, $to)==true){
        
//         echo "OK~"; 
//     };
// }
?>