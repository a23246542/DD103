$(document).ready(function(){
    // alert($('#names li').css('fontSize'));

    $('#smallButton').click(function(){
        changeSize('small');
    });
    $('#bigButton').click(function(){
        changeSize('big');
    });

    function changeSize(size){
        let currentSize = parseInt($('#names li').css('fontSize'));
        
        if(size == 'small'){
            newSize = currentSize - 2;
        }else if(size == 'big'){
            newSize = currentSize + 2;
        }
        $('#names li').css('fontSize',newSize+'px');
    }
});