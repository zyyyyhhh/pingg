/*
* @Author: dell
* @Date:   2017-09-27 18:28:50
* @Last Modified by:   dell
* @Last Modified time: 2017-10-25 18:51:31
*/
window.addEventListener('load', function(){
	let aside = document.querySelector('.aside');
	let tips = document.querySelector('.tips');
	let dl = document.querySelector('dl');
	let info = [
		{name:'张丹颖',tell:'14135108518',py:'zhangdanying'},
		{name:'许壮壮',tell:'1158108512',py:'xuzhuangzhuang'},
		{name:'王莎',tell:'13632578519',py:'wangsha'},
		{name:'曹瑞芳',tell:'18435368525',py:'caoruifang'},
		{name:'胡梅',tell:'58935698536',py:'humei'},
		{name:'冯好好',tell:'16435108253',py:'fenghaohao'},
		{name:'大胖',tell:'18435108547',py:'dapang'},
		{name:'慧姐',tell:'164585108569',py:'huijie'},
		{name:'冯好好',tell:'14896108253',py:'fenghaohao'},
		{name:'大胖',tell:'15435158947',py:'dapang'},
		{name:'慧姐',tell:'1235108569',py:'huijie'},
		{name:'杜林',tell:'18695473659',py:'dulin'},
		{name:'杜林',tell:'18695473659',py:'dulin'},
		{name:'娜娜',tell:'45362897561',py:'nana'},
	]


	let search = document.querySelector('header>input');
	search.onkeyup = function(){
		let value = this.value.trim();
		let data = info.filter(function(element){
			return element.py.includes(value) || element.name.includes(value)
			 || element.tell.includes(value);
		})
		render(data);
	}
	
	render(info);


	let dts = document.querySelectorAll('dt');
	console.log(dts)
	let arr = [];
	let heights = document.querySelector('header').offsetHeight;
	dts.forEach(element=>arr.push(element.offsetTop));

	window.onscroll = function(){
		let st = document.documentElement.scrollTop;
		
		arr.forEach((element,index)=>{
			if(st+heights>=element){
				tips.innerText = dts[index].innerText;
			}
		})
	}
	function render(data){
		aside.innerHTML = '';
		dl.innerHTML = '';
		let obj = {};
		data.forEach(function(element){
			let first = element.py.charAt(0).toUpperCase();
			if(!obj[first]){
				obj[first] = [];
			}
			obj[first].push(element);
		})

		let char = Object.keys(obj).sort();
		tips.innerText = char[0]
			char.forEach(element=>{
				dl.innerHTML+=`
					<dt>${element}</dt>
				`	
				aside.innerHTML+=`
					<li>${element}</li>
				`
				obj[element].forEach(value=>{
					dl.innerHTML+=`
						<dd><a href="tel:${value.tell}">${value.name}</a></dd>
					`
			})
		})
		aside.style.marginTop = `${-aside.offsetHeight/2}px`;
	}
})