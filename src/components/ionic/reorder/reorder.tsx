import React from 'react';
import { IonIcon,IonReorderGroup,IonReorder,IonLabel,IonItem } from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';
import styled from 'styled-components';


interface IComponentProps_ReorderList {
  list:Array<string>,
  slot?: "end" | "start";
  icon?:any;

  onClick?:(index:number) => void;
  onItemReorder?:(from:number,to:number) => Promise<any>;
  children?: React.ReactNode;
}

const ItemSelectStyled = styled.div`

  `;
export const ReorderList = (props:IComponentProps_ReorderList) => {
  return (
      <ItemSelectStyled>
          <IonReorderGroup disabled={false} onIonItemReorder={async(event: CustomEvent<ItemReorderEventDetail>)=>{if(props.onItemReorder != null) {await props.onItemReorder(event.detail.from,event.detail.to);event.detail.complete(props.list)};}}>
          {
            props.list.map((val,index,arr)=>{
              return(
                props.icon || props.slot ?
                <IonItem key={index} onClick={()=>{props.onClick != null && props.onClick(index)}}>
                  
                  {
                    props.icon ?
                    /* Custom Icon */
                    <>
                      <IonLabel>{val}</IonLabel>
                      <IonReorder slot={props.slot}>
                        {
                          props.icon ?
                          <IonIcon icon={props.icon} />
                          : null
                        }
                      </IonReorder>
                    </>
                    :
                    /* Default Icon */
                    <>
                      <IonReorder slot={props.slot} />
                      <IonLabel>{val}</IonLabel>
                    </>
                  }
                  
                </IonItem>
                :
                /*  Items wrapped in a reorder, entire item can be dragged */
                <IonReorder key={index} onClick={()=>{props.onClick != null && props.onClick(index)}}>
                  <IonItem>
                    <IonLabel>{val}</IonLabel>
                  </IonItem>
                </IonReorder>
              )
            })
          }
        </IonReorderGroup>
      </ItemSelectStyled>
    );
}