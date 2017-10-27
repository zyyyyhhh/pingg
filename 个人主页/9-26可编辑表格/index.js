/*
* @Author: dell
* @Date:   2017-09-26 16:09:06
* @Last Modified by:   dell
* @Last Modified time: 2017-09-27 17:00:11
*/
window.onload = function(){
	let table = document.querySelector('tbody');
	let td = document.querySelector('td');
	let dataObj = new storage();
	load();
	function load(){
		let students = dataObj.getData();
		students.forEach((element,index)=>{
			trsadd(element,index);
		})
	}
	
	function trsadd(obj,i){
		let trs = document.createElement('tr');
		trs.id = i;
		trs.innerHTML = `
			<td type='name'>${obj.name}</td>
			<td type='age'>${obj.age}</td>
			<td type='address'>${obj.address}</td>
			<td type='phone'>${obj.phone}</td>
			<td type='sex'>${obj.sex}</td>
			<td class="del"><button>删除</button></td>
		`
		table.appendChild(trs);
	}

	table.ondblclick = function(e){
		let element = e.target;
		if(element.nodeName == 'TD' && element.className != 'del'){
			let values = element.innerText;
			element.innerText = '';
			let input = document.createElement('input');
			input.value = values;
			element.appendChild(input);
			input.onblur = function(){
				let newtext = input.value.trim();
				element.removeChild(input);
				if(!newtext){
					newtext = values;
				}
				element.innerText = newtext;
				let index = element.parentNode.id;
				let key = element.getAttribute('type');
				value = newtext;
				dataObj.update(index,key,value);
			}
		}
		else if(element.nodeName == 'BUTTON'){
			let trs = element.parentNode.parentNode;
			table.removeChild(trs);
			let index = element.parentNode.parentNode.id;
			dataObj.del(index);
			table.innerHTML = '';
			load();
		}
	}


	let add = document.querySelector('.add');
	add.onclick = function(){
		let obj = {name:'',age:'',address:'',phone:'',sex:''}
		trsadd(obj,obj.childElementCount);
		dataObj.push(obj);
	}
}