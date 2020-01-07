$(document).ready(function(){
    let divWidth = $('#sliderBoard').width();   //div的寬度
    let imgCount = $('#content li').length;

    $('#content').width(divWidth * imgCount);   //ul的寬度
    $('#content li').width(divWidth);           //li的寬度
    
	for(let i=0; i<imgCount; i++){
        $('#contentButton').append('<li></li>');
    }

    $('#contentButton li:nth-child(1)').addClass('clickMe');

    $('#contentButton li').click(function(){
        let index = $(this).index();

        $('#content').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clickMe');
        $('#contentButton li').not(this).removeClass('clickMe');
    });
});