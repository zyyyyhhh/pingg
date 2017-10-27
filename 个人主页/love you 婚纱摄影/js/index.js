/*
* @Author: dell
* @Date:   2017-10-02 19:43:12
* @Last Modified by:   dell
* @Last Modified time: 2017-10-09 10:52:44
*/
window.onload = function(){
	let span = document.querySelectorAll('.lis>li>.yiru');
	let items = document.querySelectorAll('.lis>li>.items');
	let banner = document.querySelector('.banner');
	let imgbox = document.querySelector('.imgbox');
	let lis = imgbox.querySelectorAll('li');
	let yuan = document.querySelectorAll('.block>span');
	let flag = true;
	let musi = document.querySelector('.musi');
	let xiawei = document.querySelector('.musi>.xiawei');
	let xialis = xiawei.querySelectorAll('li');
	let san = document.querySelectorAll('.musi>.san>li');
	let musi1 = document.querySelector('.musi1');
	let xiawei1 = document.querySelector('.musi1>.xiawei');
	let xialis1 = xiawei1.querySelectorAll('li');
	let san1 = document.querySelectorAll('.musi1>.san>li');
	// let change = document.querySelectorAll('.lis>li>span');
	// let is = document.querySelectorAll('.lis>li>i');
	// console.log(is);



	/*for(let i=1;i<change.length;i++){
		change[i].onmouseover = function(){
			for(let j=0;j<is.length;j++){
				is[j].style.display = 'none';
			}
			change[i].style.display = 'none';
			is[i].style.display = 'block';
		}
	}*/


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

	yuan.onmouseover = function(){
		clearInterval(t);
	}
	yuan.onmouseout = function(){
		t = setInterval(move,3000);
	}


	for(let i=0;i<san.length;i++){
		san[i].onmouseover = function(){
			for(let j=0;j<xialis.length;j++){
				animate(xialis[j],{opacity:0});
				san[j].style.background = '#7edab2';
			}
			animate(xialis[i],{opacity:1});
			san[i].style.background = '#383b4a';
			num1 = i;
		}
	}

	let t1 = setInterval(fn, 3000);
	let num1 = 0;
	function fn(){
		num1++;
		if(num1 == san.length){
			num1 = 0;
		}
		for(let j=0;j<xialis.length;j++){
			animate(xialis[j],{opacity:0});
			san[j].style.background = '#7edab2';
		}
		animate(xialis[num1],{opacity:1});
		san[num1].style.background = '#383b4a';
	}

	musi.onmouseover = function(){
		clearInterval(t1);
	}
	musi.onmouseout = function(){
		t1 = setTimeout(fn, 3000);
	}



	for(let i=0;i<san1.length;i++){
		san1[i].onmouseover = function(){
			for(let j=0;j<xialis1.length;j++){
				animate(xialis1[j],{opacity:0});
				san1[j].style.background = '#7edab2';
			}
			animate(xialis1[i],{opacity:1});
			san1[i].style.background = '#383b4a';
			num2 = i;
		}
	}

	let t2 = setInterval(fn1, 3000);
	let num2 = 0;
	function fn1(){
		num2++;
		if(num2 == san1.length){
			num2 = 0;
		}
		for(let j=0;j<xialis1.length;j++){
			animate(xialis1[j],{opacity:0});
			san1[j].style.background = '#7edab2';
		}
		animate(xialis1[num2],{opacity:1});
		san1[num2].style.background = '#383b4a';
	}

	musi1.onmouseover = function(){
		clearInterval(t2);
	}
	musi1.onmouseout = function(){
		t2 = setinterval(fn1, 3000);
	}
}