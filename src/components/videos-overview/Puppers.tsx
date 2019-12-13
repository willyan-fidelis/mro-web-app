import { ButtonAppBar } from '../../components/menu/main-bar'
import React, { useCallback, useContext, useEffect, useState } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonCard,
  IonCardContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonList,
  IonRow,
  IonCol,
  IonItem,
  IonLabel

} from '@ionic/react';
import { AppContext } from '../../App';
import { search, pin } from 'ionicons/icons';
import { useSwipeable, Swipeable } from 'react-swipeable'
import './Tab1.css';
import { api } from '../../application/resource.instance'
var dateFormat = require('dateformat');


export const Puppers: React.FC = () => {

  // @ts-ignore
  const { state, dispatch } = useContext(AppContext);

  let [videos, setVideos] = useState([]);

  const fetchPuppers = useCallback(async () => {
    //const ret = await fetch('https://dog.ceo/api/breeds/image/random/10');
    // @ts-ignore
    const [vd] = await api.highest_rated_videos(0, 5)
    console.log(vd)
    // @ts-ignore
    setVideos(vd.body)
    //const json = await ret.json();
    // dispatch({
    //   type: 'setPuppers',
    //   puppers: json.message
    // })
  }, [dispatch]);

  useEffect(() => {
    fetchPuppers();
  }, []);

  return (
    <Swipeable onSwipedRight={() => alert("Direita")} onSwipedLeft={() => alert("Esquerda")}>
      <IonPage>
        <IonHeader>
          <ButtonAppBar>
          </ButtonAppBar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonGrid fixed>
              <IonRow align-items-stretch>
                {videos.map((video: any, index: number, array: Array<any>) => (
                  <IonCol align-self-stretch size="12" size-md="6" key={video}>
                    <IonCard className="my-card" key={index}>
                      <img /* height='300' */ src={video.thumbnail_img_fullname} />
                      <IonItem>

                        <IonLabel>{video.city_name} - {video.state_name}</IonLabel>
                        <IonIcon icon={pin} slot="end" />
                      </IonItem>

                      <IonCardContent>
                        {video.customer_name} - {video.local_name}  <br />
                        Data: {dateFormat(new Date(video.when), "dd/mm/yyyy")} <br />
                        Hora: {dateFormat(new Date(video.when), "HH:MM")} <br />
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </IonList>
        </IonContent>
      </IonPage>
    </Swipeable>
  );

};

/* function abc() {
  return (
    <IonList>
      <IonGrid fixed>
        <IonRow align-items-stretch>
          {state.puppers.map((pupper: any) => (
            <IonCol size="12" size-md="6" key={pupper}>
              <IonCard key={pupper}>
                <IonCardContent>
                  <img src={pupper} />
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonList>
  )
} */

//export default Puppers;