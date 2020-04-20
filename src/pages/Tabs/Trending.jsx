import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from "./../../components/SmallHeader"

import BigHeader from "./../../components/BigHeader"

const Trending = () => {
	
	return (
	<IonPage>
		<SmallHeader />
		<IonContent fullScreen>
			<BigHeader title="Trending"/>
		</IonContent>
	</IonPage>
	)
}

export default Trending