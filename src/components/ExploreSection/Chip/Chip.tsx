import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import { bedOutline, ticketOutline, restaurantOutline, chatboxOutline } from 'ionicons/icons';

import styles from './Chip.module.css';

const Chip: React.FC = () => {
  return (
    <div className={styles.container}>
      <IonChip className={styles.chip}>
        <IonIcon icon={bedOutline} />
        <IonLabel>Hotels</IonLabel>
      </IonChip>

      <IonChip className={styles.chip}>
        <IonIcon icon={ticketOutline} />
        <IonLabel>Things to do</IonLabel>
      </IonChip>

      <IonChip className={styles.chip}>
        <IonIcon icon={restaurantOutline} />
        <IonLabel>Restaurants</IonLabel>
      </IonChip>

      <IonChip className={styles.chip}>
        <IonIcon icon={chatboxOutline} />
        <IonLabel>Forums</IonLabel>
      </IonChip>
    </div>
  );
};

export default Chip;
