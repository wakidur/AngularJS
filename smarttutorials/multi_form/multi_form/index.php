<!DOCTYPE html>
<html>
<head>
<title>Demo HTML5 Border</title>
<meta charset='utf-8'>
<link rel='stylesheet' href='css/style.css'/>
</head>
<h1>Multi Stage HTML5 Form - Demo</h1>
<body>
<div id="border">

<div class="linker">
     <p id="first">First Step</p>
	 <p id="second">Second Step</p>
	 <p id="third">Third Step</p>
	 <p id="fourth">Fourth Step</p>
 </div>
 
 <div id='message'>
     <img id='close' src='images/close.png'/>
     <h2>Mail Sent Successfully!</h2>
     <p>We will be in touch soon.</p>
     <img id='checkmark' src='images/check.png'/>
 </div>
  
<form id="loginForm">
    <div class="align">
    <div id="firstStep">
	<p>First Step</p>
	   <input id="first_name" name="first_name" class="login-field" type="text" placeholder="Enter your first name" value="">
	   <br/>
	   <input id="last_name" name="last_name" class="login-field" type="text" placeholder="Enter your last name" value="">
	    <br/>
	   <input id="email" name="email" class="login-field" type="email" placeholder="Enter your Email" value="">
	    <br/>
	   <button type="button"  id="firstBtn" class="next1">Next</button>
	</div>
	<div id="secondStep">
	  <p>Second Step</p>
	   <input id="phone" name="phone" class="login-field" type="text" placeholder="Enter your phone number" value="">
	    <br/>
	   <input id="street_name" name="street_name" class="login-field" type="text" placeholder="Enter your street name" value="">
	    <br/>
	   <input id="city_name" name="city_name" class="login-field" type="text" placeholder="Enter your city name" value="">
	    <br/>
	   <button type="button" id="secondBtnBack">Previous</button>
	   <button type="button" id="secondBtn" class="next">Next</button>
	   
	 </div>
	<div id="thirdStep">
	  <p>Third Step</p>
	   <input id="state_name" name="state_name" class="login-field" type="text" placeholder="Enter your state name" value="">
	    <br/>
	   <input id="country_name" name="country_name" class="login-field" type="text" placeholder="Enter your country name" value="">
	    <br/>
	   <input id="zip_code" name="zip_code" class="login-field" type="text" placeholder="Enter your zip code" value="">
	    <br/>
	   <button type="button" id="thirdBtnBack">Previous</button> 
	   <button type="button" id="thirdBtn" class="next">Next</button>
	</div>
	
	<div id="fourthStep">
	  <p>Fourth Step</p>
	    <input id="hobbies" name="hobbies" class="login-field" type="text" placeholder="Enter your hobbies" value="">
	    <br/>
	   <input id="book" name="book" class="login-field" type="text" placeholder="Enter your fav book" value="">
	    <br/>
	   <input id="place" name="place" class="login-field" type="text" placeholder="Enter your fav place" value="">
	    <br/>
	   <button type="button" id="fourthBtnBack">Previous</button> 
	   <input type="submit" id='sub_btn' value='Send Mail!' class="next"/>
	</div>
  </div>
</form>
</div>

<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery_main.js"></script>

</body>
</html>