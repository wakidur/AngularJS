<!DOCTYPE html>
<html>
<head>
<title>add remove table rows dynamically using jquery</title>
<meta name="keywords" content="add remove table rows jquery">
<style>
@font-face{font-family: Lobster;src: url('Lobster.otf');}
h1{font-family: Lobster;text-align:center;}
table{border-collapse:collapse;border-radius:25px;width:880px;}
table, td, th{border:1px solid #00BB64;}
tr,input{height:30px;border:1px solid #fff;}
input{text-align:center;}
input:focus{border:1px solid yellow;} 
.space{margin-bottom: 2px;}
#container{margin-left:210px;}
.but{width:270px;background:#00BB64;border:1px solid #00BB64;height:40px;border-radius:3px;color:white;margin-top:10px;margin:0px 0px 0px 290px;}
</style>
<script src='jquery-1.9.1.min.js'></script>
</head>
<body>
<h1>Add Remove Table Rows Dynamically using jQuery</h1>
<div id='container'>
<form id='students' method='post' name='students' action='index.php'>

<table border="1" cellspacing="0">
  <tr>
    <th><input class='check_all' type='checkbox' onclick="select_all()"/></th>
    <th>S. No</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Tamil</th>
    <th>English</th>
    <th>Computer</th>
    <th>Total</th>
  </tr>
  <tr>
    <td><input type='checkbox' class='case'/></td>
    <td><span id='snum'>1.</span></td>
    <td><input type='text' id='first_name' name='first_name[]'/></td>
    <td><input type='text' id='last_name' name='last_name[]'/></td>
    <td><input type='text' id='tamil' name='tamil[]'/></td>
    <td><input type='text' id='english' name='english[]'/> </td>
    <td><input type='text' id='computer' name='computer[]'/></td>
    <td><input type='text' id='total' name='total[]'/> </td>
  </tr>
</table>

<button type="button" class='delete'>- Delete</button>
<button type="button" class='addmore'>+ Add More</button>
<p>
<input type='submit' name='submit' value='submit' class='but'/></p>
</form>
</div>
<script>
$(".delete").on('click', function() {
	$('.case:checkbox:checked').parents("tr").remove();
    $('.check_all').prop("checked", false); 
	check();

});
var i=2;
$(".addmore").on('click',function(){
	count=$('table tr').length;
    var data="<tr><td><input type='checkbox' class='case'/></td><td><span id='snum"+i+"'>"+count+".</span></td>";
    data +="<td><input type='text' id='first_name"+i+"' name='first_name[]'/></td> <td><input type='text' id='last_name"+i+"' name='last_name[]'/></td><td><input type='text' id='tamil"+i+"' name='tamil[]'/></td><td><input type='text' id='english"+i+"' name='english[]'/></td><td><input type='text' id='computer"+i+"' name='computer[]'/></td><td><input type='text' id='total"+i+"' name='total[]'/></td></tr>";
	$('table').append(data);
	i++;
});

function select_all() {
	$('input[class=case]:checkbox').each(function(){ 
		if($('input[class=check_all]:checkbox:checked').length == 0){ 
			$(this).prop("checked", false); 
		} else {
			$(this).prop("checked", true); 
		} 
	});
}

function check(){
	obj=$('table tr').find('span');
	$.each( obj, function( key, value ) {
	id=value.id;
	$('#'+id).html(key+1);
	});
	}

</script>

<?php
if(isset($_POST['submit'])){
print_r($_POST);
}
?>

</body>
</html>