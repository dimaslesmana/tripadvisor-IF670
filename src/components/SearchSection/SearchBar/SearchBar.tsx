import { IonSearchbar, IonToolbar } from "@ionic/react";

import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  return (
    <IonToolbar className={styles.searchToolbar}>
      <IonSearchbar placeholder="Where to?" color="light" className={styles.searchBar} />
    </IonToolbar>
  );
};

export default SearchBar;
