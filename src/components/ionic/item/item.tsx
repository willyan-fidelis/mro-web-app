import React from 'react';
import { IonListHeader,IonNote,IonIcon,IonItemSliding,IonItemOptions,IonItemOption,IonItemDivider, IonLabel, IonItem } from '@ionic/react';
import {Styled_ItemDivider} from './styles'


interface IComponentProps_ItemDivider {
    title:string;
    color?:string;
    mode?:"ios" | "md" | undefined;
    click?:() => void;
    children?: React.ReactNode;
 }

export const ItemDivider = (props:IComponentProps_ItemDivider) => {
    return (
        <Styled_ItemDivider onClick={()=>{props.click != null && props.click()}}>
          {
              //https://pt-br.reactjs.org/docs/conditional-rendering.html
              //Color props is set?
              props.color
              ? (
                <IonItemDivider mode={props.mode} color={props.color}>
                    <IonLabel>
                    {props.title}
                    </IonLabel>
                </IonItemDivider>
                )
                : (
                    <IonItemDivider>
                        <IonLabel>
                        {props.title}
                        </IonLabel>
                    </IonItemDivider>
                    )
          }
        </Styled_ItemDivider>
      );
}

interface IComponentProps_Item {
  title:string;
  color?:string;
  button?: boolean;
  detail?: boolean;
  detailIcon?: string;
  disabled?: boolean;
  download?: string;
  href?: string;
  lines?: "full" | "inset" | "none" | undefined;
  mode?: "ios" | "md" | undefined;
  routerDirection?: "back" | "forward" | "none";

  click?:() => void;
  children?: React.ReactNode;
}

export const Item = (props:IComponentProps_Item) => {
  return (
      <>
        <IonItem
        detail={props.detail}
        detailIcon={props.detailIcon}
        disabled={props.disabled}
        download={props.download}
        href={props.href}
        lines={props.lines}
        mode={props.mode}
        routerDirection={props.routerDirection}

        button={props.button}
        color={props.color}
        onClick={()=>{props.click != null && props.click()}}

        
        ><IonLabel >{props.title}</IonLabel></IonItem>
      </>
    );
}

interface IComponentProps_Icon{
  icon:string;
  slot?: "bottom" | "end" | "icon-only" | "start" | "top";
  click?:() => void;
  children?: React.ReactNode;
}
export const Icon = (props:IComponentProps_Icon) => {
  return (
      <IonIcon slot={props.slot} icon={props.icon}></IonIcon>
    );
}

interface IComponentProps_ItemSlidingOption{
  title:string;
  color?: string;
  icon?:any;
  icon_slot?: "bottom" | "end" | "icon-only" | "start" | "top";
  disabled?: boolean;
  expandable?: boolean;
  href?: string;
  mode?: "ios" | "md";
  slot?: "bottom" | "end" | "icon-only" | "start" | "top";
  click?:() => void;
  children?: React.ReactNode;
}
export const ItemOption = (props:IComponentProps_ItemSlidingOption) => {
  return (
      <>
        <IonItemOption
        color={props.color}
        disabled={props.disabled}
        expandable={props.expandable}
        href={props.href}
        mode={props.mode}
        slot={props.slot}
        onClick={()=>{props.click != null && props.click()}}
        >
        {
          props.icon?
          <Icon icon={props.icon} slot={props.icon_slot}></Icon>
          : null
        }
        {props.title}
        </IonItemOption>
      </>
    );
}


interface IComponentProps_ItemSliding {
  title:string;
  options_start?: Array<IComponentProps_ItemSlidingOption>;
  options_end?: Array<IComponentProps_ItemSlidingOption>;
  href?:string;
  disabled?:boolean;

  click?:() => void;
  children?: React.ReactNode;
}

export const ItemSliding = (props:IComponentProps_ItemSliding) => {
  return (
      <>
        <IonItemSliding disabled={props.disabled} onClick={()=>{props.click != null && props.click()}}>

          <IonItemOptions side="start">
          {
            props.options_start?
            (
              <>
              {
                props.options_start.map((val,index:any,arr:any)=>{
                  return (
                    <ItemOption
                    title={val.title}
                    icon={val.icon}
                    icon_slot={val.icon_slot}
                    color={val.color}
                    disabled={val.disabled}
                    expandable={val.expandable}
                    href={val.href}
                    mode={val.mode}
                    slot={val.slot}
                    click={()=>{val.click != null && val.click()}}
                    ></ItemOption>
                  )
                })
              }
              </>
            )
            :
            null
          }
          </IonItemOptions>

          <IonItem href={props.href}>
            <IonLabel>{props.title}</IonLabel>
          </IonItem>

          <IonItemOptions side="end">
          {
            props.options_end?
            props.options_end.map((val,index:any,arr:any)=>{
              return (
                <ItemOption
                title={val.title}
                icon={val.icon}
                icon_slot={val.icon_slot}
                color={val.color}
                disabled={val.disabled}
                expandable={val.expandable}
                href={val.href}
                mode={val.mode}
                slot={val.slot}
                click={()=>{val.click != null && val.click()}}
                ></ItemOption>
              )
            })
            :
            null
          }
          </IonItemOptions>

        </IonItemSliding>
      </>
    );
}
interface IComponentProps_ItemSlidingNotifications {
  title:string;
  description?:string;
  detail?:string;
  time?:string;
  options_start?: Array<IComponentProps_ItemSlidingOption>;
  options_end?: Array<IComponentProps_ItemSlidingOption>;
  href?:string;
  disabled?:boolean;

  click?:() => void;
  children?: React.ReactNode;
}

export const ItemSlidingNotifications = (props:IComponentProps_ItemSlidingNotifications) => {
  return (
    <>
      <IonItemSliding disabled={props.disabled} onClick={()=>{props.click != null && props.click()}}>

        <IonItemOptions side="start">
        {
          props.options_start?
          (
            <>
            {
              props.options_start.map((val,index:any,arr:any)=>{
                return (
                  <ItemOption
                  title={val.title}
                  icon={val.icon}
                  icon_slot={val.icon_slot}
                  color={val.color}
                  disabled={val.disabled}
                  expandable={val.expandable}
                  href={val.href}
                  mode={val.mode}
                  slot={val.slot}
                  click={()=>{val.click != null && val.click()}}
                  ></ItemOption>
                )
              })
            }
            </>
          )
          :
          null
        }
        </IonItemOptions>

        <IonItem href={props.href}>
          <IonLabel>
              <h2>{props.title}</h2>
              <p>{props.description}</p>
              <p>{props.detail}</p>
          </IonLabel>
          <IonNote slot="end">
          {props.time}
          </IonNote>
        </IonItem>

        <IonItemOptions side="end">
        {
          props.options_end?
          props.options_end.map((val,index:any,arr:any)=>{
            return (
              <ItemOption
              title={val.title}
              icon={val.icon}
              icon_slot={val.icon_slot}
              color={val.color}
              disabled={val.disabled}
              expandable={val.expandable}
              href={val.href}
              mode={val.mode}
              slot={val.slot}
              click={()=>{val.click != null && val.click()}}
              ></ItemOption>
            )
          })
          :
          null
        }
        </IonItemOptions>

      </IonItemSliding>
    </>
  );
}


interface IComponentProps_ItemListHeader {
  title:string;
  color?:string;
  lines?:"none" | "full" | "inset";
  click?:() => void;
  children?: React.ReactNode;
}

export const ItemListHeader = (props:IComponentProps_ItemListHeader) => {
  return (
      <>
        <IonListHeader
        onClick={()=>{props.click != null && props.click()}}
        color={props.color}
        //lines={props.lines}
        >
          <IonLabel>{props.title}</IonLabel>
        </IonListHeader>
      </>
    );
}