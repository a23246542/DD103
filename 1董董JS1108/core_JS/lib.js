var total=100;
function sum(a,b,c,d){
	total = 0;
	for(i=0; i<arguments.length;i++){
		total += arguments[i];
	}
	return total;
}