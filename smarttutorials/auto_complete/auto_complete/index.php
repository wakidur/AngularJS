<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Autocomplete - Default functionality</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
<link rel="stylesheet" href='css/style.css'/>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
<script>
$(function() {
$('#tags').keyup(function(){
     var data=$('#tags').val();
	 $.ajax({
	   type:'POST',
	   url:'ajax.php',
	   data:"data="+data,
	   dataType: "json",
	   success: function(msg){
	        var availableTags = msg;
			$("#tags").autocomplete({
			   source: availableTags
			});
	   }
	});
	 
});
});
</script>
</head>
<body>

<h1>AutoComplete Using jQuery, Ajax, PHP and MySQL</h1>
<div class="ui-widget">
<label for="tags">Type Something: </label>
<input id="tags" />
</div>
</body>
</html>