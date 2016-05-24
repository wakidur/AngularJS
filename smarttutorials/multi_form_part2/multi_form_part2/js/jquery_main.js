$(document).ready(function(){
	$("#sub_btn").click(function(e){
	   if($("#loginForm").valid()){
		$.ajax({  
	    	  type: "POST", 
	    	  url: "show.php",  
	    	  data: $('#loginForm').serialize(),  
	    	  success: function(msg) {  
	    		  alert(msg);
	    		  $("#loginForm").addClass("hide");
	    		  $("#message").show();
	    	  } 
		      
	    	}); 
		   $('#close').click(function(){ 
		      $('#message').hide();
	    	  $("#loginForm").removeClass("hide");
	    	  $('input[type=text],input[type=email]').val('');
	    	  location.reload();
	       });
		}   
		return false;
	 });
	
	
     $("#firstBtn").click(function(){
	       if($("#loginForm").valid()){
			$("#firstStep").slideUp();
			$("#secondStep").slideDown();
			
			$("#phone").rules("add", {
					 required: true,
					 number: true,
					 minlength: 10,
					 maxlength: 12,
					 messages: {
					   required: "Please Enter Your Phone Number",
					   number: "Please Enter valid Phone Number"
					 }
		    });
			
			$("#street_name").rules("add", {
					 required: true,
					 minlength: 5,
					 messages: {
					   required: "Please Enter Your Street Name"
					 }
		    });
			$("#city_name").rules("add", {
					 required: true,
					 minlength: 5,
					 messages: {
					   required: "Please Enter Your City Name"
					 }
		    });
			
			/*var original=$(',#street_name,#city_name').attr('class')
			$('#phone,#street_name,#city_name').attr('class','required '+ original);*/
		  }	
	 });
	 $("#secondBtn").click(function(){
	    if($("#loginForm").valid()){
	     $("#thirdStep").slideDown();
		 $("#secondStep").slideUp();
		 
		 $("#state_name").rules("add", {
					 required: true,
					 minlength: 5,
					 messages: {
					   required: "Please Enter Your State Name"
					 }
		   });
		   
		   $("#country_name").rules("add", {
					 required: true,
					 minlength: 5,
					 messages: {
					   required: "Please Enter Your Country Name"
					 }
		   });
		   
		   $("#zip_code").rules("add", {
					 required: true,
					 number: true,
					 minlength: 6,
					 messages: {
					   required: "Please Enter Your Zip Code",
					   number: "Please Enter valid Zip Code"
					 }
		    });
		 
		 /*var original=$('#state_name,#country_name,#zip_code').attr('class')
		 $('#state_name,#country_name,#zip_code').attr('class','required '+ original);*/
	    } 
	 });
	 
	 $("#thirdBtn").click(function(){
	    if($("#loginForm").valid()){
	     $("#fourthStep").slideDown();
		 $("#thirdStep").slideUp();
		 
		 $("#hobbies").rules("add", {
					 required: true,
					 minlength: 10,
					 messages: {
					   required: "Please Enter Your hobbies"
					 }
		   });
		   
		   $("#book").rules("add", {
					 required: true,
					 minlength: 10,
					 messages: {
					   required: "Please Enter Your Favourite Book Name"
					 }
		   });
		   
		   $("#place").rules("add", {
					 required: true,
					 minlength: 10,
					 messages: {
					   required: "Please Enter Your Favourite Place Name"
					 }
		   });
		 
		 
		 /*var original=$('#hobbies,#book,#place').attr('class')
		 $('#hobbies,#book,#place').attr('class','required '+ original);*/
		} 
	});
	 
	 
	 $("#fourthBtnBack").click(function(){
	     $("#fourthStep").slideUp();
		 $("#thirdStep").slideDown();
	 });
	 $("#thirdBtnBack").click(function(){
	     $("#thirdStep").slideUp();
		 $("#secondStep").slideDown();
	 });
	 $("#secondBtnBack").click(function(){
	     $("#secondStep").slideUp();
		 $("#firstStep").slideDown();
	 }); 
	 $("#first").click(function(){
	     $("#firstStep").show();
		 $("#secondStep,#thirdStep,#fourthStep").hide();	 
	 });
	 $("#second").click(function(){
	     $("#thirdStep,#firstStep,#fourthStep").hide();
		 $("#secondStep").show();
	 });
	 
	 $("#third").click(function(){
	     $("#fourthStep,#firstStep,#secondStep").hide();
		 $("#thirdStep").show();
	 });
	 $("#fourth").click(function(){
	     $("#fourthStep").show();
		 $("#thirdStep,#firstStep,#secondStep").hide();
	 });
	 
	 
	 
	 
	 
	 
});