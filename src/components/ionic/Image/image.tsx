import React from 'react';
import { IonImg,IonThumbnail,IonChip,IonAvatar,IonItem,IonLabel } from '@ionic/react';
//import {Styled_ItemDivider} from './styles'
import styled from 'styled-components';
import {CSSPosition,ICSSPosition,CSSSize} from '../../CSS/Util/CSSPosition/CSSPosition'


interface IComponentProps_AvatarItem {
    slot: "start" | "end";
    img:string;
    title:string;
    comment:string;

    click?:() => void;
    children?: React.ReactNode;
 }

export const AvatarItem = (props:IComponentProps_AvatarItem) => {
    return (
        <>
          <IonItem onClick={()=>{props.click != null && props.click()}}>
          <IonAvatar slot={props.slot}>
              <img src={props.img} />
          </IonAvatar>
          <IonLabel>
          <h3>{props.title}</h3>
          <p>{props.comment}</p>
          </IonLabel>
          </IonItem>
        </>
      );
}

interface IComponentProps_AvatarChip {
  img:string;
  title:string;

  click?:() => void;
  children?: React.ReactNode;
}
export const AvatarChip = (props:IComponentProps_AvatarChip) => {
  return (
      <>
        <IonChip onClick={()=>{props.click != null && props.click()}}>
        <IonAvatar>
            <img src={props.img} />
        </IonAvatar>
        <IonLabel>{props.title}</IonLabel>
        </IonChip>
      </>
    );
}

interface IComponentProps_Avatar {
  img:string;

  click?:() => void;
  children?: React.ReactNode;
}
export const Avatar = (props:IComponentProps_Avatar) => {
  return (
      <>
        <IonAvatar onClick={()=>{props.click != null && props.click()}}>
            <img src={props.img} />
        </IonAvatar>
      </>
    );
}

interface IComponentProps_ImageItem {
  img:string;
  title:string;
  slot: "start" | "end";
  key?: string | number;

  click?:() => void;
  children?: React.ReactNode;
}
export const ImageItem = (props:IComponentProps_ImageItem) => {
  return (
      <>
        <IonItem key={props.key} onClick={()=>{props.click != null && props.click()}}>
          <IonThumbnail slot={props.slot}>
              <IonImg src={props.img} />
          </IonThumbnail>
          <IonLabel>{props.title}</IonLabel>
        </IonItem>
      </>
    );
}

interface IComponentProps_ThumbnailItem {
  slot: "start" | "end";
  img:string;
  title:string;
  comment:string;
  key?: string | number;

  __radius?:number;  //CSS Custom Properties: --border-radius
  __size?:number;  //CSS Custom Properties: --size

  click?:() => void;
  children?: React.ReactNode;
}

export const ThumbnailItem = (props:IComponentProps_ThumbnailItem) => {

  const Styled = styled.div`
  ion-item {
      ion-thumbnail {
          ${props.__size? (`--size:${props.__size}px;`) : null};
          ${props.__radius? (`--border-radius:${props.__radius}px;`) : null};
      };
  }
  `;

  return (
      <Styled>
        <IonItem key={props.key} onClick={()=>{props.click != null && props.click()}}>
          <IonThumbnail slot={props.slot}>
              <img src={props.img} />
          </IonThumbnail>
          <IonLabel>
              <h3>{props.title}</h3>
              <p>{props.comment}</p>
          </IonLabel>
        </IonItem>
      </Styled>
    );
}


interface IComponentProps_Thumbnail extends ICSSPosition{
  img:string;
  key?: string | number;

  __radius?:number;  //CSS Custom Properties: --border-radius
  __size?:number;  //CSS Custom Properties: --size
  __background?:string;  //CSS Custom Properties: --size
  

  click?:() => void;
  children?: React.ReactNode;
}

export const Thumbnail = (props:IComponentProps_Thumbnail) => {

  const Styled = styled.div`
  ${CSSPosition(props.__position,props.__posUnit,props.__x,props.__y)};
  ${props.__background? (`background:${props.__background};`) : null};
  ion-thumbnail {
      ${props.__size? (`--size:${props.__size}px;`) : null};
      ${props.__radius? (`--border-radius:${props.__radius}px;`) : null};
  };
  `;

  return (
      <Styled key={props.key}>
        <IonThumbnail onClick={()=>{props.click != null && props.click()}}>
            <img src={props.img} />
        </IonThumbnail>
      </Styled>
    );
}

interface IComponentProps_Image extends ICSSPosition{
  img:string;
  key?: string | number;

  __width?: number;
  __height?: number;
  __size?: boolean;


  click?:() => void;
  children?: React.ReactNode;
}

export const Image = (props:IComponentProps_Image) => {

  const Styled = styled.div`
  ${CSSPosition(props.__position,props.__posUnit,props.__x,props.__y)};
  ${CSSSize(props.__size,"px",props.__width,props.__height)};
  ion-img {
    
  }
  `;

  return (
      <Styled key={props.key}>
        <IonImg onClick={()=>{props.click != null && props.click()}} src={props.img} />
      </Styled>
    );
}