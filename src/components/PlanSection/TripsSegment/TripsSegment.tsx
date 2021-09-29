import React, { Fragment, useState } from "react";
import { IonButton, IonCol, IonIcon, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import { heart, locationOutline, documentTextOutline, personAddOutline } from 'ionicons/icons';

import styles from './TripsSegment.module.css';

const TripsSegment: React.FC = () => {
  const [tripName, setTripName] = useState<string>('');

  const searchTripNameHandler = (event: CustomEvent) => {
    setTripName(event.detail.value);
  };

  return (
    <Fragment>
      <IonRow>
        <IonCol>
          <IonItem className={styles.item}>
            <IonIcon icon={heart} className={styles.icon} />
            <IonLabel className={styles.label}>Save places you'd like to visit</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonItem className={styles.item}>
            <IonIcon icon={locationOutline} className={styles.icon} />
            <IonLabel className={styles.label}>See your saves on a map</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonItem className={styles.item}>
            <IonIcon icon={documentTextOutline} className={styles.icon} />
            <IonLabel className={styles.label}>Keep track of notes, links, and more</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonItem className={styles.item}>
            <IonIcon icon={personAddOutline} className={styles.icon} />
            <IonLabel className={styles.label}>Share and collaborate on your plans</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>

      <IonRow className={styles.searchTripRow}>
        <IonCol>
          <IonLabel className={styles.inputLabel}>Trip name</IonLabel>
          <IonInput className={styles.inputField} value={tripName} placeholder="Ex: Weekend in NYC" onIonChange={searchTripNameHandler}></IonInput>
          <IonButton shape="round" expand="full" className={styles.searchTripButton} disabled={(tripName === '')}>Create a Trip</IonButton>
        </IonCol>
      </IonRow>
    </Fragment>
  );
};

export default TripsSegment;