function contact_validate(){
	var contact_name = document.getElementById("contact_name").value;
	var contact_email = document.getElementById("contact_email").value;
	var contact = document.getElementById("contact").value;
	var hpuserphone = document.getElementById("hpuserphone").value;
	var contact_comments = document.getElementById("contact_comments").value;
	var contact_vercode = document.getElementById("captcha").value;
	var nameErr = "";
	var emailErr = "";
	var commentsErr = "";
	var phoneErr = "";
	var vercodeErr = "";
	var phonefilter = /^[0-9]{10}$/;
	var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(contact_name == ""){
		nameErr = "Name is required";
		document.getElementById('contact_name_err').innerHTML = nameErr;
	}else{
		nameErr="";
		document.getElementById('contact_name_err').innerHTML = "";
	}
	if(contact_email == ""){ 
		emailErr ="Email is required";
		document.getElementById('contact_email_err').innerHTML = emailErr;	
	}else if(!emailfilter.test(contact_email)){
		emailErr ="Email formate is not correct"
		document.getElementById('contact_email_err').innerHTML = emailErr;
	}else{
	    emailErr="";
		document.getElementById('contact_email_err').innerHTML = "";
	}
	
	if(hpuserphone == ""){
		phoneErr="Mobile No. is required";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;	
	}else if(!phonefilter.test(hpuserphone)){
		phoneErr ="Mobile No. is not valid";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;
	}else{
		phoneErr="";
		document.getElementById('h_user_phone_err').innerHTML = "";
	}
	
	if(contact_comments == ""){
		commentsErr = "Message is required";
		document.getElementById('contact_comments_err').innerHTML = commentsErr;
	}else{
		commentsErr="";
		document.getElementById('contact_comments_err').innerHTML = "";
	}
	//	alert();
	if(contact_vercode == ""){
		vercodeErr = "Captcha code is required";
		document.getElementById('captcha_err').innerHTML = vercodeErr;
	}else{
		vercodeErr="";
		document.getElementById('captcha_err').innerHTML = "";
	}
	
	if(nameErr == "" && emailErr =="" && phoneErr=="" && commentsErr =="" && vercodeErr ==""){
	//var dataString = 'gtouch_name='+ gtouch_name + '&gtouch_email=' + gtouch_email + '&gtouch_phone=' + gtouch_phone + '&gtouch_subject' + gtouch_subject + '&gtouch_comments' + gtouch_comments;
		$.ajax({
           type: "POST",
           url: "ajax-contact.php",
           data: {contact_name:contact_name, type:contact, contact_email:contact_email, contact_comments:contact_comments, hpuserphone:hpuserphone, captcha:contact_vercode},
           success: function(data)
           {
            //   alert(data);
				if(data == "Request has been sent successfully"){
				    window.location.href = 'thank-you.php'; 
					document.getElementById('contact_success').innerHTML = data;
					document.getElementById("contact_name").value="";
					document.getElementById("contact_email").value="";
					document.getElementById("contact_comments").value="";
					document.getElementById("hpuserphone").value="";
				}else{
					document.getElementById('contact_success').innerHTML = data;
				}				
           }
         });
	}
}


function appointment_validate(){
    var utm_source= document.getElementById("utm_source").value;
	var contact_name = document.getElementById("contact_name").value;
	var contact_gender = document.getElementById("contact_gender").value;
	var contact_date = document.getElementById("contact_date").value;
	var contact_service = document.getElementById("contact_service").value;
	var contact_email = document.getElementById("contact_email").value;
	var appointment = document.getElementById("appointment_id").value;
	var hpuserphone = document.getElementById("hpuserphone").value;
	var contact_comments = document.getElementById("contact_comments").value;	
	var nameErr = "";
	var genderErr = "";
	var dateErr = "";
	var serviceErr = "";
	var emailErr = "";
	//var commentsErr = "";
	var phoneErr = "";
	var phonefilter = /^[0-9]{10}$/;
	var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	
	if(contact_name == ""){
		nameErr = "Name is required";
		document.getElementById('contact_name_err').innerHTML = nameErr;
	}else{
		nameErr="";
		document.getElementById('contact_name_err').innerHTML = "";
	}
	
	if(contact_gender == ""){
		genderErr = "Gender is required";
		document.getElementById('contact_gender_err').innerHTML = genderErr;
	}else{
		genderErr="";
		document.getElementById('contact_gender_err').innerHTML = "";
	}
	
	if(contact_date == ""){
		dateErr = "Appointment Date is required";
		document.getElementById('contact_date_err').innerHTML = dateErr;
	}else{
		dateErr="";
		document.getElementById('contact_date_err').innerHTML = "";
	}
	if(contact_service == ""){
		serviceErr = "Spcilities is required";
		document.getElementById('contact_service_err').innerHTML = serviceErr;
	}else{
		serviceErr="";
		document.getElementById('contact_service_err').innerHTML = "";
	}
	
	if(contact_email == ""){ 
		emailErr ="Email is required";
		document.getElementById('contact_email_err').innerHTML = emailErr;	
	}else if(!emailfilter.test(contact_email)){
		emailErr ="Email formate is not correct"
		document.getElementById('contact_email_err').innerHTML = emailErr;
	}else{
	    emailErr="";
		document.getElementById('contact_email_err').innerHTML = "";
	}
	
	if(hpuserphone == ""){
		phoneErr="Mobile No. is required";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;	
	}else if(!phonefilter.test(hpuserphone)){
		phoneErr ="Mobile No. is not valid";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;
	}else{
		phoneErr="";
		document.getElementById('h_user_phone_err').innerHTML = "";
	}
	
	/* if(contact_comments == ""){
		commentsErr = "Message is required";
		document.getElementById('contact_comments_err').innerHTML = commentsErr;
	}else{
		commentsErr="";
		document.getElementById('contact_comments_err').innerHTML = "";
	} */
	
	
	if(nameErr == "" && genderErr == "" && dateErr == "" && serviceErr == "" && emailErr =="" && phoneErr==""){
	$.ajax({
           type: "POST",
           url: "ajax-contact.php",
           data: {utm_source:utm_source, contact_name:contact_name, contact_gender:contact_gender, contact_date:contact_date, contact_service:contact_service, type:appointment, contact_email:contact_email, contact_comments:contact_comments, hpuserphone:hpuserphone},
           success: function(data)
           {
				if(data == "Request has been sent successfully"){
				    window.location.href = 'thank-you.php'; 
				// 	document.getElementById('contact_success').innerHTML = data;
					document.getElementById("contact_name").value="";
					document.getElementById("contact_gender").value="";
					document.getElementById("contact_date").value="";
					document.getElementById("contact_service").value="";
					document.getElementById("contact_email").value="";
					document.getElementById("contact_comments").value="";
					document.getElementById("hpuserphone").value="";
				}else{
					document.getElementById('contact_success').innerHTML = data;
				}				
           }
         });
	}
}
function career_validate(){
	var contact_name = document.getElementById("contact_name").value;
	var contact_qualification = document.getElementById("contact_qualification").value;
	var contact_skill = document.getElementById("contact_skill").value;
	var contact_email = document.getElementById("contact_email").value;
	var career = document.getElementById("career").value;
	var hpuserphone = document.getElementById("hpuserphone").value;
	var contact_comments = document.getElementById("contact_comments").value;	
	var nameErr = "";
	var qualificationrErr = "";
	var skillErr = "";
	var emailErr = "";
	var commentsErr = "";
	var phoneErr = "";
	var phonefilter = /^[0-9]{10}$/;
	var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	
	if(contact_name == ""){
		nameErr = "Name is required";
		document.getElementById('contact_name_err').innerHTML = nameErr;
	}else{
		nameErr="";
		document.getElementById('contact_name_err').innerHTML = "";
	}
	
	if(contact_qualification == ""){
		qualificationrErr = "Qualification is required";
		document.getElementById('contact_qualification_err').innerHTML = qualificationrErr;
	}else{
		qualificationrErr="";
		document.getElementById('contact_qualification_err').innerHTML = "";
	}
	
	if(contact_skill == ""){
		skillErr = "Skills are required";
		document.getElementById('contact_skill_err').innerHTML = skillErr;
	}else{
		skillErr="";
		document.getElementById('contact_skill_err').innerHTML = "";
	}
	
	if(contact_email == ""){ 
		emailErr ="Email is required";
		document.getElementById('contact_email_err').innerHTML = emailErr;	
	}else if(!emailfilter.test(contact_email)){
		emailErr ="Email formate is not correct"
		document.getElementById('contact_email_err').innerHTML = emailErr;
	}else{
	    emailErr="";
		document.getElementById('contact_email_err').innerHTML = "";
	}
	
	if(hpuserphone == ""){
		phoneErr="Mobile No. is required";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;	
	}else if(!phonefilter.test(hpuserphone)){
		phoneErr ="Mobile No. is not valid";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;
	}else{
		phoneErr="";
		document.getElementById('h_user_phone_err').innerHTML = "";
	}
	
	if(contact_comments == ""){
		commentsErr = "Message is required";
		document.getElementById('contact_comments_err').innerHTML = commentsErr;
	}else{
		commentsErr="";
		document.getElementById('contact_comments_err').innerHTML = "";
	}
	
	
	if(nameErr == "" && qualificationrErr == "" && skillErr == "" && emailErr =="" && phoneErr=="" && commentsErr =="" ){
	//var dataString = 'gtouch_name='+ gtouch_name + '&gtouch_email=' + gtouch_email + '&gtouch_phone=' + gtouch_phone + '&gtouch_subject' + gtouch_subject + '&gtouch_comments' + gtouch_comments;
		$.ajax({
           type: "POST",
           url: "ajax-contact.php",
           data: {contact_name:contact_name, contact_qualification:contact_qualification, contact_skill:contact_skill, type:career, contact_email:contact_email, contact_comments:contact_comments, hpuserphone:hpuserphone},
           success: function(data)
           {
				if(data == "Request has been sent successfully"){
				    window.location.href = 'thank-you.php'; 
				// 	document.getElementById('contact_success').innerHTML = data;
					document.getElementById("contact_name").value="";
					document.getElementById("contact_qualification").value="";
					document.getElementById("contact_skill").value="";
					document.getElementById("contact_email").value="";
					document.getElementById("contact_comments").value="";
					document.getElementById("hpuserphone").value="";
				}else{
					document.getElementById('contact_success').innerHTML = data;
				}				
           }
         });
	}
}
function feedback_validate(){
	var contact_name = document.getElementById("contact_name").value;
	var contact_date = document.getElementById("contact_date").value;
	var contact_image = document.getElementById("contact_image").value;
        var feedback = document.getElementById("feedback").value;
	var contact_comments = document.getElementById("contact_comments").value;	
	var nameErr = "";
	var dateErr = "";
	var imageErr = "";
	var commentsErr = "";

	
	if(contact_name == ""){
		nameErr = "Name is required";
		document.getElementById('contact_name_err').innerHTML = nameErr;
	}else{
		nameErr="";
		document.getElementById('contact_name_err').innerHTML = "";
	}
	
	if(contact_date == ""){
		dateErr = "Date is required";
		document.getElementById('contact_date_err').innerHTML = dateErr;
	}else{
		dateErr="";
		document.getElementById('contact_date_err').innerHTML = "";
	}
	
	if(contact_image == ""){
		imageErr = "Image is required";
		document.getElementById('contact_image_err').innerHTML = imageErr;
	}else{
		imageErr="";
		document.getElementById('contact_image_err').innerHTML = "";
	}
	
	if(contact_comments == ""){
		commentsErr = "Message is required";
		document.getElementById('contact_comments_err').innerHTML = commentsErr;
	}else{
		commentsErr="";
		document.getElementById('contact_comments_err').innerHTML = "";
	}
	
	
	if(nameErr == "" && dateErr == "" && imageErr =="" && commentsErr =="" ){
	
		$.ajax({
           type: "POST",
           url: "ajax-feedback.php",
           data: {contact_name:contact_name, contact_date:contact_date, type:feedback, contact_image:contact_image, contact_comments:contact_comments},
           success: function(data)
           {
				if(data == "Request has been sent successfully"){
				    window.location.href = 'thank-you.php'; 
				// 	document.getElementById('contact_success').innerHTML = data;
					document.getElementById("contact_name").value="";
					document.getElementById("contact_date").value="";
					document.getElementById("contact_image").value="";
					document.getElementById("contact_comments").value="";
				}else{
					document.getElementById('contact_success').innerHTML = data;
				}				
           }
         });
	}
}
function apt_validate(){

	var contact_dept = document.getElementById("contact_dept").value;
	var contact_dr = document.getElementById("openDoctor").value;
	var contact_name = document.getElementById("contact_name").value;
	var contact_relation = document.getElementById("contact_relation").value;
	var contact_gender = document.getElementById("contact_gender").value;
	var contact_age = document.getElementById("contact_age").value;
    var contact_email = document.getElementById("contact_email").value;
	var hpuserphone = document.getElementById("hpuserphone").value;
	var contact_comments = document.getElementById("contact_comments").value;	
	var apt = document.getElementById("apt").value;
	var utm_source = document.getElementById("utm_source").value;
	
	var deptErr = "";
	var amountErr = "";
	var drErr = "";
	var nameErr = "";
	var genderErr = "";
	var ageErr = "";
	var emailErr = "";
	var phoneErr = "";
	var phonefilter = /^[0-9]{10}$/;
	var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	
	if(contact_dept == ""){
		deptErr = "Select Department";
		document.getElementById('contact_dept_err').innerHTML = deptErr;
	}else{
		deptErr="";
		document.getElementById('contact_dept_err').innerHTML = "";
	}
	
	if(contact_dr == ""){
		drErr = "Select Doctor";
		document.getElementById('contact_dr_err').innerHTML = drErr;
	}else{
		drErr="";
		document.getElementById('contact_dr_err').innerHTML = "";
	}
	
	if(contact_name == ""){
		nameErr = "Name is required";
		document.getElementById('contact_name_err').innerHTML = nameErr;
	}else{
		nameErr="";
		document.getElementById('contact_name_err').innerHTML = "";
	}
	
	if(contact_gender == ""){
		genderErr = "Gender is required";
		document.getElementById('contact_gender_err').innerHTML = genderErr;
	}else{
		genderErr="";
		document.getElementById('contact_gender_err').innerHTML = "";
	}
	if(contact_age == ""){
		ageErr = "Age is required";
		document.getElementById('contact_age_err').innerHTML = ageErr;
	}else{
		ageErr="";
		document.getElementById('contact_age_err').innerHTML = "";
	}

	if(hpuserphone == ""){
		phoneErr="Mobile No. is required";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;	
	}else if(!phonefilter.test(hpuserphone)){
		phoneErr ="Mobile No. is not valid";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;
	}else{
		phoneErr="";
		document.getElementById('h_user_phone_err').innerHTML = "";
	}
	

	if(deptErr == "" && drErr == "" && nameErr == "" && genderErr == "" && ageErr == "" && phoneErr==""){
	$.ajax({
           type: "POST",
           url: "ajax-contact.php",
           data: {contact_age:contact_age, contact_dept:contact_dept, contact_dr:contact_dr, contact_name:contact_name, contact_relation:contact_relation, contact_gender:contact_gender, type:apt, utm_source:utm_source, contact_email:contact_email, contact_comments:contact_comments, hpuserphone:hpuserphone},
           success: function(data)
           {
               
				if(data == "Request has been sent successfully"){
				    window.location.href = 'thank-you.php'; 
//				    window.location = 'https://www.tritonhospital.com/';
                    // document.getElementById('contact_success').innerHTML = data;
					document.getElementById("contact_dept").value="";
					document.getElementById("contact_age").value="";
					document.getElementById("openDoctor").value="";
					document.getElementById("contact_name").value="";
					document.getElementById("contact_relation").value="";
					document.getElementById("contact_gender").value="";
					document.getElementById("openSchedule").value="";
					document.getElementById("contact_email").value="";
					document.getElementById("contact_comments").value="";
					document.getElementById("hpuserphone").value="";
				}else{
					document.getElementById('contact_success').innerHTML = data;
				}				
           }
         });
	}
}
function contact_apt_validate(){
  
    var dr_name = document.getElementById("contact_dr_name").value;
   // var dr_name =  dr_id.options[ dr_id.selectedIndex ].text;
    var contact_date = document.getElementById("contact_date").value;
  
    
	var contact_name = document.getElementById("contact_name_apt").value;
	var contact_email = document.getElementById("contact_email_apt").value;
	var contact = document.getElementById("contact_apt").value;
	var hpuserphone = document.getElementById("hpuserphone_apt").value;
	var contact_comments = document.getElementById("contact_comments_apt").value;
	  
	var nameErr = "";
	var emailErr = "";
	var commentsErr = "";
	var phoneErr = "";
	var phonefilter = /^[0-9]{10}$/;
	var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(contact_name == ""){
		nameErr = "Name is required";
		document.getElementById('contact_name_err').innerHTML = nameErr;
	}else{
		nameErr="";
		document.getElementById('contact_name_err').innerHTML = "";
	}
	if(contact_email == ""){ 
		emailErr ="Email is required";
		document.getElementById('contact_email_err').innerHTML = emailErr;	
	}else if(!emailfilter.test(contact_email)){
		emailErr ="Email formate is not correct"
		document.getElementById('contact_email_err').innerHTML = emailErr;
	}else{
	    emailErr="";
		document.getElementById('contact_email_err').innerHTML = "";
	}
	
	if(hpuserphone == ""){
		phoneErr="Mobile No. is required";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;	
	}else if(!phonefilter.test(hpuserphone)){
		phoneErr ="Mobile No. is not valid";
		document.getElementById('h_user_phone_err').innerHTML = phoneErr;
	}else{
		phoneErr="";
		document.getElementById('h_user_phone_err').innerHTML = "";
	}
	
	if(contact_comments == ""){
		commentsErr = "Message is required";
		document.getElementById('contact_comments_err').innerHTML = commentsErr;
	}else{
		commentsErr="";
		document.getElementById('contact_comments_err').innerHTML = "";
	}
	//	alert();
	
	if(nameErr == "" && emailErr =="" && phoneErr=="" && commentsErr =="" ){
	//var dataString = 'gtouch_name='+ gtouch_name + '&gtouch_email=' + gtouch_email + '&gtouch_phone=' + gtouch_phone + '&gtouch_subject' + gtouch_subject + '&gtouch_comments' + gtouch_comments;
		$.ajax({
           type: "POST",
           url: "https://www.tritonhospital.com/ajax-contact.php",
           data: {contact_name:contact_name, type:contact, contact_email:contact_email, contact_comments:contact_comments, hpuserphone:hpuserphone, dr_name:dr_name, contact_date:contact_date},
           success: function(data) 
           {
				if(data == "Request has been sent successfully"){
				    window.location.href = 'thank-you.php'; 
				// 	document.getElementById('contact_success').innerHTML = data;
					document.getElementById("contact_name_apt").value="";
					document.getElementById("contact_email_apt").value="";
					document.getElementById("contact_comments_apt").value="";
					document.getElementById("hpuserphone_apt").value="";
				}else{
					document.getElementById('contact_success').innerHTML = data;
				}				
           }
         });
	}
}