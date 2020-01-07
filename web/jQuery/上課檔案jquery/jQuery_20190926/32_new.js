$(document).ready(function(){
   $('#sliderBoard').each(function(){
       let selfHeight = $(this).innerHeight();      //播放顯示區的高度(500)
       let listHeight = $(this).find('ul').find('li').outerHeight();  //li的高度(18)
       let listCount = $(this).find('ul').find('li').length;
       let sliderHeight = listHeight * listCount;   //li整體的高度(180)

       $(this).find('ul').wrapAll('<div class="sliderWrap"/>');
       let sliderWrap =  $(this).find('.sliderWrap');

       if(sliderHeight > selfHeight){
            $(this).find('ul').css({height:sliderHeight}).clone().appendTo(sliderWrap);
            sliderWrap.css({height: sliderHeight * 2});

            move();

            function move(){
                // $().animate({properties},duration,easing,function());
                sliderWrap.animate({
                    top: sliderHeight * -1 + 'px',
                },1000 * listCount,'linear',function(){
                    move();
                });
            }
            
            
       }
   });
});

