/*
* @Author: dell
* @Date:   2017-10-26 14:29:50
* @Last Modified by:   dell
* @Last Modified time: 2017-10-26 16:57:16
*/
$(function(){
	let hei = {};
	let bai = {};
	for(let i=0;i<15;i++){
		$('<div>').addClass('hang').appendTo('.qipan');
		$('<span>').addClass('shu').appendTo('.qipan');
		for(let j=0;j<15;j++){
			$('<li>').addClass('qizi').attr('id',i+'_'+j)
			.data('pos',{x:i,y:j}).appendTo('.qipan');
		}
	}

	let flag = true;
	$('.qipan .qizi').on('click',function(){
		if($(this).hasClass('hei') || $(this).hasClass('bai')){
			return;
		}
 		let data = $(this).data('pos');
		if(flag){
			$(this).addClass('hei');
			hei[data.x+'_'+data.y] = true;
			if(panduan(data,hei)>=5){
				$('.qipan .qizi').off();
			};
		}else{
			$(this).addClass('bai');
			hei[data.x+'_'+data.y] = true;
			if(panduan(data,bai)>=5){
				$('.qipan .qizi').off();
			};
		}
		flag = !flag;
	})


	function panduan(pos,obj){
		let rows = 0,cols = 1,zx = 1,yx = 1;
		let i = pos.x , j = pos.y;
		  // 横右
        while(obj[i+'_'+j]){
           rows++;
           j++;
        }
        // 横左
        j = pos.y-1;   
        while(obj[i+'_'+j]){
            rows++;
            j--;
        }
        // 竖下
        i = pos.x,j=pos.y;
        while(obj[i+'_'+j]){
            cols++;
            i++;
        }
        // 竖上
        i = pos.x-1;  
        while(obj[i+'_'+j]){
            cols++;
            i--;
        }
        // 左斜 上
        i = pos.x,j=pos.y;
        while(obj[i+'_'+j]){
            zx++;
            i--;
            j++;
        }
        // 左斜 下
        i = pos.x+1 , j=pos.y-1;   
        while(obj[i+'_'+j]){
            zx++;
            i++;
            j--;
        }

        // 右斜 上
        i = pos.x,j=pos.y;
        while(obj[i+'_'+j]){
            yx++;
            i--;
            j--;
        }
        // 左斜 下
        i = pos.x+1 , j=pos.y+1; 
        while(obj[i+'_'+j]){
            zx++;
            i++;
            j++;
        }
        return Math.max(rows,cols,zx,yx);
	}
})