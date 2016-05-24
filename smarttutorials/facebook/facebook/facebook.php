<?php
/*
 * Site : http:www.smarttutorials.net
 * Author :muni
 * 
 */

require_once 'config.php';

session_start();

 if(!empty($_POST['name'])){
     $name=$_POST['name'];
     mysql_query("INSERT INTO users (id, name)VALUES ('NULL','$name')") or die(mysql_error());
     $_SESSION['name']= $name;
     $_SESSION['id'] = mysql_insert_id();
 }
 
 if(!empty($_SESSION['name'])){
?>
<!DOCTYPE html>
<html class="no-js">
	<head>
		<title>Facebook like button Demo with Responsive Design</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="css/font-awesome.min.css" rel="stylesheet" media="screen">
		<link href="css/font-awesome-ie7.min.css" rel="stylesheet" media="screen">
		<link href="css/style.css" rel="stylesheet" media="screen">

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script src="../../assets/js/html5shiv.js"></script>
		<script src="../../assets/js/respond.min.js"></script>
		<![endif]-->
		<style>
		</style>
	</head>
	<body>
		<div class="container">
			<h1 class="text-center">Facebook Like Button Demo with Responsive Design</h1>
			<hr>
			<div class="col-xs-15 col-sm-10 col-md-10 col-xs-offset-3 col-sm-offset-2 col-md-offset-2">
				<?php $res = mysql_query("select id,count as count from likes") or die(mysql_error());
                while($result=mysql_fetch_array($res)){           
				?>
				<div class="image_container">
					<img src='image/image<?php echo $result['id']; ?>.png' class="img-responsive img-thumbnail"/>
					<p id="like_container<?php echo $result['id']; ?>" class='like_container'>
						<a id="<?php echo $result['id']; ?>" class="btn like" href="javascript:;"> <i class="icon-hand-up"></i> <span class="dis"> Like Me!!</span></a><span class="score"><?php echo $result['count']; ?></span>people like this
					    
					</p>
				</div>
				<?php } ?>
                <input id="name" type='hidden' value="<?php echo $_SESSION['name']; ?>"/>
                <input id="id" type='hidden' value="<?php echo $_SESSION['id']; ?>"/>
			</div>
		</div>
		
		<footer>	    
		    <p class="text-center" id="foot">&copy;<a href="http://smarttutorials.net/" target="_blank">Smart Tutorials </a>2013</p>
		</footer>
		
		<div class="loader"><p>Plaese Wait!!!!</p></div>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="js/jquery-1.10.2.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
		
		<script>
			$(window).load(function() {
				$(".loader").fadeOut("slow");
			});

			$(document).on('mouseover', '.like', function() {
				id = $(this).attr('id');
				name = $('#name').val();
				user_id = $('#id').val();
				container = $(this).closest('.like_container').attr('id');
				$.ajax({
					type : "POST",
					url : "check_name.php",
					data : {
						id : id,
						user_id : user_id,
						flag : 'check_unique'
					},
					async : false,
					success : function(data) {
						if (data > 0) {
							$('#' + container).find('i').removeClass('icon-hand-up').addClass('icon-hand-down');
							$('#' + container).find('.dis').html('Unlike Me!!');
						}
					}
				});

				$('#' + id).mouseleave(function() {
					$('#' + container).find('i').removeClass('icon-hand-down').addClass('icon-hand-up');
					$('#' + container).find('.dis').html('Like Me!!');
				});
			});

			$(document).on('click', '.like', function() {
				id = $(this).attr('id');
				user_id = $('#id').val();
				container = $(this).closest('.like_container').attr('id');
				$.ajax({
					type : "POST",
					url : "check_name.php",
					data : {
						id : id,
						user_id : user_id,
						flag1 : 'update'
					},
					async : false,
					success : function(data) {
						$('#' + container).find('.score').html(data);
					}
				});
			});

		</script>
		
	</body>
</html>

<?php } ?>