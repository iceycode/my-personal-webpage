//script adapted from http://trevordavis.net/blog/ajax-forms-with-jquery/

$(document).ready(function(){
	$("#submit_btn").click(function(){
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

//		var emailToVal = $("#emailTo").val();
//		if(emailToVal == '') {
//			$("#emailTo").after('<span class="error">You forgot to enter the email address to send to.</span>');
//			hasError = true;
//		} else if(!emailReg.test(emailToVal)) {
//			$("#emailTo").after('<span class="error">Enter a valid email address to send to.</span>');
//			hasError = true;
//		}
        var nameFrom = $("#name").val();
        if (nameFrom ==''){
            $("#name").after('<span class="error">You forgot to enter your name.</span>)');
            hasError = true;
        }

        //get the email from form category
		var emailFromVal = $("#email").val();
		if(emailFromVal == '') {
			$("#email").after('<span class="error">You forgot to enter the email address to send from.</span>');
			hasError = true;
		} else if(!emailReg.test(emailFromVal)) {
			$("#email").after('<span class="error">Enter a valid email address to send from.</span>');
			hasError = true;
		}

		var subjectVal = $("#subject").val();
		if(subjectVal == '') {
			$("#subject").after('<span class="error">You forgot to enter the subject.</span>');
			hasError = true;
		}

		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#msg").after('<span class="error">You forgot to enter the message.</span>');
			hasError = true;
		}


		if(hasError == false) {
//			$(this).hide();
//			$("#sendEmail li.buttons").append('<img src="/wp-content/themes/default/images/template/loading.gif" alt="Loading" id="loading" />');

			$.post("/php/email.php",
   				{ name: nameFrom, email: emailToVal, subject: subjectVal, message: messageVal },
   					function(data){
						$("#submit_btn").slideUp("normal", function() {

							$("#submit_btn").before('<h1>Success</h1><p>Your email was sent.</p>');
						});
   					}
				 );
		}

		return false;
	});
});
