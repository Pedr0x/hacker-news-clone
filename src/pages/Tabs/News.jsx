import React from "react";
    import { IonContent, IonPage } from "@ionic/react";
    import LinkList from "../../components/Links/LinkList";
    import SmallHeader from "../../components/SmallHeader";
    import BigHeader from "../../components/BigHeader";
    
    const News = (props) => {
      return (
        <IonPage>
          <SmallHeader title="Swen" />
          <IonContent>
            <BigHeader title="Swen" />
            <LinkList location={props.location} />
          </IonContent>
        </IonPage>
      );
    };
    
    export default News;