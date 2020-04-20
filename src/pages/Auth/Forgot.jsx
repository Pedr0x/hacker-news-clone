import React from 'react';
import { IonPage, IonContent,
IonItem,
IonLabel,
IonInput,
IonRow,
IonCol,
IonButton} from '@ionic/react';


import firebase from "../../firebase/firebase";

import NavHeader from "./../../components/NavHeader"
import {toast} from "../../helpers/toast"
import useForm from "../../hooks/UseForm";

import validatePasswordReset from "../../validators/validatePassword"



const INITIAL_STATE = {
	email: ""
}

const Forgot = () => {
	const {handleSubmit, handleChange, values, isSubmitting} = useForm(INITIAL_STATE,validatePasswordReset,handleResetPassword);
	
	const [busy,setBusy] = React.useState(false);
	
	async function handleResetPassword() {
		
	setBusy(true);
		const {email} = values;
		try {
			await firebase.resetPassword(email);
			toast("Check your email to reset your password")
		} catch (err) {
			console.error("password reset error", err)
			toast(err.message)
		}
		
	}	
	
	return(
	<IonPage>
		
		<NavHeader title="Password Reset"/>
		<IonContent>
			
			
				<IonItem lines="full">
				<IonLabel position="floating">Email</IonLabel>
			<IonInput name="email" type="text" required value={values.email} onIonChange={handleChange}></IonInput>
			</IonItem>
			
			<IonRow>
				
				<IonCol>
				<IonButton onClick={handleSubmit} type="submit" color="primary"
					expand="block"> Login</IonButton>	
					
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol class="ion-text-center ion-padding-vertical">
					Get reset link?
				</IonCol>
			</IonRow>
		</IonContent>
	</IonPage>
	
	
	)
}

export default Forgot