<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
	<title>Mail Attachment PHP Script Demo Page</title>
	<link rel="stylesheet" href="css/style.css"/>
	
</head>
<body>
    <div class="title">
	    <h1>Mail Demo Page</h1>
	</div>
	<div class="mail">
		<div id='message1'>
		 <img id='close' src='images/close.png'/>
		 <h2>Mail Sent Successfully!</h2>
		 <p>We will be in touch soon.</p>
		 <img id='checkmark' src='images/check.png'/>
		</div>
	  <form action='mail.php' method="post" id='mailForm' enctype='multipart/form-data'>
	    <table>
		     <tr>
			    <td class="label"> Name : </td>
				<td><input type="text" id="name" name="name" class="form-input" placeholder='User Name'/></td>
				<td class="status"></td>
			 </tr>
			 <tr>
			    <td class="label"> E-mail : </td>
				<td><input type="email" id="email" name="email" class="form-input" placeholder='E-Mail'/></td>
				<td class="status"></td>
			 </tr>
			 <tr>
			    <td class="label"> From E-mail : </td>
				<td><input type="email" id="femail" name="femail" class="form-input" placeholder='From E-Mail'/></td>
				<td class="status"></td>
			 </tr>
			 
			 <tr>
			    <td class="label"> Phone : </td>
				<td><input type="tel" id="phone" name="phone" class="form-input" placeholder='Phone'/></td>
				<td class="status"></td>
			 </tr>
			 <tr>
			    <td class="label"> Image : </td>
				<td><input type="file" id="image" name="image" class="form-input" placeholder='Image' accept="image/*"></td>
				<td class="status"></td>
			 </tr>
			 
			 <tr>
			    <td class="label"> Message : </td>
				<td><textarea cols="27" rows="5" id="message" name="message" placeholder='Message'></textarea></td>
				<td class="status"></td>
			 </tr>			 
			 <tr>
			    <td colspan="2"> <input type="submit" value="Send Mail!" id='submit_btn' name="submit_btn" class="submit_btn"/></td>
			 </tr>
		</table>
	</form>
 </div>
<div id="status"></div> 	
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script>
(function() {
	$('form').ajaxForm({
		beforeSubmit: function() {
			//return $('#mailForm').validate().form();
			$("#mailForm").validate({
			     rules: {
					name: {
					   required: true,
					   minlength : 3
					},
					email:{ 
					   required: true,
					   email: true
					},
					phone: { 
					  required : true,
					  number:true,	
					  minlength : 10,
				      maxlength : 11
					},
					image: "required",
					message: "required",
					femail:{ 
					   required: true,
					   email: true
					}
			     },
			     messages: {
						name: {
						   required:"Please enter your name",
						   minlength: "Please enter a valid name"
						},
						email:{ 
						   required: "Please enter your email",
						   minlength: "Please enter a valid email address",
						},
						phone: { 
						   required: "Please enter your phone number",
						   minlength: "Please enter your valid phone number",
						   maxlength: "Please enter your valid phone number"
						},
						image: "Please Choose your image",
						message: "Please enter your message",
						femail: { 
						   required: "Please enter your email",
						   minlength: "Please enter a valid email address",
						}
			     },
			     debug: true,
				 errorElement: "em",
				 errorContainer: $("#warning, #summary"),
				 errorPlacement: function(error, element) {
					error.appendTo( element.parent("td").next("td") );
				 },
				 success: function(label) {
					label.text("ok!").addClass("success");
				 }	
			 });
			 var flag= $('#mailForm').valid();
			 if(!flag){
                 return false;
		     }
	    },
	    success: function(msg) {
	       alert(msg);
	       //$("#mailForm").addClass("hide");
 		   //$("#message1").show();
	    },
		complete: function(xhr) {
			$("#mailForm").addClass("hide");
			$("#message1").show();
			$('#status').html(xhr.responseText);	
		}
	}); 
	$('#close').click(function(){ 
	  $('#message1').hide();
  	  $("#mailForm").removeClass("hide");
  	  $('input[type=text],input[type=email],textarea,input[type=tel],input[type=file]').val('');
  	  location.reload();
     });
})();       
</script>
</body>
</html>