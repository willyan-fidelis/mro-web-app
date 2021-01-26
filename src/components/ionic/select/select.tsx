import React from 'react';
import { IonDatetime,IonIcon,IonCheckbox,IonRange,IonLabel,IonSelect,IonSelectOption,IonItem } from '@ionic/react';
//import {Styled_ItemDivider} from './styles'
import styled from 'styled-components';


interface IComponentProps_ItemSelect {
  label:string;
  value?:number;
  placeholder?:string;
  list:Array<string>,
  multiple?:boolean;
  disabled?:boolean;
  onChange?:(index:number) => void;
  children?: React.ReactNode;
}

const ItemSelectStyled = styled.div`

  `;
export const ItemSelect = (props:IComponentProps_ItemSelect) => {
  return (
      <ItemSelectStyled>

        <IonItem>
          <IonLabel>{props.label}</IonLabel>
          <IonSelect
          disabled={props.disabled}
          multiple={props.multiple}
          value={props.value}
          placeholder={props.placeholder}
          onIonChange={(e)=>{props.onChange != null && props.onChange(e.detail.value)}}
          >
            {
              props.list.map((val,index,arr)=>{
                return(
                  <IonSelectOption key={index} value={index}>{val}</IonSelectOption>
                )
              })
            }
          </IonSelect>
        </IonItem>
      </ItemSelectStyled>
    );
}

interface ItemCheckboxListModel{title:string,checked:boolean,key:number | string};
interface IComponentProps_ItemCheckboxList {
  list:Array<ItemCheckboxListModel>,
  onChange?:(list:Array<ItemCheckboxListModel>) => void;
  onRender?:(elem:ItemCheckboxListModel) => JSX.Element;
  children?: React.ReactNode;
}
const ItemCheckboxListStyled = styled.div`

  `;
export const ItemCheckboxList = (props:IComponentProps_ItemCheckboxList) => {
  return (
      <ItemCheckboxListStyled>

        
          {
            props.list.map((val,index,arr)=>{
              return(
                <div key={index}>
                <IonItem>
                  <IonLabel>{val.title}</IonLabel>
                  <IonCheckbox slot="end" value={val.title} checked={val.checked}
                  onIonChange={
                    (e)=>{
                      let newList:Array<ItemCheckboxListModel> = props.list.map((val,_index,arr)=>{
                        if (index == _index) {
                          return {title:val.title,checked:e.detail.checked,key:val.key}
                        } else {
                          return val;
                        }
                      })
                      props.onChange != null && props.onChange(newList); //e.detail:{checked: true, value: "ABC"}
                    }} />
                </IonItem>
                {
                  props.onRender ? props.onRender(val) : null
                }
                </div>
              )
            })
            
          }
        
      </ItemCheckboxListStyled>
    );
}

interface IComponentProps_ItemRange {
  min:number;
  max:number;
  value?:number;
  icon?:string;
  color?:string;
  debounce?:number;
  onChange?:(value:number) => void;
  children?: React.ReactNode;
}
const ItemRangeStyled = styled.div`

  `;
export const ItemRange = (props:IComponentProps_ItemRange) => {
  return (
      <ItemCheckboxListStyled>

        
          {
            props.icon?
            <IonItem>
              <IonRange debounce={props.debounce} pin={true} value={props.value} min={props.min} max={props.max} color={props.color} onIonChange={(e) => {props.onChange && props.onChange(e.detail.value as number)}}>
                <IonIcon size="small" slot="start" icon={props.icon} />
                <IonIcon slot="end" icon={props.icon} />
              </IonRange>
            </IonItem>
            :
            <IonItem>
              <IonRange debounce={props.debounce} pin={true} value={props.value} min={props.min} max={props.max} color={props.color} onIonChange={(e) => {props.onChange && props.onChange(e.detail.value as number)}}>
                <IonLabel slot="start">{props.min}</IonLabel>
                <IonLabel slot="end">{props.max}</IonLabel>
              </IonRange>
            </IonItem>
          }
        
      </ItemCheckboxListStyled>
    );
}

interface IComponentProps_ItemTime {
  title?:string;
  value?:string; //format exemple: "23:30"
  onChange?:(value:string) => void;
  children?: React.ReactNode;
}
const ItemTimeStyled = styled.div`

  `;
export const ItemTime = (props:IComponentProps_ItemTime) => {
  let time = `2012-12-15T${props.value || '23:30'}:20.789`;
  return (
      <ItemTimeStyled>

        
          <IonItem>
            <IonLabel>{props.title}</IonLabel>
            <IonDatetime cancelText="Cancelar" doneText="Ok" displayFormat="HH:mm" value={time}
            onIonChange={(e) => {
              let _time = new Date(e.detail.value || time);
              let formated = `${("0" + _time.getHours()).slice(-2)}:${("0" + _time.getMinutes()).slice(-2)}`;
              props.onChange && props.onChange(formated);
              }}></IonDatetime>
          </IonItem>
        
      </ItemTimeStyled>
    );
}