import { IonRow, IonCol, IonCard, IonCardContent, IonButton, IonImg } from "@ionic/react";

import styles from './ReviewCard.module.css';

const ReviewCard: React.FC<{
  buttonText: string,
  image: string,
}> = ({ buttonText, image }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard className={styles.card}>
          <IonImg src={image} className={styles.background} />
          <IonCardContent className={styles.content}>
            <IonButton shape="round" className={styles.button}>
              {buttonText}
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default ReviewCard;
