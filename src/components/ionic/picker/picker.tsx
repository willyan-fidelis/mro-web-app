import React from 'react';
import { IonPicker } from '@ionic/react';
import {Styled_ItemDivider} from './styles'
import { PickerColumn } from "@ionic/core";


interface IComponentProps_Picker {
    pickerColumns: Array<PickerColumn>;
    isOpen: boolean;
    okButtonText:string;
    cancelButtonText:string;
    mode?:"ios" | "md" | undefined;

    onCancel?:() => void;
    onSave?:(value:any) => void;
    children?: React.ReactNode;
 }

export const Picker = (props:IComponentProps_Picker) => {
    return (
        <Styled_ItemDivider>
          <IonPicker
          mode={props.mode}
          isOpen={props.isOpen}
          columns={props.pickerColumns}
          buttons={[
            {
              text: props.cancelButtonText,
              role: "cancel",
              handler: value => {
                if(props.onCancel){props.onCancel()}
              }
            },
            {
              text: props.okButtonText,
              handler: value => {
                if(props.onSave){props.onSave(value)}
              }
            }
          ]}
          ></IonPicker>
        </Styled_ItemDivider>
      );
}