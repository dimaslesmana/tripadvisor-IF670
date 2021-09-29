import { IonContent, IonGrid, IonPage } from "@ionic/react";
import { Header } from "../components/Header";
import { Hero, Slides } from '../components/ExploreSection';
import { slideData } from "../helpers/data";

import styles from './Pages.module.css';

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header title="Explore" />
        <main className={styles.mainContainer}>
          <IonGrid>
            <Hero
              title="Goodbye to crushing heat and crushing crowds"
              description="Why fall is the best time to visit our national parks"
              buttonText="Get the intel"
              background="./assets/images/mountain-lake.jpg" />

            <Slides title="Small batch stays" description="Cool cities, cooler boutique hotels" data={slideData.firstSlide} />
            <Slides title="Plan your next escape" description="Family-friendly spots to explore" data={slideData.secondSlide} />

            <Hero
              title="Explore Las Vegas, fork first"
              description="Our guide to the top celebrity chef restaurants in Vegas"
              buttonText="Check them out"
              background="./assets/images/food.jpg" />

            <Hero
              title="Pack that weekender bag"
              description="Our guide to last-minute road trips you can do right now"
              buttonText="Read the guide"
              background="./assets/images/mountain.jpg" />

            <Hero
              title="From dream trips to Michelin meals"
              description="All the ways we're celebrating Hispanic Heritage Month"
              buttonText="Read the guide"
              background="./assets/images/dream-trips.jpg" />
          </IonGrid>
        </main>

      </IonContent>
    </IonPage>
  );
};

export default Explore;