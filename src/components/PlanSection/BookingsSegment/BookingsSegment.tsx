import { IonButton, IonCol, IonRow } from "@ionic/react";

import styles from './BookingsSegment.module.css';

const BookingsSegment: React.FC = () => {
  return (
    <IonRow className="ion-text-center">
      <IonCol>
        <IonButton shape="round" expand="full" className={styles.viewBookingButton}>View my bookings</IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BookingsSegment;