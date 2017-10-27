<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>可编辑表格</title>
	<script src="../../table/js/jquery-3.2.1.js"></script>
</head>

<style>
	
	*{
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style: none;
	}
	.box{
		width: 600px;
		height: auto;
		margin: 20px auto;
		border: 1px solid #000;
		padding: 10px;
		overflow: hidden;
		position: relative;
	}
	.box>h3{
		text-align: center;
		line-height: 40px;
		font-size: 24px;
		font-family: sans-serif;
	}
	table{
		margin: 0 auto;
		border-collapse: collapse;
		width: 90%;
		text-align: center;
		margin-bottom: 25px;
	}
	td,tr,th{
		border: 1px solid #000;
		padding: 5px;
	}
	button.del1{
		border-radius: 4px;
		border: none;
		outline: none;
		padding: 6px;
		background: skyblue;
		cursor: pointer;
	}
	div>.del1{
		float: right;
		margin-right: 41px;
	}
	.add{
		border-radius: 4px;
		border: none;
		outline: none;
		padding: 6px;
		background: skyblue;
		cursor: pointer;
		position: absolute;
		bottom: 0px;
		right: 55px;
	}
	.tips{
		width: 0;
		height: 2px;
		background: #ff6700;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
<body>
	<div class="tips"></div>
	<div class="box">
	<h3>联系人信息</h3>
	<table>
		<thead>
		<tr>
			<th>姓名</th>
			<th>电话</th>
			<th>拼音</th>
			<th>操作</th>
		</tr>
		<button class="add">添加</button>
		</thead>
		<tbody></tbody>
	</table>
		
	</div>
</body>
</html>

<script>
	$(function(){
	let tbody=$('tbody');
	$.ajax({
		type:'GET', 
		url:'address list.php',
		dataType:'json',
		success:function(data){
			// console.log(data)
			$.each(data,function(index,element){
				createTr(element);
			});
		}
	});
	tbody.on('dblclick','td[class!=del]',function(e){
		let element = $(e.target);
		let oval = element.text();
		element.text('');
		$('<input>').appendTo(element).val(oval).blur(function(){
			let nval = $(this).val();
			$(this).remove();
			element.text(nval);
			let info = element.attr('type');
			let id = element.closest('tr').attr('id');
			$.ajax({
				url:'../../table/update.php',
				data:{value:nval,info,id},
				success:function(data){

				}
			})
		})
	})

	let tips = $('.tips');
	console.log(tips)
	$(document).ajaxStart(function() {
		tips.animate({width:'80%'});
	});
	$(document).ajaxComplete(function() {
		tips.animate({width:'100%'}).queue(function(){
			$(this).width(0);
		});		
	});
	


	tbody.on('click','button',function(e){
		let element = $(e.target);
		let id = element.closest('tr').attr('id');
		$.ajax({
			data:{id},
			url:'../../table/delete.php',
			success:function(data){
				if(data == 1){
					element.closest('tr').remove();
				}else if(data == 0){
					alert('删除失败！');
				}
			}
		})
	})

	let add = $('button.add');
	add.on('click',function(){
		$.ajax({
			url:'../../table/insert.php',
			success:function(data){
				createTr({id:data,name:'',age:'',sex:'',classes:'',address:'',phone:''});
			}
		})
	})

	
	function createTr(data){
		tbody.html(function(index,value){
			return value + `<tr id = "${data.id}">
				<td type='name'>${data.name}</td>
				<td type='phone'>${data.phone}</td>
				<td type='pinyin'>${data.pinyin}</td>
				<td class = "del"><button class="del1">删除</button></td>
			</tr>`
		});
	}
})

</script>