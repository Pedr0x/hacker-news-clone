import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCardContent,
  IonCard,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
	import { toast } from "../../helpers/toast";
	import { personCircleOutline, mailOutline } from "ionicons/icons";
import UserContext from "../../context/UserContext";
import firebase from "../../firebase";
import SmallHeader from "../../components/SmallHeader";
import LargeHeader from "../../components/BigHeader";
import BigHeader from "./../../components/BigHeader"

const Profile = (props) => {
  const { user } = React.useContext(UserContext);

  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push("/");
      toast("You have logged out successfully.");
    } catch (err) {
      console.error("Logout Error", err);
      toast(err.message);
    }
  }
	React.useEffect(() => {
    console.log(user)
  });

  return (
    <IonPage>
      <SmallHeader title="Profile" />
        <LargeHeader title="Profile" />
        {user ? (
			 <IonContent>
          <React.Fragment>
            <IonCard>
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong>{user.displayName}</strong>
                      <p>Username</p>
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonIcon icon={mailOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong>{user.email}</strong>
                      <p>Email</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/edit-profile`}
                  color="primary"
                  fill="outline"
                >
                  Edit Profile
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="block" color="primary" onClick={logoutUser}>
                  Log Out
                </IonButton>
              </IonCol>
            </IonRow>
				  </React.Fragment>
			  </IonContent>
        ) : (
         <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/register`}
                  color="primary"
                >
                  Sign Up
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/login`}
                  color="primary"
                  fill="outline"
                >
                  Log In
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          </IonContent>
        )}
      
    </IonPage>
  );
};

export default Profile;