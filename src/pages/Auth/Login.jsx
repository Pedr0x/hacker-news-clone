import React from 'react';
import { IonPage, IonContent,
IonItem,
IonLabel,
IonInput,
IonRow,
IonCol,
IonButton, IonLoading} from '@ionic/react';

import NavHeader from "./../../components/NavHeader"
import validateLogin from "../../validators/validateLogin"
import {toast} from "../../helpers/toast"

import useForm from "../../hooks/UseForm";

import firebase from "../../firebase/firebase";

const INITIAL_STATE = {
	email : "",
	password: ""
}

const Login = (props) => {
 const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validateLogin,
    authenticateUser
  );
	const [busy, setBusy] = React.useState(false)
	
	async function authenticateUser() {
		setBusy(true);
		const {email, password} = values;
		try {
			await firebase.login(email, password);
			toast("You have logged in succesfully!");
			props.history.push("/");
		} catch (err) {
			console.log("Authentication error", err);
			toast(err.message)
		}
		setBusy(false)
	}
	
	return(
	<IonPage>
		<NavHeader title="Login"/>
		      <IonLoading message={"Please wait..."} isOpen={busy} />

		<IonContent>
			
				<IonItem lines="full">
				<IonLabel position="floating">Email</IonLabel>
			<IonInput  onIonChange={handleChange}  name="email" type="text" required></IonInput>
			</IonItem>
			
			<IonItem lines="full">
				<IonLabel position="floating">Password</IonLabel>
			<IonInput  onIonChange={handleChange} name="password" type="password" required></IonInput>
			</IonItem>
			<IonRow>
				
				<IonCol>
				<IonButton onClick={handleSubmit}
 type="submit" color="primary"
					expand="block"> Login</IonButton>	
					
				</IonCol>
				
			</IonRow>
			<IonRow>
				<IonCol class="ion-text-center ion-padding-vertical">
					Forgot Password?
				</IonCol>
			</IonRow>
		</IonContent>
	</IonPage>
	
	)
}

export default Login