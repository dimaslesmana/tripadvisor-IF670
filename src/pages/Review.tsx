import { IonContent, IonGrid, IonPage } from "@ionic/react";
import { Header } from "../components/Header";
import { ReviewCard } from '../components/ReviewSection';

import styles from './Pages.module.css';

const Review: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header title="Review" />

        <main className={styles.mainContainer}>
          <IonGrid>
            <ReviewCard buttonText="Write a review" image="./assets/images/review-1.jpg" />
            <ReviewCard buttonText="Upload a photo" image="./assets/images/review-2.jpg" />
          </IonGrid>
        </main>

      </IonContent>
    </IonPage>
  );
};

export default Review;