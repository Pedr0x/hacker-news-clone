import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from "./../../components/SmallHeader"
import BigHeader from "../../components/BigHeader";

import LinkList from "../../components/Links/LinkList";

const Trending = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent>
        <BigHeader title="Trending" />
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Trending;