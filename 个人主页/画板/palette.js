/*
* @Author: dell
* @Date:   2017-10-10 14:59:57
* @Last Modified by:   dell
* @Last Modified time: 2017-10-12 12:01:49
*/
class palette{
	constructor(canvas,ctx,opacity){
		this.canvas = canvas;
		this.ctx = ctx;
		this.cw = this.canvas.width;
		this.ch = this.canvas.height;
		this.history = [];
		this.style = 'stroke';
		this.lineWidth = 1;
		this.fillStyle = '#000';
		this.strokeStyle = '#000';
		this.lineCap = 'butt';
		this.opacity = opacity;
		this.temp = null;
		// this.eraser1 = eraser1;

	}
	init(){
		this.ctx.lineWidth = this.lineWidth;
		this.ctx.fillStyle = this.fillStyle;
		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.lineCap = this.lineCap;
	}
	line(cx,cy,ox,oy){
		this.ctx.setLineDash([5,0]);
		this.ctx.beginPath();
		this.ctx.moveTo(cx, cy);
		this.ctx.lineTo(ox,oy);
		this.ctx.stroke();
	}
	circle(cx,cy,ox,oy){
		let r = Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
		this.ctx.setLineDash([5,0]);
		this.ctx.beginPath();
		this.ctx.arc(cx,cy,r,0,Math.PI*2);
		this.ctx[this.style]();
	}

	dash(cx,cy,ox,oy){
		this.ctx.setLineDash([5,3]);
		this.ctx.beginPath();
		this.ctx.moveTo(cx,cy);
		this.ctx.lineTo(ox,oy);
		this.ctx.stroke();
	}

	poly(cx,cy,ox,oy,n){
		let rad = Math.PI*2/n;
		let r=Math.sqrt(Math.pow((cx-ox),2)+Math.pow((cy-oy),2));
		this.ctx.beginPath();
		for(let i=0;i<n;i++){
			let x=cx+r*Math.cos(rad*i),
				y=cy+r*Math.sin(rad*i);
			this.ctx.lineTo(x, y);
		}
		this.ctx.closePath();
		this.ctx[this.style]();		
	}
	polyJ(cx,cy,ox,oy,n){
		let rad = Math.PI/n;
		let r=Math.sqrt(Math.pow((cx-ox),2)+Math.pow((cy-oy),2));
		this.ctx.beginPath();
		for(let i=0;i<2*n;i++){
			let r1;
			r1 = i%2 == 0 ? r: r/2.5;
			let x=cx+r1*Math.cos(rad*i),
				y=cy+r1*Math.sin(rad*i);
			this.ctx.lineTo(x, y);
		}
		this.ctx.closePath();
		this.ctx[this.style]();
	}

	chexiao(){
		if(!this.history.length){return};
			this.history.pop();
			this.ctx.clearRect(0,0,this.cw,this.ch);
			this.ctx.putImageData(this.history[this.history.length-1],0,0);
	}

	clearAll(){
		this.ctx.clearRect(0,0,this.cw,this.ch);
		this.history.push(this.ctx.getImageData(0, 0, this.cw, this.ch));
	}

	clear(eraser1,w){
		this.opacity.onmousedown = function(e){
			let ox = e.offsetX , oy = e.offsetY;
			eraser1.style.display = 'block';
			eraser1.style.left = `${ox-w/2}px`;
			eraser1.style.top = `${oy-w/2}px`;

			this.opacity.onmousemove = function(e){
				let cx = e.offsetX , cy = e.offsetY;
				eraser1.style.left = `${cx-w/2}px`;
				eraser1.style.top = `${cy-w/2}px`;
				this.ctx.clearRect(cx-w/2,cy-w/2,w,w);
				
			}.bind(this)



			this.opacity.onmouseup = function(){
				this.history.push(this.ctx.getImageData(0, 0, this.cw, this.ch));
				eraser1.style.display = 'none';
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)
	}


	font(){
		let that = this;
		let lefts,tops;
		this.opacity.onmousedown = function(e){
			that.opacity.onmousedown = null;
			let cx = e.offsetX , cy = e.offsetY;
			let divs = document.createElement('div');
			divs.contentEditable = true;
			divs.style.cssText = `
				width:100px;height:30px;border:1px dashed #000;
				position:absolute;top:${cy}px;left:${cx}px;cursor:move;
			`;
			this.appendChild(divs);

			divs.onmousedown = function(e){
				let cx = e.clientX , cy = e.clientY;
				let left = divs.offsetLeft , top = divs.offsetTop;
				that.opacity.onmousemove = function(e){
					let ox = e.clientX , oy = e.clientY;
					lefts = left + ox - cx;
					tops = top + oy - cy;
					divs.style.left = `${lefts}px`;
					divs.style.top = `${tops}px`;
					if(lefts<=0){
						lefts = 0;
					}
					if(lefts>=that.cw-100){
						lefts = that.cw-100;
					}
				}
				divs.onmouseup = function(){
					that.opacity.onmousemove = null;
					this.onmouseup = null;
				}
			}
			divs.onblur = function(){
				let value = this.innerText;
				that.opacity.removeChild(divs);
				that.ctx.font = 'bold 20px sans-serif';
				that.ctx.textAlign = 'center';
				that.ctx.textBaseline = 'middle';
				that.ctx.fillText(value,lefts,tops);
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));

			}
		}
	}


	 clip(obj){
        // 选区
        let that = this;
        let minX , minY ,w , h ;
        this.opacity.onmousedown=function(e){
            let cx = e.offsetX , cy = e.offsetY;
            obj.style.display = 'block';
            obj.style.width = 0;
            obj.style.height = 0;
            that.opacity.onmousemove = function(e){
                let ox = e.offsetX , oy = e.offsetY;
                w = Math.abs(cx-ox) , h = Math.abs(cy-oy);
                // 起始位置等于较小值
                minX = ox >= cx ? cx : ox ;
                minY = oy >= cy ? cy : oy ;
                obj.style.left = `${minX}px`;
                obj.style.top = `${minY}px`;
                obj.style.width = `${w}px`;
                obj.style.height = `${h}px`;
            }
            that.opacity.onmouseup = function(){
                // 获取选区
                that.temp = that.ctx.getImageData(minX,minY,w,h);
                // 清除
                that.ctx.clearRect(minX,minY,w,h);
                // 产生历史记录
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch ));
                // 再放入
                that.ctx.putImageData(that.temp,minX,minY);
                // obj.style.display = 'none';
                that.opacity.onmousemove = null;
                that.opacity.onmouseup = null;
                that.drag(minX,minY,obj);
            }
        }
    }
    drag(x,y,obj){
        let that = this;
        this.opacity.onmousedown = function(e){
            let cx = e.offsetX , cy = e.offsetY;
            e.preventDefault();
            that.opacity.onmousemove = function(e){
                e.preventDefault();
                let ox = e.offsetX , oy = e.offsetY;
                let lefts = x + ox - cx ,
                    tops = y + oy - cy;
                obj.style.left = `${lefts}px`;
                obj.style.top = `${tops}px`;
                that.ctx.clearRect(0,0,that.cw,that.ch);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0)
                }
                that.ctx.putImageData(that.temp,lefts,tops);
            }
            that.opacity.onmouseup = function(){
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch ));
                that.temp = null;
                obj.style.display = 'none';
                that.opacity.onmousemove = null;
                that.opacity.onmouseup = null;

            }
        }
    }


	pencil(){
		this.opacity.onmousedown=function(e){
			let cx =e.offsetX,cy=e.offsetY;
			this.ctx.setLineDash([5,0]);
			this.ctx.beginPath();
			this.ctx.moveTo(cx,cy);
			this.opacity.onmousemove=function(e){
				this.init();
				let ox =e.offsetX,oy=e.offsetY;
				this.ctx.clearRect(0,0,this.cw,this.ch);
				if(this.history.length){
					this.ctx.putImageData(this.history[this.history.length-1],0,0)
				}
				this.ctx.lineTo(ox,oy);
				this.ctx.stroke();
			}.bind(this)
			this.opacity.onmouseup=function(){
				this.history.push(this.ctx.getImageData(0, 0, this.cw, this.ch));
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)

	}
	draw(type,n){
		this.opacity.onmousedown = function(e){
			let cx = e.offsetX , cy = e.offsetY;
			this.opacity.onmousemove = function(e){
				this.init();
				let ox = e.offsetX , oy = e.offsetY;
				this.ctx.clearRect(0, 0, this.cw, this.ch);
				if(this.history.length){
					this.ctx.putImageData(this.history[this.history.length-1],0,0)
				}
				this[type](cx,cy,ox,oy,n);
			}.bind(this)
			this.opacity.onmouseup = function(){
				this.history.push(this.ctx.getImageData(0, 0, this.cw, this.ch));
				this.opacity.onmousemove = null;
				this.opacity.onmouseup = null;
			}.bind(this)

		}.bind(this)
	}
}