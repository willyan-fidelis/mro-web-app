import React, { useContext, useEffect, useState, useCallback } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { VideoPlayer } from '../../components/old/video-player/video-player'
import { AppContext } from '../../App';
import { VideoModel } from '../../application/api'
import { api } from '../../application/resource.instance'


const VideoDetails = (props: any) => {
  console.log("videos details props: ", props.match.params.videoid)

  let initVideo: VideoModel = {
    OID: "",
    city_name: "0",
    country_name: "0",
    customer_name: "0",
    deslikes_rate: 0,
    edited_filename: "0",
    edited_fullname: "0",
    likes_rate: 0,
    local_OID: 3,
    local_name: "",
    state_name: "",
    thumbnail_img_fullname: "",
    total_rate: 0,
    user_video_rate: null,
    view_count: 0,
    when: "",
    when_date: "",
    when_time: "",
  }

  let [video, setVideo] = useState(initVideo);

  // @ts-ignore
  const { state, dispatch } = useContext(AppContext);

  const fetchVideo = useCallback(async () => {
    console.log('fetchVideos!')
    //const ret = await fetch('https://dog.ceo/api/breeds/image/random/10');
    // @ts-ignore
    //const [vd, err] = await api.highest_rated_videos(0, 5)
    const [vd, err] = await api.by_id_video(props.match.params.videoid)
    //console.log(vd)
    if (err) { setVideo(state.session.video_player_props) }
    else { setVideo(vd.body) }
  }, []);

  useEffect(() => {
    fetchVideo();
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
