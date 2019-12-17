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
import { home, trophy, contact, star, logoBuffer } from 'ionicons/icons';
import videos from './pages/tabs/tab-home';
import Tab2 from './pages/tabs/Tab2';
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
import { useLocalStorage } from './components/localstorage/useLocalStorage';
require('dotenv').config()

export const AppContext = createContext(null);

const initialState: { db: any, session: SessionModel | {} } = {
  db: { hello: 'word' },
  session: { video_player_props: null },
}

export interface SessionModel {
  video_player_props: any
}

const reducer = (state: any, action: any) => {
  if (action.type === 'setVideoPlayerProps') {
    return { ...state, session: { ...state.session, video_player_props: action.video_player_props } }
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
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={home} />
                <IonLabel>Inicio</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={trophy} />
                <IonLabel>Em Alta</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={star} />
                <IonLabel>Inscrições</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/tab4">
                <IonIcon icon={contact} />
                <IonLabel>Conta</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/tab4">
                <IonIcon icon={logoBuffer} />
                <IonLabel>Histórico</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  )
};

export default App;
