/*
* @Author: dell
* @Date:   2017-09-15 18:04:06
* @Last Modified by:   dell
* @Last Modified time: 2017-09-15 20:23:56
*/
let span = document.getElementById('s');
setInterval(function(){
	if(s.innerText<=0){
		location.replace('login.html');
	}else{
		s.innerText-=1;
	}
},1000);