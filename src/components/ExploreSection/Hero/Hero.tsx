import { IonButton, IonCol, IonImg, IonRow } from '@ionic/react';

import styles from './Hero.module.css';

const Hero: React.FC<{
  title: string,
  description: string,
  buttonText: string,
  background: string,
}> = ({ title, description, buttonText, background }) => {
  return (
    <IonRow className={styles.heroContainer}>
      <IonCol>
        <IonImg src={background} className={styles.heroBackground} />

        <div className={styles.heroContent}>
          <h1>{title}</h1>
          <p>{description}</p>
          <IonButton shape="round" className={styles.heroButton}>{buttonText}</IonButton>
        </div>
      </IonCol>
    </IonRow>
  );
};

export default Hero;
