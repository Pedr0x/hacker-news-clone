import React from 'react';
import { IonHeader,IonButtons, IonToolbar, IonBackButton,IonTitle} from '@ionic/react';


const NavHeader = (props) => {
	return(
		<IonHeader style={{padding:"2%"}}>
			<IonToolbar>
				<IonButtons>
					<IonBackButton defaultHref="./" />
				</IonButtons>
				<IonTitle> {props.title} </IonTitle>
			</IonToolbar>
		</IonHeader>
	
	)
}

export default NavHeader