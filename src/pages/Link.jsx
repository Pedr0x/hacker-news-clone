import React from "react";
    import {
      IonPage,
      IonContent,
      IonButton,
      IonGrid,
      IonRow,
      IonCol
    } from "@ionic/react";
    import { closeCircleOutline } from "ionicons/icons";
    
    import firebase from "../firebase";
    
    import { Plugins } from "@capacitor/core";
    import UserContext from "../context/UserContext";
    import NavHeader from "../components/NavHeader";
    import LinkItem from "../components/Links/LinkItem";
    
    const { Browser } = Plugins;
    
    const Link = (props) => {
      const { user } = React.useContext(UserContext);
      const [link, setLink] = React.useState(null);
      const linkId = props.match.params.linkId;
      const linkRef = firebase.db.collection("links").doc(linkId);
    
      React.useEffect(() => {
        getLink();
        // eslint-disable-next-line
      }, [linkId]);
    
      function getLink() {
        linkRef.get().then((doc) => {
      setLink({ ...doc.data(), id: doc.displayName });
        })
		.catch(err => console.log(err));
      }
    
      function handleDeleteLink() {
        linkRef
          .delete()
          .then(() => {
            console.log(`Document with ID ${link.id} deleted`);
          })
          .catch((err) => {
            console.error("Error deleting document:", err);
          });
        props.history.push("/");
      }
    
      function postedByAuthUser(link) {
        return user && user.uid === link.postedBy.id;
      }
    
      async function openBrowser() {
        await Browser.open({
          url: link.url,
        });
      }
    
      return (
        <IonPage>
          <NavHeader
            title={link && link.description}
            option={link && postedByAuthUser(link)}
            icon={closeCircleOutline}
            action={handleDeleteLink}
          />
            {link && (
				  <IonContent>
                <IonGrid>
                  <IonRow>
                    <IonCol class="ion-text-center">
                      <LinkItem link={link} browser={openBrowser} />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              <React.fragment/>
                 </IonContent>

            )}
        </IonPage>
      );
    };
    
    export default Link;