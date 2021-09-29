import React, { useState } from "react";
import { IonContent, IonGrid, IonPage } from "@ionic/react";
import { Header } from "../components/Header";
import { SegmentController, TripsSegment, SavesSegment, BookingsSegment } from "../components/PlanSection";

import styles from './Pages.module.css';

const Plan: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<'trips' | 'saves' | 'bookings'>('trips');

  const selectSegmentHandler = (value: 'trips' | 'saves' | 'bookings') => {
    setSelectedSegment(value);
  };

  return (
    <IonPage>
      <IonContent>
        <Header title="Plan" />

        <main className={styles.mainContainer}>
          <IonGrid>
            <SegmentController selectedValue={selectedSegment} onSelectValue={selectSegmentHandler} />

            {(selectedSegment === 'trips') && <TripsSegment />}
            {(selectedSegment === 'saves') && <SavesSegment />}
            {(selectedSegment === 'bookings') && <BookingsSegment />}
          </IonGrid>
        </main>

      </IonContent>
    </IonPage>
  );
};

export default Plan;