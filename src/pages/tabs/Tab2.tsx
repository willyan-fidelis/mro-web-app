import { Input} from '../../components/ionic/input/input'
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IonButton,IonItemDivider,IonListHeader,IonSelect,IonSelectOption,IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ButtonAppBar } from '../../components/old/menu/main-bar'
import { AppContext,FavoritePathModel,AppStateReducer,LastSavedModel } from '../../App';
import { Redirect } from "react-router-dom";

export interface LocalModel{nickname:string,name:string}
export interface CustomerModel{nickname:string,name:string,local:Array<LocalModel>}
export interface CityModel{nickname:string,name:string,customer:Array<CustomerModel>}
export interface StateModel{nickname:string,name:string,city:Array<CityModel>}
export interface CountryModel{nickname:string,name:string,state:Array<StateModel>}
export enum WeekDaysEnum{
  domingo = 1,
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado
}
export interface PlacesModel{
  country:Array<CountryModel>; //{state:{nickname:string,name:string,data:{city:{customer:[]}} }}
}

const Tab2: React.FC = () => {

  const { state, dispatch } = useContext(AppContext);
  
  const none:string = "Selecione";

  const country_nickname: string = "bra"

  //const [country_stg, setCountry_stg] = useState<string>(none);
  //const [country, setCountry] = useState<StateModel>();

  const [state_stg, setState_stg] = useState<string>(none);
  const [state_region, setState_region] = useState<StateModel>();

  const [city_stg, setCity_stg] = useState<string>(none);
  const [city, setCity] = useState<CityModel>();

  const [customer_stg, setCustomer_stg] = useState<string>(none);
  const [customer, setCustomer] = useState<CustomerModel>();

  const [local_stg, setLocal_stg] = useState<string>(none);
  const [local, setLocal] = useState<LocalModel>();

  const [weekday_numb, setWeekday_numb] = useState<number>(0);
  const [weekday, setWeekday] = useState<WeekDaysEnum>();

  const [starttime, setStarttime] = useState<string>();

  const [endtime, setEndtime] = useState<string>();

  const [redirect, setredirect] = useState<boolean>(false);

  useEffect(() => {
    load();
  }, []);

  function Save(){
    let path: FavoritePathModel = {
      country:country_nickname,
      state:state_region.nickname,
      city:city.nickname,
      customer:customer.nickname,
      local:local.nickname,
      weekday:weekday.toString(),
      start:starttime,
      end:endtime
    }
    dispatch({
      type:"setFavoritePath",
      favorite_path:path
    });
    let last: LastSavedModel = {state_region,city,customer,local,starttime,endtime,weekday}
    dispatch({
      type:"setLastSaved",
      last_saved:last
    });
  }
  function load(){
    if (state && state.session && state.session.last_saved) {
      setState_stg(state.session.last_saved.state_region.nickname);
      setState_region(state.session.last_saved.state_region);

      setCity_stg(state.session.last_saved.city.nickname);
      setCity(state.session.last_saved.city);

      setCustomer_stg(state.session.last_saved.customer.nickname);
      setCustomer(state.session.last_saved.customer);

      setLocal_stg(state.session.last_saved.local.nickname);
      setLocal(state.session.last_saved.local);

      setWeekday_numb(state.session.last_saved.weekday);
      setWeekday(state.session.last_saved.weekday);

      setStarttime(state.session.last_saved.starttime);

      setEndtime(state.session.last_saved.endtime);

    }
  }

  let places:PlacesModel = {
    country:[
      {
        nickname:"bra",name:"Brasil",
        state:[
          {
            nickname:"sc",name:"Santa Catarina",
            city:[
              {
                nickname:"join",name:"Joinville",
                customer:[
                  {
                    nickname:"copa",name:"Copacabana",
                    local:[
                      {nickname:"q1",name:"Quadra 1"},
                      {nickname:"q2",name:"Quadra 2"}
                    ]
                  },
                  {
                    nickname:"Trevo",name:"trevo",
                    local:[
                      {nickname:"q1",name:"Quadra 1"}
                    ]
                  }
                ]
              },
              {
                nickname:"saojose",name:"São José",
                customer:[
                  {
                    nickname:"balduino",name:"Balduino",
                    local:[
                      {nickname:"q1",name:"Quadra 1"},
                      {nickname:"q2",name:"Quadra 2"}
                    ]
                  }
                ]
              }
            ]
          },
        ]
      }
    ]
  }
  return (
    <IonPage>
      <IonHeader>
        {/* <ButtonAppBar>
        </ButtonAppBar> */}
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>
              Escolha o local da quadra
            </IonLabel>
          </IonListHeader>
          {
            redirect ?
            <Redirect to="/tab1"></Redirect>
            : null
          }
          <IonItem>
            <IonLabel>Estado</IonLabel>
            <IonSelect value={state_stg} placeholder="Select One" onIonChange={(e) => {let a = places.country.find((v,i,arr)=>{return v.nickname == country_nickname}).state.find((v,i,arr)=>{return v.nickname == e.detail.value});console.log(a);setState_stg(e.detail.value);setState_region(a);}}>
              <IonSelectOption value={none}>{none}</IonSelectOption>
              {
                places.country.find((v,i,arr)=>{return v.nickname == country_nickname}).state.map((_state,_s_index,_s_arr)=>(
                  <IonSelectOption key={_s_index} value={_state.nickname}>{_state.name}</IonSelectOption>
                ))
              }
            </IonSelect>
          </IonItem>

          {/* Seleção cidade e demais campos: */}
          {
            state_region ?
            <>
              <IonItem>
                <IonLabel>Cidade</IonLabel>
                <IonSelect value={city_stg} placeholder="Select One" onIonChange={(e) => {let a = state_region.city.find((v,i,arr)=>{return v.nickname == e.detail.value});console.log(a);setCity_stg(e.detail.value);setCity(a);}}>
                  <IonSelectOption value={none}>{none}</IonSelectOption>
                  {
                    state_region.city.map((_city,_c_index,_c_arr)=>(
                      <IonSelectOption key={_c_index} value={_city.nickname}>{_city.name}</IonSelectOption>
                    ))
                  }
                </IonSelect>
              </IonItem>
              <>
                {
                  city ?
                  <>
                    <IonItem>
                      <IonLabel>Centro Esportivo</IonLabel>
                      <IonSelect value={customer_stg} placeholder="Select One" onIonChange={(e) => {let a = city.customer.find((v,i,arr)=>{return v.nickname == e.detail.value});console.log(a);setCustomer_stg(e.detail.value);setCustomer(a);}}>
                        <IonSelectOption value={none}>{none}</IonSelectOption>
                        {
                          city.customer.map((_customer,_cust_index,_cust_arr)=>(
                            <IonSelectOption key={_cust_index} value={_customer.nickname}>{_customer.name}</IonSelectOption>
                          ))
                        }
                      </IonSelect>
                    </IonItem>
                    {
                      customer ?
                      <>
                        <IonItem>
                          <IonLabel>Quadra</IonLabel>
                          <IonSelect value={local_stg} placeholder="Select One" onIonChange={(e) => {let a = customer.local.find((v,i,arr)=>{return v.nickname == e.detail.value});console.log(a);setLocal_stg(e.detail.value);setLocal(a);}}>
                            <IonSelectOption value={none}>{none}</IonSelectOption>
                            {
                              customer.local.map((_local,_loc_index,_loc_arr)=>(
                                <IonSelectOption key={_loc_index} value={_local.nickname}>{_local.name}</IonSelectOption>
                              ))
                            }
                          </IonSelect>
                        </IonItem>
                        {
                          local ?
                          <>
                            <IonItem>
                              <IonLabel>Dia da Semana</IonLabel>
                              <IonSelect value={weekday_numb} placeholder="Select One" onIonChange={(e) => {setWeekday_numb(e.detail.value);setWeekday(Number(e.detail.value));}}>
                                <IonSelectOption value={0}>{none}</IonSelectOption>
                                <IonSelectOption value={1}>Domingo</IonSelectOption>
                                <IonSelectOption value={2}>Segunda</IonSelectOption>
                                <IonSelectOption value={3}>Terça</IonSelectOption>
                                <IonSelectOption value={4}>Quarta</IonSelectOption>
                                <IonSelectOption value={5}>Quinta</IonSelectOption>
                                <IonSelectOption value={6}>Sexta</IonSelectOption>
                                <IonSelectOption value={7}>Sabado</IonSelectOption>
                              </IonSelect>
                            </IonItem>
                            {
                              weekday ?
                              <>
                                <Input label='Inicio' type="time" value={starttime} change={(data)=>{setStarttime(data)}}></Input>
                                {
                                  starttime ?
                                  <>
                                    <Input label='Fim' type="time" value={endtime} change={(data)=>{setEndtime(data)}}></Input>
                                    {
                                      endtime ?
                                      <>
                                        <IonButton onClick={() =>{Save();setredirect(true);} } expand="block">Salvar e ver videos agora!</IonButton>
                                      </>
                                      : null
                                    }
                                  </>
                                  : null
                                }
                              </>
                              : null
                            }
                          </>
                          : null
                        }
                      </>
                      : null
                    }
                  </>
                : null
                }
              </>
            </>
            : null
          }

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;