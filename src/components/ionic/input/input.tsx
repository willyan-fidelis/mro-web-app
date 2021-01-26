import React from 'react';
import { IonTextarea,IonLabel,IonInput, IonItem } from '@ionic/react';
import {Styled_ItemDivider} from './styles'


interface IComponentProps_Input {
    value:string;
    placeholder?:string;
    label?:string;
    label_position?:"floating" | "fixed" | "stacked";
    clearInput?:boolean;
    color?:string;
    debounce?:number;
    disabled?:boolean;
    inputmode?:"text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
    mode?:"ios" | "md" | undefined;
    multiple?:boolean;
    readonly?:boolean;
    required?:boolean;

    type?:"number" | "text" | "tel" | "url" | "email" | "search" | "time" | "date" | "password",

    click?:() => void;
    blur?:() => void;
    focus?:() => void;
    keyboard?:(key:string) => void;
    keyDown?:(key:string,keyCode:string) => void;
    change?:(text:string) => void;
    children?: React.ReactNode;
 }

export const Input = (props:IComponentProps_Input) => {
    return (
        <>
          <IonItem onClick={()=>{props.click != null && props.click()}}>
            {props.label? <IonLabel position={props.label_position}>{props.label}</IonLabel> : null}
            <IonInput
            value={props.value}
            clearInput={props.clearInput}
            color={props.color}
            debounce={props.debounce}
            disabled={props.disabled}
            inputmode={props.inputmode}
            mode={props.mode}
            multiple={props.multiple}
            readonly={props.readonly}
            required={props.required}
            type={props.type}
            placeholder={props.placeholder}
            
            onIonBlur={()=>{props.blur != null && props.blur()}}
            onIonChange={(e)=>{props.change != null && props.change(e.detail.value!)}}
            onIonFocus={()=>{props.focus != null && props.focus()}}
            onIonInput={(e)=>{props.keyboard != null &&
              //@ts-ignore
              props.keyboard(e.detail.data)}}
            onKeyDown={(e)=>{props.keyboard != null &&
            //@ts-ignore
            props.keyDown(e.key,e.keyCode)}}
            >
            </IonInput>
          </IonItem>
        </>
      );
}

interface IComponentProps_Textarea {
  value:string;
  placeholder?:string;
  label?:string;
  label_position?:"floating" | "fixed" | "stacked";
  color?:string;
  debounce?:number;
  disabled?:boolean;
  mode?:"ios" | "md" | undefined;
  readonly?:boolean;
  required?:boolean;
  cols?:number;
  rows?:number;
  
  click?:() => void;
  blur?:() => void;
  focus?:() => void;
  keyboard?:(key:string) => void;
  keyDown?:(keyCode:string) => void;
  change?:(text:string) => void;
  children?: React.ReactNode;
}

export const Textarea = (props:IComponentProps_Textarea) => {
  return (
      <>
        <IonItem onClick={()=>{props.click != null && props.click()}}>
          {props.label? <IonLabel position={props.label_position}>{props.label}</IonLabel> : null}
          <IonTextarea
          value={props.value}
          color={props.color}
          debounce={props.debounce}
          disabled={props.disabled}
          mode={props.mode}
          readonly={props.readonly}
          required={props.required}
          placeholder={props.placeholder}
          cols={props.cols}
          rows={props.rows}
          
          onIonBlur={()=>{props.blur != null && props.blur()}}
          onIonChange={(e)=>{props.change != null && props.change(e.detail.value!)}}
          onIonFocus={()=>{props.focus != null && props.focus()}}
          onIonInput={(e)=>{props.keyboard != null &&
            //@ts-ignore
            props.keyboard(e.detail.data)}}
          onKeyDown={(e)=>{props.keyDown != null &&
            //@ts-ignore
            props.keyDown(e.keyCode)}}
          >
          </IonTextarea>
        </IonItem>
      </>
    );
}