export default function validateSignup(values){
	let errors = {};
	
	if (!values.name){
		errors.name = "a username is required"
	}
	
if (!values.email){
		errors.email = "a email is required"
	} else if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)){
		errors.email = "Your email is invalid"
	}
	
	if (!values.password){
		errors.password = "A password is required";
		
	} else if (values.password.length > 6) {
		errors.password = "Your pasword must be at least 6 characters"
	}
}



