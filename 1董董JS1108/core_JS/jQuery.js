function $(id){
	var obj = document.getElementById(id);

	obj.html = function (htmlStr){
		obj.innerHTML = htmlStr;
	}

	obj.css = function (attr, value){
		obj.style[attr] = value;
	}
	return obj;
}
