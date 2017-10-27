/*
* @Author: dell
* @Date:   2017-09-15 17:16:38
* @Last Modified by:   dell
* @Last Modified time: 2017-09-15 20:29:09
*/
let u = document.getElementById('user')
let p = document.getElementById('pass')
let button = document.getElementById('button')

button.onclick = function(){
	if(u.value =='zhangsan' && p.value == '123456'){
		alert('success');
	}else{
		location.replace('error.html');
	}
}