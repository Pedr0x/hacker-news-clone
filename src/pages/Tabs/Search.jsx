import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from "./../../components/SmallHeader"

import BigHeader from "./../../components/BigHeader"

const Search = () => {
	
	return (
<IonPage>
		<SmallHeader />
		<IonContent fullScreen>
			<BigHeader title="Search"/>
		</IonContent>
	</IonPage>
	
	)
}

export default Search