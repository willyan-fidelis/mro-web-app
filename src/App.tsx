import React, { createContext, useEffect, useReducer } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, trophy, contact, star, logoBuffer,search,film } from 'ionicons/icons';
import videos from './pages/tabs/Tab1';
import Tab2,{StateModel,CityModel,CustomerModel,LocalModel,WeekDaysEnum} from './pages/tabs/Tab2';
import Tab3 from './pages/tabs/Tab3';
import Tab4 from './pages/tabs/Tab4';
import Details from './pages/tabs/Details';
import VideoDetails from './pages/video-player/Details';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { instance_initialize } from './application/resource.instance'
/* Theme variables */
import './theme/variables.css';
import { useLocalStorage } from './components/old/localstorage/useLocalStorage';
require('dotenv').config()

export const AppContext = createContext<{state:AppStateReducer,dispatch:any}>(null);

export interface AppStateReducer{
  db: { hello: string },
  session: { video_player_props: any, favorite_path: FavoritePathModel, last_saved:LastSavedModel },
}
const initialState: AppStateReducer | {} = {
  db: { hello: 'word' },
  session: { video_player_props: null, favorite_path: null, last_saved: null },
}

export interface FavoritePathModel {
    country: string;
    state: string;
    city: string;
    customer: string;
    local: string;
    weekday: string;
    start: string;
    end: string;
}
export interface LastSavedModel{state_region:StateModel,city:CityModel,customer:CustomerModel,local:LocalModel,weekday:WeekDaysEnum,starttime:string,endtime:string}

const reducer = (state: AppStateReducer, action: any): AppStateReducer => {
  if (action.type === 'setVideoPlayerProps') {
    return { ...state, session: { ...state.session, video_player_props: action.video_player_props } }
  }
  if (action.type === 'setFavoritePath') {
    return { ...state, session: { ...state.session, favorite_path: action.favorite_path } }
  }
  if (action.type === 'setLastSaved') {
    return { ...state, session: { ...state.session, last_saved: action.last_saved } }
  }
  return state;
}

const AppContextProvider = (props: any) => {


  const [data, setData] = useLocalStorage('datax3', initialState);

  let [state, dispatch] = useReducer(reducer, data);

  let value = { state, dispatch };

  useEffect(() => {
    console.log('state: ', state)

    //let st = { db: state.db, session: {} }
    //setData(st);
    setData(state);
  }, [state, setData]);


  return (
    // @ts-ignore
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}


const App = () => {
  //Inicia todas as instancias da aplicação:
  instance_initialize();
  return (

    <AppContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1" component={videos} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/tab2/details" component={Details} />
              <Route path="/tab2/details/:item" component={Details} />
              <Route path="/tab3" component={Tab3} />
              <Route path="/tab4" component={Tab4} />
              <Route path="/tab1/:country/:state/:city/:customer/:local/:weekday/:start/:end" component={videos} />
              <Route path="/video-details/:videoid" component={VideoDetails} />
              <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="top">

              {/* Basta comentar esses IonTabButton para sumir com os tabs inferiores: */}
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={film} />
                <IonLabel>Replays</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={search} />
                <IonLabel>Procurar</IonLabel>
              </IonTabButton>


            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  )
};

export default App;
