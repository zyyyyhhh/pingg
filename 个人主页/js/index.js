/*
* @Author: dell
* @Date:   2017-10-27 10:23:59
* @Last Modified by:   dell
* @Last Modified time: 2017-10-27 11:03:23
*/
$(function(){
	let lis = $('li');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			lis[i].style.width = `${200}px`;
		}
		lis[i].onmouseout = function(){
			lis[i].style.width = `${20}px`;
		}
	}	
})