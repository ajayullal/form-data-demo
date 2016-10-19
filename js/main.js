
var browserSupport = false;
var browserSupport = window.File && window.FileReader;
var file;

if(browserSupport){
	$('#profilePic').on('change', function(){
		var $this = this;
		file = $this.files[0];
	});

	$('#submitButton').on('click', function(){
		var $form = $form? $form: document.getElementById('registrationForm');
		var formDate = new FormData($form);
		if(file){
			formDate.append('profilePic', file);
		}
		var formElements = $form.elements;
		formDate.append('name', formElements[0].value);
		formDate.append('email', formElements[1].value);
		
		for(var data of formDate.values()){
			console.log(data);
		}
	});
}else{
	alert("Your browser doesn't support the HTML 5 File api. Please switch to an evergreen browser");
}
