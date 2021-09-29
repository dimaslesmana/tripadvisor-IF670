import React, { Fragment } from "react";
import { IonCard, IonCol, IonImg, IonRow } from "@ionic/react";

import { destinationData } from '../../../helpers/data';

import styles from './Destinations.module.css';

const Destinations: React.FC = () => {
  return (
    <Fragment>
      <IonRow>
        <IonCol><h3 className={styles.destinationHeaderTitle}>Destinations travelers love</h3></IonCol>
      </IonRow>

      <IonRow>
        {destinationData.map(destination => (
          <IonCol size="6" key={destination.id}>
            <IonCard className={styles.card}>
              <IonImg src={destination.image} className={styles.image} />
              <div className={styles.overlay}>
                <h2>{destination.name}</h2>
              </div>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </Fragment>
  );
};

export default Destinations;
