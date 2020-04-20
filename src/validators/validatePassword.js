export default function validatePasswordReset(values){
	let errors = {};
	
if (!values.email){
		errors.email = "a email is required"
	} else if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)){
		errors.email = "Your email is invalid"
	}
	
}




