
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext,FavoritePathModel,AppStateReducer } from '../../App';
import './Tab1.css';//tab-home
import { api } from '../../application/resource.instance'
import Tab2 from '../tabs/Tab2';
import Tab3 from '../tabs/Tab3';

import { VideosByLocalAndTime } from '../videos-overview/videos-bylocal-and-time'
import { Redirect } from "react-router-dom";

//14053231724 20080654791

export const Tab1 = (props: any) => {
  const { state, dispatch } = useContext(AppContext);
  //console.log('all state: ', state)

  let [videos, setVideos] = useState([]);

  const fetchVideos = useCallback(async () => {
    //console.log('fetchVideos!')
    //const [vd, err] = await api.latest_bylocalandweekday_videos(0, 100, props.url_parms.country, props.url_parms.state, props.url_parms.city, props.url_parms.customer, props.url_parms.local, props.url_parms.weekday, props.url_parms.start, props.url_parms.end)
    //if (err) { alert("Ops! Algo não ocorreu bem. Tente novamente!") }
    //else { setVideos(vd.body) }
  }, []);

  useEffect(() => {
    console.log('all state: ', state)
    fetchVideos();
    let path: FavoritePathModel = {
      country:"bra",
      state:"sc",
      city:"saojose",
      customer:"balduino",
      local:"q2",
      weekday:"2",
      start:"0:00",
      end:"23:59"
    }
    //dispatch({
    //  type:"setFavoritePath",
    //  favorite_path:path
    //});

  }, [state]);

  // @ts-ignore
  //console.log('Propos Tab1:', props.match.params.country)
  return (
    props.match.params && props.match.params.end ?
    <VideosByLocalAndTime url_parms={props.match.params}></VideosByLocalAndTime>
    //: state.session.favorite_path ? <Redirect to={`tab1/${state.session.favorite_path.country}/${state.session.favorite_path.state}/${state.session.favorite_path.city}/${state.session.favorite_path.customer}/${state.session.favorite_path.local}/${state.session.favorite_path.weekday}/${state.session.favorite_path.start}/${state.session.favorite_path.end}`} /> : <Redirect to="/tab2" />
    : state.session.favorite_path ? <VideosByLocalAndTime url_parms={state.session.favorite_path}></VideosByLocalAndTime> : <Redirect to="/tab2" />
    );
};

export default Tab1;
