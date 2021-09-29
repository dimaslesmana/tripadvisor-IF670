import { IonCol, IonLabel, IonRow, IonSegment, IonSegmentButton } from "@ionic/react";

import styles from './SegmentController.module.css';

const SegmentController: React.FC<{
  selectedValue: 'trips' | 'saves' | 'bookings',
  onSelectValue: (value: 'trips' | 'saves' | 'bookings') => void,
}> = ({ selectedValue, onSelectValue }) => {

  const segmentChangeHandler = (event: CustomEvent) => {
    onSelectValue(event.detail.value);
  };

  return (
    <IonRow>
      <IonCol>
        <IonSegment onIonChange={segmentChangeHandler} value={selectedValue} className={styles.segment}>
          <IonSegmentButton value="trips" className={styles.button}>
            <IonLabel>Trips</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="saves" className={styles.button}>
            <IonLabel>Saves</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="bookings" className={styles.button}>
            <IonLabel>Bookings</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCol>
    </IonRow>
  );
};

export default SegmentController;
