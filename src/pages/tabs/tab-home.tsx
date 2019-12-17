
import React from 'react';
import './tab-home.css';

import { VideosByLocalAndTime } from '../videos-overview/videos-bylocal-and-time'

//14053231724 20080654791

export const Tab1 = (props: any) => {

  // @ts-ignore
  //console.log('Propos Tab1:', props.match.params)
  return <VideosByLocalAndTime url_parms={props.match.params}></VideosByLocalAndTime>;
  /*   return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab One</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { }}>
                <IonIcon icon={search} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard className="welcome-card">
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardSubtitle>Get Started</IonCardSubtitle>
              <IonCardTitle>Welcome to Ionic</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Now that your app has been created, you'll want to start building out features and
                components. Check out some of the resources below for next steps.
              </p>
            </IonCardContent>
          </IonCard>
  
          <IonList lines="none">
            <IonListHeader>
              <IonLabel>Resources</IonLabel>
            </IonListHeader>
            <IonItem onClick={() => { api.teste(); }}>
              <IonIcon slot="start" color="medium" icon={book} />
              <IonLabel>Ionic Documentation</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
              <IonIcon slot="start" color="medium" icon={build} />
              <IonLabel>Scaffold Out Your App</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
              <IonIcon slot="start" color="medium" icon={grid} />
              <IonLabel>Change Your App Layout</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
              <IonIcon slot="start" color="medium" icon={colorFill} />
              <IonLabel>Theme Your App</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    ); */
};

export default Tab1;
