import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from "./../../components/SmallHeader"
import BigHeader from "./../../components/BigHeader"

const Submit = () => {
	
	return (
			
	<IonPage>
		<SmallHeader />
		<IonContent fullScreen>
			<BigHeader title="Submit"/>
		</IonContent>
	</IonPage>
		
	)
}

export default Submit