<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" href="site-files/favicon.png" type="image/png">
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,400,900" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="site-files/main.css">
	<script type="text/javascript" src="site-files/jquery.min.js"></script>
	<title>About online keyboard test</title>
</head>
<body>

<a href="/" id="back-to">back to test</a>
<h1 class="fnon">About</h1>
<div id="super-separator"></div>
<h2>How to use it</h2>
<p>Just type something on keyboard and see what happens</p>
<h2>Hardware support </h2>
<p>The service works pretty well with the Apple keyboard and regular PC keyboards. With any issues feel free to contact me via … 
Please don’t consider this service as a hardware test tool, as it was made just for fun :)</p>
<a href="http://marat-bakirov.ru">Marat Bakirov</a>
<div class="clean"></div>
<div id="about-keyboard-one"></div>
<div id="about-keyboard-two"></div>
<div id="about-keyboard-three"></div>

<!-- Прелоадер -->
<script type="text/javascript">
	$(window).on('load', function () {
	    setTimeout(function(){
	    	$('#preloader').fadeOut('slow');
	    	$('#load-up').css({'opacity': '1', 'bottom': '0'});
	    	$('#load-down').css({'opacity': '1', 'top': '0'});
	    },1000);
	});
</script>

</body>
</html>