//import { RecipeReviewCard } from '../components/video-player/video-player'
import React from 'react';
import { IonCardContent, IonCard, IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';
//import { useVideo } from 'react-use';
//import "node_modules/video-react/dist/video-react.css"; // import css
//import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import './Tab4.css';

const Tab3Page: React.FC = () => {

  //console.log(controls, state, ref)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                controls={true}
                url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
                width='100%'
                height='100%'
              />
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
