<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>

<style>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.left{
		width: 200px;
		height: 500px;
		border: 1px solid #000;
		float: left;
	}
	.right{
		width: 1000px;
		height: 500px;
		border: 1px solid #000;
		border-left: none;
		float: left;
	}
	iframe{
		width: 1000px;
		height: 500px;
	}
	

</style>
<body>
	<div class="left">
		<ul>
			<li>
				<a href="user.php" target="right">用户管理</a>
			</li>
			<li>
				<a href="lianxiren.php" target="right">联系人管理</a>
			</li>
		</ul>
	</div>
	<div class="right">
		<iframe src="" frameborder="0" name="right"></iframe>
	</div>
</body>
</html>