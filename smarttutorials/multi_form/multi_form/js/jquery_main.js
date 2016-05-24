$(document).ready(function(){
	
	$("#sub_btn").click(function(e){
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
		return false;
	 });
	
	
     $("#firstBtn").click(function(){
	      var fields = $('#first_name,#last_name, #email');
	      if($('#first_name').val().length<4 || $('#last_name').val().length<4 || $('#email').val().length<4){
		   fields.each(function(){
		       var value = $(this).val();
			   if( value.length<4){
			      $(this).addClass('error');
			   }
			   else {
                $(this).removeClass('error');
               }
		   });
		   return false;
		}
		else{
		   fields.each(function(){    
				 $(this).removeClass('error');        
			});
			$("#firstStep").hide();
			$("#secondStep").show();
		}
	 });
	 $("#secondBtn").click(function(){
	   var fields = $('#phone,#street_name, #city_name');
	   if($('#phone').val().length<4 || $('#street_name').val().length<4 || $('#city_name').val().length<4){
		   fields.each(function(){
		       var value = $(this).val();
			   if( value.length<4){
			      $(this).addClass('error');
			   }
			   else {
                $(this).removeClass('error');
               }
		   });
		   return false;
		}
		else{
		fields.each(function(){    
				 $(this).removeClass('error');        
		});
	     $("#thirdStep").show();
		 $("#secondStep").hide();
		}
	 });
	 
	 $("#thirdBtn").click(function(){
	    var fields = $('#state_name,#country_name, #zip_code');
	    if($('#state_name').val().length<4 || $('#country_name').val().length<4 || $('#zip_code').val().length<4){
		   fields.each(function(){
		       var value = $(this).val();
			   if( value.length<4){
			      $(this).addClass('error');
			   }
			   else {
                $(this).removeClass('error');
               }
		   });
		   return false;
		}
		else{
		fields.each(function(){    
				 $(this).removeClass('error');        
		});
	     $("#fourthStep").show();
		 $("#thirdStep").hide();
		} 
	});
	 
	 
	 $("#fourthBtnBack").click(function(){
	     $("#fourthStep").hide();
		 $("#thirdStep").show();
	 });
	 $("#thirdBtnBack").click(function(){
	     $("#thirdStep").hide();
		 $("#secondStep").show();
	 });
	 $("#secondBtnBack").click(function(){
	     $("#secondStep").hide();
		 $("#firstStep").show();
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
	 
	 
	 
	 $("input").on('blur keyup',function(){
		  if($(this).val().length<4){
			  $(this).addClass('error');
		  }else{
		      $(this).removeClass('error');
		  }
	});
	 
	 
});