import { IonRow, IonCol, IonCard, IonCardContent, IonButton, IonCardTitle } from "@ionic/react";

import styles from './SearchCard.module.css';

const SearchCard: React.FC = () => {

  return (
    <IonRow>
      <IonCol>
        <IonCard color="success" className={styles.card}>
          <IonCardContent className={styles.content}>
            <IonCardTitle className={styles.title}>See what's good nearby.</IonCardTitle>
            <IonButton shape="round" fill="outline" className={styles.button}>
              Turn on location settings
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
}

export default SearchCard;
