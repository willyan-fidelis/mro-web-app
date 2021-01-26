import React from 'react';
import { IonFabButton,IonFab,IonFabList,IonIcon } from '@ionic/react';
import {Styled_ItemDivider} from './styles'



interface IComponentProps_Fab {
    vertical:"bottom" | "top" | "center";
    horizontal:"center" | "start" | "end";
    icon:any;
    side?:"top" | "start" | "end" | "bottom";
    edge?:boolean;
    color?:string;
    fabButtons?: Array<IComponentProps_FabButton>;

    click?:() => void;
    children?: React.ReactNode;
 }
 interface IComponentProps_FabButton {
  icon:any;
  color?:string;

  click?:() => void;
  children?: React.ReactNode;
}

export const Fab = (props:IComponentProps_Fab) => {
    return (
        <>
          <IonFab onClick={()=>{props.click != null && props.click()}} vertical={props.vertical} horizontal={props.horizontal} edge={props.edge} slot="fixed">
            <IonFabButton color={props.color}>
              <IonIcon icon={props.icon} />
            </IonFabButton>
            {
              props.fabButtons?
              (
                <IonFabList side={props.side}>
                {
                  props.fabButtons.map((val,index,arr)=>{
                    return(
                      <IonFabButton key={index}><IonIcon onClick={()=>{val.click != null && val.click()}} color={val.color} icon={val.icon} /></IonFabButton>
                    )
                  })
                }
                </IonFabList>
              )
              
              : null
            }
          </IonFab>
        </>
      );
}