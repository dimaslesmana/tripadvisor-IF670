import React, { Fragment } from "react";
import { IonCol, IonRow, IonText } from "@ionic/react";

import styles from './SavesSegment.module.css';

const SavesSegment: React.FC = () => {
  return (
    <Fragment>
      <IonRow className="ion-text-center">
        <IonCol>
          <IonText className={styles.info}>No saves yet</IonText>
        </IonCol>
      </IonRow>

      <IonRow className="ion-text-center">
        <IonCol>
          <IonText className={styles.description}>Places you save will appear here.</IonText>
        </IonCol>
      </IonRow>
    </Fragment>
  );
};

export default SavesSegment;