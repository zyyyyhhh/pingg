/*
* @Author: dell
* @Date:   2017-09-29 15:53:35
* @Last Modified by:   dell
* @Last Modified time: 2017-09-29 18:48:14
*/
// 划线
// 
// 
// 

function snake(){
	this.sence = document.querySelector('.sence');
	this.snake = ['7_1','8_1','9_1'];
	this.direction = 40;
	this.food = '';
	this.flag = {'7_1':true,'8_1':true,'9_1':true};
}
snake.prototype = {
	start:function(){
		this.drawline();
		this.drawsnake();
		this.move();
		this.key();
		// this.dropfood();
	},
	drawline:function(){
		for(let i=0;i<20;i++){
			for(let j=0;j<20;j++){
				this.sence.innerHTML += `
					<div class="block" id=${i}_${j}></div>`;
			}
		}
	},
	drawsnake:function(){
		this.snake.forEach(element=>{
			document.getElementById(element).classList.add('hot');
		})
	},
	move:function(){
		// 加头   去尾
		let that = this;
		this.t = setInterval(function(){
			let oldt = that.snake[that.snake.length-1];
			let arr = oldt.split('_');
			let newt = '';
			if(that.direction == 37){
				newt = `${arr[0]*1}_${arr[1]*1-1}`;
			}else if(that.direction == 38){
				newt = `${arr[0]*1-1}_${arr[1]*1}`;
			}
			else if(that.direction == 39){
				newt = `${arr[0]*1}_${arr[1]*1+1}`;
			}
			else if(that.direction == 40){
				newt = `${arr[0]*1+1}_${arr[1]*1}`;
			}

			if(newt[1]<0 || newt[1]>19){
				clearInterval(that.t);
				alert('gameover');
			}

			// 
			that.snake.push(newt);
			that.flag[newt] = true;
			let weiba = that.snake.shift();
			delete that.flag[weiba];
			document.getElementById(weiba).classList.remove('hot');
			that.drawsnake();
		},1000);
		
	},
	key:function(){
		document.onkeydown = function(e){
			let keycode = e.keyCode;
			if(Math.abs(keycode-this.direction) == 2){
				return;
			}
			this.direction = keycode;
		}.bind(this);
	},

	dropfood:function(){
		let x = Math.floor(Math.random()*19);
		let y = Math.floor(Math.random()*19);
		this.food = `${x}_${y}`;
		do{
			x = Math.floor(Math.random()*19);
			y = Math.floor(Math.random()*19);
		}while(this.food = `${x}_${y}`);

		document.getElementById(this.food).style.color = 'red';
	}
}