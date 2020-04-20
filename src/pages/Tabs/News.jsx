import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from "./../../components/SmallHeader"
import BigHeader from "./../../components/BigHeader"


const News = () => {
	return (		
	<IonPage>
		<SmallHeader />
		<IonContent fullScreen>
			<BigHeader title="Swen"/>
		</IonContent>
	</IonPage>
	
	)
}

export default News