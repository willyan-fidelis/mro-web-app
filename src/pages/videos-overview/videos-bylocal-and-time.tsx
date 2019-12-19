import { ButtonAppBar } from '../../components/menu/main-bar'
import React, { useCallback, useContext, useEffect, useState } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonGrid,
  IonList,
  IonRow,
  IonCol,
  IonItem,
  IonLabel

} from '@ionic/react';
import { AppContext } from '../../App';
import { pin } from 'ionicons/icons';
import { Swipeable } from 'react-swipeable'
import './videos-bylocal-and-time.css';
import { api } from '../../application/resource.instance'
export interface PropsVideosByLocalAndTime {
  url_parms: {
    country: string;
    state: string;
    city: string;
    customer: string;
    local: string;
    weekday: string;
    start: string;
    end: string;
  }
}

export const VideosByLocalAndTime = (props: PropsVideosByLocalAndTime) => {
  //console.log('Propos Videos ByLocal:', props)
  // @ts-ignore
  const { state, dispatch } = useContext(AppContext);
  //console.log('all state: ', state)

  let [videos, setVideos] = useState([]);

  const fetchVideos = useCallback(async () => {
    console.log('fetchVideos!')
    //const ret = await fetch('https://dog.ceo/api/breeds/image/random/10');
    // @ts-ignore
    //const [vd, err] = await api.highest_rated_videos(0, 5)
    const [vd, err] = await api.latest_bylocalandweekday_videos(0, 100, props.url_parms.country, props.url_parms.state, props.url_parms.city, props.url_parms.customer, props.url_parms.local, props.url_parms.weekday, props.url_parms.start, props.url_parms.end)
    //console.log(vd)
    if (err) { alert("Ops! Algo não ocorreu bem. Tente novamente!") }
    else { setVideos(vd.body) }
  }, []);

  useEffect(() => {
    fetchVideos();
    // dispatch({
    //   type: 'setSession',
    //   session: { hey: inputValue }
    // })
  }, []);

  return (
    <Swipeable onSwipedRight={() => alert("Direita")} onSwipedLeft={() => alert("Esquerda")}>
      <IonPage>
        <IonHeader onClick={() => { fetchVideos() }}>
          <ButtonAppBar>
          </ButtonAppBar>
        </IonHeader>
        <IonContent>
          {
            //@ts-ignore
            //(<ToastExample abc={() => { TesteXXX() }}></ToastExample>)
          }
          <IonList>
            <IonGrid fixed>
              <IonRow align-items-stretch>
                {videos.map((video: any, index: number, array: Array<any>) => (
                  <IonCol align-self-stretch size="12" size-md="6" key={index}>
                    <IonCard onClick={() => {
                      dispatch({
                        type: 'setVideoPlayerProps',
                        video_player_props: video
                      })
                    }} routerLink={`/video-details/${video.OID}`} className="my-card" key={index}>
                      <img /* height='300' */ src={video.thumbnail_img_fullname} />
                      <IonItem>

                        <IonLabel>{video.city_name} - {video.state_name}</IonLabel>
                        <IonIcon icon={pin} slot="end" />
                      </IonItem>

                      <IonCardContent>
                        {video.customer_name} - {video.local_name}  <br />
                        Data: {video.when_date} <br />
                        Hora: {video.when_time} <br />
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