function doFirst(){
	//先跟HTML畫面產生關聯,再建事件聆聽的功能
	document.getElementById('theForm').onsubmit = addTask;
}

var tasks = [];

function addTask(){
	var task = document.getElementById('task');
	var feedback = '';

	if(task.value){
		tasks.push(task.value);

		feedback += '<h2>To-Do List</h2>';
		feedback += '<ol><li>';
			feedback += tasks.join('</li><li>');
		feedback += '</li></ol>';
	}
	document.getElementById('feedback').innerHTML = feedback;
	// console.log(tasks.length)
	return false;
}
window.addEventListener('load',doFirst);