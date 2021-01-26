import React from 'react';
import { IonToast,IonLoading,IonAlert } from '@ionic/react';
//import {Styled_ItemDivider} from './styles'
import styled from 'styled-components';

function AlertButton(text:string,isCancel:boolean,handler?:(data:any) => void){
  return {
    text,
    role: isCancel?'cancel':undefined,
    handler: (data:any) => {
      if(handler) handler(data);
    }
  }
}

interface IComponentProps_AlertOkCancel {
  isOpen:boolean;
  title:string;
  message:string;
  backdropDismiss?:boolean;
  okBtnText?:string;
  cancelBtnText?:string;
  key?: string | number;  

  onDidDismiss?:() => void;
  onCancel?:() => void;
  onOk?:() => void;
  children?: React.ReactNode;
}
const AlertOkCancelStyled = styled.div`

  `;
export const AlertOkCancel = (props:IComponentProps_AlertOkCancel) => {
  return (
      <AlertOkCancelStyled key={props.key}>
        <IonAlert
          isOpen={props.isOpen}
          onDidDismiss={()=>{props.onDidDismiss != null && props.onDidDismiss()}}
          header={props.title}
          message={props.message}
          backdropDismiss={props.backdropDismiss}
          buttons={[
            AlertButton(props.cancelBtnText||'Cancelar',true,(data)=>{props.onCancel != null && props.onCancel()}),
            AlertButton(props.okBtnText    ||'Ok',     false,(data)=>{props.onOk != null && props.onOk()})
          ]}
        />
      </AlertOkCancelStyled>
    );
}

interface IComponentProps_AlertOk {
  isOpen:boolean;
  title:string;
  message:string;
  backdropDismiss?:boolean;
  okBtnText?:string;
  key?: string | number;  

  onDidDismiss?:() => void;
  onOk?:() => void;
  children?: React.ReactNode;
}
const AlertOkStyled = styled.div`

  `;
export const AlertOk = (props:IComponentProps_AlertOk) => {
  return (
      <AlertOkStyled key={props.key}>
        <IonAlert
          isOpen={props.isOpen}
          onDidDismiss={()=>{props.onDidDismiss != null && props.onDidDismiss()}}
          header={props.title}
          message={props.message}
          backdropDismiss={props.backdropDismiss}
          buttons={[
            AlertButton(props.okBtnText||'Ok',false,(data)=>{props.onOk != null && props.onOk()})
          ]}
        />
      </AlertOkStyled>
    );
}

interface IComponentProps_Loading {
  isOpen:boolean;
  message?:string;
  backdropDismiss?:boolean;
  duration?:number;
  key?: string | number;  

  onDidDismiss?:() => void;
  children?: React.ReactNode;
}

const LoadingStyled = styled.div`

  `;
export const Loading = (props:IComponentProps_Loading) => {
  return (
      <LoadingStyled key={props.key}>
        <IonLoading
          isOpen={props.isOpen}
          onDidDismiss={()=>{props.onDidDismiss != null && props.onDidDismiss()}}
          message={props.message}
          backdropDismiss={props.backdropDismiss}
          duration={props.duration}
        />
      </LoadingStyled>
    );
}

interface IComponentProps_ToastButton {
  side?:"start" | "end";
  icon?:any;
  text?:string;
  role?: "cancel";

  handler?:() => void;
}

interface IComponentProps_Toast {
  isOpen:boolean;
  message:string;
  duration?:number;
  position?: "top" | "bottom" | "middle";
  buttons?:Array<IComponentProps_ToastButton>;
  key?: string | number;

  onDidDismiss?:() => void;
  children?: React.ReactNode;
}

const ToastStyled = styled.div`

  `;
export const Toast = (props:IComponentProps_Toast) => {
  return (
      <ToastStyled key={props.key}>
        <IonToast
          isOpen={props.isOpen}
          onDidDismiss={()=>{props.onDidDismiss != null && props.onDidDismiss()}}
          message={props.message}
          duration={props.duration}
          position={props.position}
          buttons={props.buttons}
        />
      </ToastStyled>
    );
}