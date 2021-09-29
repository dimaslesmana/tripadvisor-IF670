import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { Redirect, Route } from 'react-router-dom';
import { heartOutline, homeOutline, pencilOutline, searchOutline } from "ionicons/icons";

import Explore from "../../pages/Explore";
import Search from "../../pages/Search";
import Plan from "../../pages/Plan";
import Review from "../../pages/Review";

const NavTab: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/plan" component={Plan} />
        <Route exact path="/review" component={Review} />

        <Redirect exact path="/" to="/explore" />
      </IonRouterOutlet>

      <IonTabBar color="light" slot="bottom">
        <IonTabButton tab="explore" href="/explore">
          <IonIcon icon={homeOutline} />
          <IonLabel>Explore</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/search">
          <IonIcon icon={searchOutline} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>

        <IonTabButton tab="plan" href="/plan">
          <IonIcon icon={heartOutline} />
          <IonLabel>Plan</IonLabel>
        </IonTabButton>

        <IonTabButton tab="review" href="/review">
          <IonIcon icon={pencilOutline} />
          <IonLabel>Review</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default NavTab;
