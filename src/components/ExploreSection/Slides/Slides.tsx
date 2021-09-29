import { IonCard, IonCol, IonImg, IonRow, IonSlide, IonSlides } from '@ionic/react';

import styles from './Slides.module.css';

const Slides: React.FC<{
  title: string,
  description: string,
  data: Array<any>,
}> = ({ title, description, data }) => {

  const slideOptions = {
    slidesPerView: 1.5,
  };

  return (
    <div className={styles.slideContainer}>
      <IonRow>
        <IonCol>
          <h3 className={styles.slidesTitle}>{title}</h3>
          <p>{description}</p>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonSlides options={slideOptions}>
            {data.map(item => (
              <IonSlide key={item.id}>
                <IonCard className={styles.card}>
                  <IonImg src={item.image} className={styles.image} />
                  <div className={styles.overlay}>
                    <h2>{item.name}</h2>
                  </div>
                </IonCard>
              </IonSlide>
            ))}
          </IonSlides>
        </IonCol>
      </IonRow>
    </div>
  );
}

export default Slides;
