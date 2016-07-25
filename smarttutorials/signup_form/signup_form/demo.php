<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Multi-Step SignUp Form Using jQuery Ajax PHP HTML5 and CSS3</title>
    <link rel='stylesheet' href='css/style.css'/>	
</head>
<body>

<div class='wrapper'>
<form action="" id="myform"  title="Apply for a Short-Term Loan">
<fieldset>
<div><h2 class="title">You are just minutes away from approval.</h2></div><div><label class="title">Amount</label>
				<select name="requested_amount" id='requested_amount' class='required border' min='100' max='1000' 
				data-msg-min="Please select minimum $100" data-msg-max="Please select maximum of $1000">
				<option value="select">Select</option>
				<option value="100">100$</option>
			
				<option value="200">200$</option>
			
				<option value="300">300$</option>
			
				<option value="400">400$</option>
			
				<option value="500">500$+</option>
			</select>
			</div>
			<p id="invalid-requested_amount" class="error_msg"></p>
			<div>
				<label class="title">First Name</label>
				<input type="text" name="first_name" id='first_name' class='required' minlength="2" data-msg-required="Please enter your first name" maxlength='128'>
			</div>
			<p id="invalid-first_name" class="error_msg"></p>
			<div>
				<label class="title">Last Name</label>
				<input type="text" name="last_name" id='last_name' class='required' minlength="2" data-msg-required="Please enter your last name" maxlength='128'>
			</div>
			<p id="invalid-last_name" class="error_msg"></p>
			<div>
				<label class="title">Email Address</label>
				<input type="text" name="email" id='email' class='required email' data-msg-required="Please enter your email">
			</div>
			<p id="invalid-email" class="error_msg"></p>
			<div>
				<label class="title">Cell Phone</label>
				<input type="text" name="home_phone" id='home_phone' class='required' data-msg-required="Please enter your Cell Phone Number" phoneUS='true'>
			</div>
			<p id="invalid-home_phone" class="error_msg"></p>
</fieldset>

<fieldset>
<div><h2 class="title">Required Secure Information</h2></div>

<div>
<label class="title">When were you born?</label>
<input type="text" name="birth_date" id='birth_date'>
</div>
<p id="invalid-birth_date" class="error_msg"></p>
<div>
<label class="title">Please enter your Social Security Number</label>
<input type="text" name="ssn" id='ssn'>
</div>
<p id="invalid-ssn" class="error_msg"></p>
<div>
<label class="title">What is your DL number?</label>
<input type="text" name="drivers_license_number" id='drivers_license_number'>
</div>
<p id="invalid-drivers_license_number" class="error_msg"></p>
<div>
<label class="title">Which state issued your DL?</label>
				
				<select name="drivers_license_state" id='drivers_license_state' class='border'>
				<option value="">Select</option>
				<option value="AL">AL</option>
			
				<option value="AK">AK</option>
			
				<option value="AZ">AZ</option>
			
				<option value="AR">AR</option>
			
				<option value="CA">CA</option>
			
				<option value="CO">CO</option>
			
				<option value="CT">CT</option>
			
				<option value="DE">DE</option>
			
				<option value="DC">DC</option>
			
				<option value="FL">FL</option>
			
				<option value="GA">GA</option>
			
				<option value="HI">HI</option>
			
				<option value="ID">ID</option>
			
				<option value="IL">IL</option>
			
				<option value="IN">IN</option>
			
				<option value="IA">IA</option>
			
				<option value="KS">KS</option>
			
				<option value="KY">KY</option>
			
				<option value="LA">LA</option>
			
				<option value="ME">ME</option>
			
				<option value="MD">MD</option>
			
				<option value="MA">MA</option>
			
				<option value="MI">MI</option>
			
				<option value="MN">MN</option>
			
				<option value="MS">MS</option>
			
				<option value="MO">MO</option>
			
				<option value="MT">MT</option>
			
				<option value="NE">NE</option>
			
				<option value="NV">NV</option>
			
				<option value="NH">NH</option>
			
				<option value="NJ">NJ</option>
			
				<option value="NM">NM</option>
			
				<option value="NY">NY</option>
			
				<option value="NC">NC</option>
			
				<option value="ND">ND</option>
			
				<option value="OH">OH</option>
			
				<option value="OK">OK</option>
			
				<option value="OR">OR</option>
			
				<option value="PA">PA</option>
			
				<option value="RI">RI</option>
			
				<option value="SC">SC</option>
			
				<option value="SD">SD</option>
			
				<option value="TN">TN</option>
			
				<option value="TX">TX</option>
			
				<option value="UT">UT</option>
			
				<option value="VT">VT</option>
			
				<option value="VA">VA</option>
			
				<option value="WA">WA</option>
			
				<option value="WV">WV</option>
			
				<option value="WI">WI</option>
			
				<option value="WY">WY</option>
			</select>
			
			</div>
			<p id="invalid-drivers_license_state" class="error_msg"></p>
</fieldset>

<fieldset>
<div><h2 class="title">Tell us about your job.</h2></div>

<div>
<label class="title">Your employer's company name.</label>
<input type="text" name="employer" id='employer'>
</div>
<p id="invalid-employer" class="error_msg"></p>
<div>
<label class="title">Employer's Phone Number</label>
<input type="text" name="employer_phone" id='employer_phone'>
</div>
<p id="invalid-employer_phone" class="error_msg"></p>
<div>
<label class="title">What's your title at work?</label>
<input type="text" name="job_title" id='job_title'>
</div>
<p id="invalid-job_title" class="error_msg"></p>
<div>
<label class="title">How many months have you been employed?</label>
				<select name="employer_months" id='employer_months' class='border'>
				<option value="">Select</option>
				<option value="1">1</option>
			
				<option value="2">2</option>
			
				<option value="6">6</option>
			
				<option value="12">12</option>
			
				<option value="18">18</option>
			
				<option value="24">24</option>
			
				<option value="36">36</option>
			</select>
			</div>
			<p id="invalid-employer_months" class="error_msg"></p>
			<div>
			<label class="title">Are you ACTIVE status in the military?</label>
				<div>
				<input type="checkbox" id='active_military' name="active_military" class='active_military' value="yes"><span>yes</span><br>
			
				<input type="checkbox" name="active_military" class='active_military' value="no"><span>no</span><br>
			</div>
			
			</div>
			<p id="invalid-active_military" class="error_msg"></p>
</fieldset>

<fieldset>
<div><h2 class="title">Almost Done...</h2></div><div><label class="title">How much do you make a month?</label>
				<select name="monthly_income" id='monthly_income' class='border'>
				<option value="">Select</option>
				<option value="800">800</option>
			
				<option value="900">900</option>
			
				<option value="1000">1000</option>
			
				<option value="1200">1200</option>
			
				<option value="1500">1500</option>
			
				<option value="2000">2000</option>
			
				<option value="2500">2500</option>
			
				<option value="3000">3000</option>
			
				<option value="4000">4000</option>
			
				<option value="5000">5000</option>
			
				<option value="8000">8000</option>
			
				<option value="10000">10000</option>
			</select>
			</div>
			<p id="invalid-monthly_income" class="error_msg"></p>
			<div><label class="title">Where does you income come from?</label>
				<select name="income_source" id='income_source' class='border'>
				<option value="">Select</option>
				<option value="EMPLOYMENT">EMPLOYMENT</option>
				<option value="BENEFITS">BENEFITS</option>
			</select>
			</div>
			<p id="invalid-income_source" class="error_msg"></p>
			<div><label class="title">How often are you paid?</label>
				<select name="payment_frequency" id='payment_frequency' class='border'>
				<option value="">Select</option>
				<option value="WEEKLY">WEEKLY</option>
			
				<option value="BI-WEEKLY">BI-WEEKLY</option>
			
				<option value="MONTHLY">MONTHLY</option>
			
				<option value="BI-MONTHLY">BI-MONTHLY</option>
			</select>
			</div>
			<p id="invalid-payment_frequency" class="error_msg"></p>
			<div>
			<label class="title">When is your next pay date?</label>
			<input type="text" name="pay_date1" id='pay_date1'>
			</div>
			<p id="invalid-pay_date1" class="error_msg"></p>
			<div>
			<label class="title">When is your 2nd pay date from now?</label>
			<input type="text" name="pay_date2" id='pay_date2'>
			</div>
			<p id="invalid-pay_date2" class="error_msg"></p>
</fieldset>

<fieldset>
<div><h2 class="title">Congrats, it's the last step!</h2></div>
<div>
<label class="title">Bank Name</label>
<input type="text" name="bank_name" id='bank_name'>
</div>
<p id="invalid-bank_name" class="error_msg"></p>
<div><label class="title">Routing Number</label>
<input type="text" name="bank_aba" id='bank_aba'>
</div>
<p id="invalid-bank_aba" class="error_msg"></p>
<div>
<label class="title">Account Number</label>
<input type="text" name="bank_account" id='bank_account'>
</div>
<p id="invalid-bank_account" class="error_msg"></p>
<div>
<label class="title">What type of account do you have?</label>
				<select name="bank_type" id='bank_type' class='border'>
				<option value="">Select</option>
				<option value="CHECKING">CHECKING</option>
			
				<option value="SAVING">SAVING</option>
			</select>
			</div>
			<p id="invalid-bank_type" class="error_msg"></p>
			<div><label class="title">Do you have direct deposit?</label>
				<div>
				<input type="checkbox" id='direct_deposit' name="direct_deposit" value="yes" class='direct_deposit'><span>yes</span><br>
			
				<input type="checkbox" name="direct_deposit" value="no" class='direct_deposit'><span>no</span><br>
			</div>
			</div>
			<p id="invalid-direct_deposit" class="error_msg"></p>
</fieldset>




<input id="submit_app" class="sub" type="button" value="Submit" />



</form>

</div>
</body>
</html>
