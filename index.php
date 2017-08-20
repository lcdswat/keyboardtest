<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" href="/site-files/favicon.png" type="image/png">
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,400,900" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="/site-files/main.css">
	<script type="text/javascript" src="/site-files/jquery.min.js"></script>
	<script type="text/javascript" src="/site-files/keys.js"></script>
	<title>Online keyboard test</title>
</head>
<body>

<h1>Online<br>keyboard test</h1>
<span id="cursor">
	Press any key<br>
	<span id="out"></span>
</span>

<div class="clean"></div>

<br>
<span id="A1243">A1243</span>
<span id="generic-pc">Generic PC</span>

<div id="generic-pc-box"></div>
<div id="A1243-box"></div>



<span id="stay-pressed">Stay pressed</span>
<label class="switch">
	<input type="checkbox" checked="checked" id="test">
	<span class="slider round"></span>
</label>


<script type="text/javascript">
$(document).ready(function() {
	$('#A1243-box').load('/site-files/A1243.svg');
	$("#A1243").click(function(){
		$('#A1243-box').load('/site-files/A1243.svg');
	});
	$("#generic-pc").click(function(){
		$('#A1243-box').load('/site-files/Generic-PC.svg');
	});
});
</script>



</body>
</html>