import { IonContent, IonGrid, IonPage } from "@ionic/react";
import { Header } from "../components/Header";
import { SearchBar, SearchCard, Destinations } from "../components/SearchSection";

import styles from './Pages.module.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header title="Search" />

        <main className={styles.mainContainer}>
          <SearchBar />

          <IonGrid>
            <SearchCard />
            <Destinations />
          </IonGrid>
        </main>

      </IonContent>
    </IonPage>
  );
};

export default Search;