function rand(min,max){
    var x;
    var cut= max-min;
    x= Math.floor(min+Math.random()*(cut+1));  
     return x;
}