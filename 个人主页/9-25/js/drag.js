/*
* @Author: dell
* @Date:   2017-09-25 11:52:11
* @Last Modified by:   dell
* @Last Modified time: 2017-09-25 15:04:38
*/
window.addEventListener('load', function(){
		let box = document.querySelector('div.box');
		box.addEventListener('mousedown', function(e){
			let left = e.offsetX , top = e.offsetY;
			document.addEventListener('mousemove', fn);
			box.addEventListener('mouseup', function(){
					document.removeEventListener('mousemove', fn)
				})
			function fn(e){
				let lefts = e.clientX , tops = e.clientY;
				box.style.left = lefts-left+'px';
				box.style.top = tops-top+'px';
			}
		})
	})