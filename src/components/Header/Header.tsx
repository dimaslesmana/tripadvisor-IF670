import { IonAvatar, IonImg, IonTitle, IonToolbar } from "@ionic/react";
import { Chip } from '../ExploreSection';

import styles from './Header.module.css';

const Header: React.FC<{
  title: 'Explore' | 'Search' | 'Plan' | 'Review',
}> = ({ title }) => {
  if (title === 'Explore') {
    return (
      <header className={styles.headerBackground}>
        <IonToolbar color="transparent">
          <IonTitle className={styles.headerTitle}>{title}</IonTitle>
          <IonAvatar slot="end" className={styles.userAvatar}>
            <IonImg src="https://i.pravatar.cc/300" alt="My Avatar" />
          </IonAvatar>
        </IonToolbar>
        <Chip />
      </header>
    );
  }

  return (
    <header>
      <IonToolbar color="transparent">
        <IonTitle className={styles.headerTitle}>{title}</IonTitle>
      </IonToolbar>
    </header>
  );
};

export default Header;
