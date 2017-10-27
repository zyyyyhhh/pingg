/*
* @Author: dell
* @Date:   2017-09-25 16:11:15
* @Last Modified by:   dell
* @Last Modified time: 2017-09-25 19:52:19
*/
window.addEventListener('load', function(){
	let big = document.querySelector('div.big');
	let small = document.querySelector('div.small');
	let bimg = document.querySelector('div.big > img');
	// let bili = bimg.offsetWidth / parseInt(window.getComputedStyle(small,null).width);
	let zhe = document.querySelector('.zhe');
	let zhew = zhe.offsetWidth;
	let zheh = zhe.offsetHeight;
	let opacity = document.querySelector('.opacity');
	let leftt = small.offsetWidth,
		topp = small.offsetHeight;
	opacity.addEventListener('mousemove', function(e){
		let lefts =e.offsetX -zhew/2 , tops = e.offsetY-zheh/2;
			zhe.style.left = lefts+'px';
			zhe.style.top = tops+'px';

		let ztop = zhe.offsetTop,
			zleft = zhe.offsetLeft;
			
		let lefts1=e.offsetX*zhew/leftt,tops1=e.offsetY*zheh/topp;
		if(ztop<=0){
			zhe.style.top = 0;
		}
		if(ztop>=topp-zheh){
			zhe.style.top = topp-zheh+'px';
		}
		if(zleft<=0){
			zhe.style.left = 0;
		}
		if(zleft>=leftt-zhew){
			zhe.style.left = leftt-zhew+'px';
		}

		bimg.style.width = leftt*leftt/zhew+'px';
		bimg.style.height = topp*leftt/zheh+'px';

		bimg.style.left = -leftt*lefts1/zhew+'px';
		bimg.style.top = -topp*tops1/zheh+'px';

	})
})