import React, { useContext, useEffect, useState } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { VideoPlayer } from '../../components/video-player/video-player'
import { AppContext } from '../../App';
import { VideoModel } from '../../application/api'
export interface PropsVideoDetails {

}


const VideoDetails = (props: any) => {
  //console.log("videos details props: ", props)

  let initVideo: VideoModel = {
    OID: "fe19642f9afdf3ba80bfad9e069dc689",
    city_name: "Joinville",
    country_name: "Brasil",
    customer_name: "Copacabana",
    deslikes_rate: 0,
    edited_filename: "mmm",
    edited_fullname: "ccc",
    likes_rate: 0,
    local_OID: 3,
    local_name: "Qudra 2",
    state_name: "Santa Catarina",
    thumbnail_img_fullname: "https://testewillyan.s3-sa-east-1.amazonaws.com/jogada8.jpeg",
    total_rate: 0,
    user_video_rate: null,
    view_count: 0,
    when: "2019-11-29 18:06:08",
    when_date: "29/11/2019",
    when_time: "18:06",
  }

  let [video, setVideo] = useState(initVideo);

  // @ts-ignore
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setVideo(state.session.video_player_props)
    console.log('video: ', video)
  }, [state.session.video_player_props]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>{video.customer_name} - {video.local_name} </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <VideoPlayer data={video}></VideoPlayer>
      </IonContent>
    </IonPage>
  );
};

export default VideoDetails;
