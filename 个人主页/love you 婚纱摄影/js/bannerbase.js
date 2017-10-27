/*
* @Author: dell
* @Date:   2017-10-03 12:29:35
* @Last Modified by:   dell
* @Last Modified time: 2017-10-25 09:22:27
*/
window.onload = function(){
	let span = document.querySelectorAll('.lis>li>.yiru');
	let items = document.querySelectorAll('.lis>li>.items');
	let banner = document.querySelector('.banner');
	let imgbox = document.querySelector('.imgbox');
	let lis = imgbox.querySelectorAll('li');
	let yuan = document.querySelectorAll('.block>span');
	console.log(yuan);
	let flag = true;
	$('html,body').animate({scrollTop:'670px'}, 1500)
	for(let i=0;i<span.length;i++){
		span[i].onmouseover = function(){
			items[i].style.height = `${120}px`;
		}
		span[i].onmouseout = function(){
			items[i].style.height = `${0}px`;
		}
		items[i].onmouseover = function(){
			items[i].style.height = `${120}px`;
		}
		items[i].onmouseout = function(){
			items[i].style.height = `${0}px`;
		}
	}

	for(let i=0;i<yuan.length;i++){
		yuan[i].onmouseover = function(){
			for(let j=0;j<lis.length;j++){
				animate(lis[j],{opacity:0});
				yuan[j].style.background = 'white';
			}
			animate(lis[i],{opacity:1});
			yuan[i].style.background = 'yellow';
			num = i;
		}
	}


	let t = setInterval(move, 3000);
	let num = 0;
	function move(){
		num++;
		if(num == yuan.length){
			num = 0;
		}
		for(let j=0;j<yuan.length;j++){
			animate(lis[j],{opacity:0});
				yuan[j].style.background = 'white';
		}
		animate(lis[num],{opacity:1})
			yuan[num].style.background = 'yellow';
	}

	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move,3000);
	}
}