import React from 'react';
import { IonPage, IonHeader,IonTitle, IonToolbar} from '@ionic/react';

const BigHeader = ({title}) => {
	return(
		<IonHeader collaspse="condense">
			<IonToolbar style={{background:"#3131dd"}} color="primary"> 
				<IonTitle size="large"> {title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	)
}
export default BigHeader