/*
* @Author: dell
* @Date:   2017-09-27 14:59:18
* @Last Modified by:   dell
* @Last Modified time: 2017-09-27 16:55:20
*/
class storage{
	constructor(){
		this.data = [
			{name:'张1',age:'18',address:'太原',phone:'123456789',sex:'女'},
			{name:'张2',age:'18',address:'太原',phone:'123456789',sex:'女'},
			{name:'张3',age:'18',address:'太原',phone:'123456789',sex:'女'},
			{name:'张4',age:'18',address:'太原',phone:'123456789',sex:'女'}
		]
	}
	_init(){
		// localStorage.setItem('students',JSON.stringify(this.data));
		localStorage.setItem('students',JSON.stringify(this.data));
	}
	getData(){
		let data = localStorage.getItem('students');
		if(!data){
			this._init();
		}
		return this.data = JSON.parse(localStorage.getItem('students'));
	}
	update(index,key,value){
		this.data[index][key] = value;
		this.save();
	}
	del(index){
		this.data.splice(index,1);
		this.save();
	}
	push(obj){
		this.data.push(obj);
		this.save();
	}
	save(){
		localStorage.setItem('students',JSON.stringify(this.data));
	}

}
