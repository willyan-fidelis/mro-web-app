import React from 'react';
import { IonLabel,IonItem,IonToggle,IonToast,IonLoading,IonAlert } from '@ionic/react';
//import {Styled_ItemDivider} from './styles'
import styled from 'styled-components';

interface IComponentProps_ToggleItem {
  label?:string;
  checked?:boolean;
  disabled?:boolean;
  color?:string;
  key?: string | number;

  onChange?:(value:boolean) => void;
  onClick?:(value:boolean) => void;
  children?: React.ReactNode;
}

const ToggleItemStyled = styled.div`

  `;

export const ToggleItem = (props:IComponentProps_ToggleItem) => {
  return (
      <ToggleItemStyled key={props.key}>
        <IonItem>
          {props.label?<IonLabel>{props.label}</IonLabel>:null}
          <IonToggle
          checked={props.checked}
          disabled={props.disabled}
          color={props.color}
          onIonChange={(e)=>{props.onChange != null && props.onChange(e.detail.checked)}}
          onClick={()=>{props.onClick != null && props.onClick(props.checked?true:false)}}
          />
        </IonItem>
      </ToggleItemStyled>
    );
}