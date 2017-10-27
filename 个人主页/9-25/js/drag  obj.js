/*
* @Author: dell
* @Date:   2017-09-25 15:04:10
* @Last Modified by:   dell
* @Last Modified time: 2017-09-25 15:23:41
*/
class Drag{
	constructor(obj){
		this.obj = obj
	}
	move(){
		let that = this;
		this.obj.addEventListener('mousedown', function(e){
			let left = e.offsetX , top = e.offsetY;
			document.addEventListener('mousemove', fn);
			that.obj.addEventListener('mouseup', function(){
				document.removeEventListener('mousemove',fn);
			})
			function fn(e){
				let lefts = e.clientX-left , tops = e.clientY-top;
				that.obj.style.left = lefts+'px';
				that.obj.style.top = tops+'px';
			}
		})
	}
}