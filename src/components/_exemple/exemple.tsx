import React, { useCallback, useContext, useEffect, useState } from 'react';

import { IonSelect,IonSelectOption,IonDatetime,IonFooter,IonRange,IonGrid,IonRow,IonCol,IonMenuButton,IonBackButton,IonButtons,IonToast,IonSpinner,IonSkeletonText,IonProgressBar,IonLoading,IonListHeader,IonModal,IonImg,IonThumbnail,IonButton,IonTextarea,IonCheckbox,IonRadio,IonToggle,IonInput,IonPage,IonHeader,IonToolbar,IonTitle,IonContent } from '@ionic/react';
//import { heart,trash,star,archive } from 'ionicons/icons';
import { ItemSlidingNotifications,ItemDivider,Item,ItemSliding} from '../../components/ionic/item/item'
import { Input,Textarea} from '../../components/ionic/input/input'
import {Fab} from '../../components/ionic/fab/fab'
import {Picker} from '../../components/ionic/picker/picker'
import {Avatar,AvatarChip,AvatarItem,ImageItem,ThumbnailItem,Thumbnail,Image} from '../ionic/Image/image'
import {AlertOk,AlertOkCancel,Loading,Toast} from '../../components/ionic/alert/alert'
import {ToggleItem} from '../../components/ionic/button/button'
import {ReorderList} from '../../components/ionic/reorder/reorder'

import { IonSegment, IonSegmentButton,IonReorderGroup,IonReorder,IonAlert,IonRadioGroup,IonPopover,IonChip,IonAvatar,IonPicker,IonFabButton,IonFab,IonFabList,IonIcon,IonNote,IonItemSliding,IonItemOptions,IonItemOption,IonItemDivider,IonList, IonItem, IonLabel } from '@ionic/react';
import { sunny,pin,home,globe, basket, camera, bookmark,call,star,pizza,repeat,logoInstagram,logoFacebook,logoVimeo,settings,person,share,arrowDropupCircle,arrowRoundBack,add,arrowRoundForward,heart,trash,archive } from 'ionicons/icons';
import styled from 'styled-components';
//import {Swipeable} from 'react-swipeable';
import {ReactComponent as ReactLogo} from './alert.svg';
import { ItemReorderEventDetail } from '@ionic/core';
//import {socket} from '../../resources/app/resource.instance'


export const ExempleFull : React.FC = () => {
    return (
        // <Swipeable onSwipedRight={() => alert("Direita")} onSwipedLeft={() => alert("Esquerda")}>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Test Component</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent
            scrollEvents={true}
            onIonScrollStart={() => {}}
            onIonScroll={() => {}}
            onIonScrollEnd={() => {}}>
                <Exemple016/>
                <CallTest active={true}/>
            </IonContent>
        </IonPage>
        //</Swipeable>
      );
  }

const CallTest = (props:{active:boolean}) => {
    /* 
    Test Caller
    */
    return (
        <>
        {
            props.active? (
                <Test></Test>
            ) : (<div></div>)
        }
        
        </>
    );
}

const Test = ():JSX.Element => {
    /* 
    Test:
    Teste temporario
    */
   //@ts-ignore
   //const { state, dispatch } = useContext(AppContext);
    
   
  return (
    <>    
    </>
  );
}

export const Exemple_Template : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-item' de varios tipos
    */
    return (
        <>

        </>
    );
}

export const Exemple001 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-item' de varios tipos
    */
    return (
    <>
        <ItemDivider title="Exemple - 001" color="danger"></ItemDivider>

        <ItemDivider title="Titulo com cor" color="tertiary"></ItemDivider>
        <ItemDivider title="Titulo simples" click={()=>{alert('Fui clicado!')}}></ItemDivider>
        <Item click={()=>{alert('Fui clicado!')}} title="Item simples"></Item>
        <Item title="Item botão" button={true} detail={true}></Item>
        <Item title="Item botão" button={true} ></Item>
        <Item title="Item botão desabilitado" button={true} disabled={true}></Item>
        </>
    );
}

export const Exemple002 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-item' de varios tipos
    */
    return (
        <>
            <ItemDivider title="Exemple - 002" color="danger"></ItemDivider>
            <ItemSliding title="Sem Sliding"></ItemSliding>
            <ItemSliding options_start={[
                {icon_slot:'icon-only',icon:trash,title:'Delete'},
                {icon_slot:'icon-only',icon:archive,title:'Arquivar'}
                ]} title="Com Sliding na frente">
            </ItemSliding>
            <ItemSliding options_start={[{icon_slot:'icon-only',icon:trash,title:'Delete'}]} options_end={[{icon_slot:'icon-only',icon:heart,title:'Favorito'}]} title="Com Sliding ambos os lados"></ItemSliding>
            <ItemSlidingNotifications options_start={[{icon_slot:'icon-only',icon:trash,title:'Delete'}]} options_end={[{icon_slot:'icon-only',icon:heart,title:'Favorito'}]} title="Nova notificação" description="Descrição.." detail="Detalhes aqui" time="22:35"></ItemSlidingNotifications>
        </>
    );
}

export const Exemple003 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-input' de varios tipos
    */
   const [text, setText] = useState<string>();
   const [number, setNumber] = useState<string>();
    return (
        <IonList>
            <ItemDivider title="Exemple - 003 (ion-input)" color="danger"></ItemDivider>

            <Input keyboard={(key)=>{alert(key)}} value={text!} change={(data)=>{setText(data)}}></Input>
            <Input disabled={true} value={text!} change={(data)=>{setText(data)}}></Input>
            <Input value={text!} placeholder='name here' label="Titulo campo" label_position="stacked"></Input>
            <Input label='Date' type="date" value={text!} change={(data)=>{setText(data)}}></Input>
            <Input label='Time' type="time" value={text!} change={(data)=>{setText(data)}}></Input>
            <Input inputmode='email' label='Email' type="email" value={text!} change={(data)=>{setText(data)}}></Input>
            <Input keyboard={(key)=>{console.log(key)}} type='number' value={number!} change={(data)=>{setNumber(parseInt(data!, 10).toString())}}></Input>
        </IonList>
    );
}

export const Exemple004 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-textarea' de varios tipos
    */
   const [text, setText] = useState<string>();
   const [number, setNumber] = useState<number>();
    return (
        <IonList>
            <ItemDivider title="Exemple - 004 (ion-textarea)" color="danger"></ItemDivider>

            <Textarea keyboard={(key)=>{alert(key)}} value={text!} change={(data)=>{setText(data)}}></Textarea>
            <Textarea placeholder='5 rows here..' rows={5} keyboard={(key)=>{alert(key)}} value={text!} change={(data)=>{setText(data)}}></Textarea>
            <Textarea disabled={true} value={text!} change={(data)=>{setText(data)}}></Textarea>
            <Textarea value={text!} placeholder='stacked..' label="Stacked" label_position="stacked"></Textarea>
            <Textarea value={text!} label="Floating" label_position="floating"></Textarea>
            <Textarea keyDown={(keyCode)=>{alert(keyCode)}} value={text!} placeholder='fixed..' label="Fixed" label_position="fixed"></Textarea>
        </IonList>
    );
}
export const Exemple005 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-textarea' de varios tipos
    */
    return (
        //,logoInstagram,logoFacebook,logoVimeo,settings,person,share
        <>
            <ItemDivider title="Exemple - 005 (ion-fab)" color="danger"></ItemDivider>

            <Fab vertical="top" horizontal="start" icon={logoVimeo}></Fab>

            <Fab vertical="bottom" horizontal="start" icon={logoVimeo}
            click={()=>{alert('bottom/start clicked!')}}></Fab>
            
            <Fab vertical="top" horizontal="end" icon={logoInstagram} side="start" edge={true}
            fabButtons={[{icon:logoInstagram,click:()=>{alert('FabButton clicled!')}}]}></Fab>

            <Fab vertical="bottom" horizontal="end" icon={share} side="top"
            fabButtons={[
                {icon:logoFacebook,click:()=>{alert('FabButton clicled!')}},
                {icon:settings,click:()=>{alert('FabButton clicled!')}},
                {icon:person,click:()=>{alert('FabButton clicled!')}},
                ]}></Fab>
        </>
    );
}

export const Exemple006 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-textarea' de varios tipos
    */
    const [isOpen, setIsOpen] = useState<boolean>();
    return (
        //,logoInstagram,logoFacebook,logoVimeo,settings,person,share
        <>
            <ItemDivider title="Exemple - 006 (ion-picker)" color="danger"></ItemDivider>

            <Fab click={()=>{setIsOpen(true)}} vertical="top" horizontal="start" icon={add}></Fab>
            <Picker
            onCancel={()=>{setIsOpen(false);alert('Cancelado!')}}
            onSave={(val)=>{
                setIsOpen(false);alert('Salvo!');
                console.log(val);
                console.log(val["Animais"]);}}
            cancelButtonText='Cancelar'
            okButtonText='Confirmar'
            isOpen={isOpen || false}
            pickerColumns={[
                {name:"Animais",options:[{text:'Gato',value:'1'},{text:'vaca',value:'2'}]},
                {name:"Cidades",options:[{text:'Jlle',value:'1'},{text:'Floripa',value:'2'},{text:'Blumenal',value:'3'}]},
                {name:"Navegar",options:[{text:'Chrome',value:'1'},{text:'Mozila',value:'2'}]},
            ]}
            ></Picker>
        </>
    );
}

export const Exemple007 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-avatar' de varios tipos
    */
    return (
        //,logoInstagram,logoFacebook,logoVimeo,settings,person,share
        <>
            <ItemDivider title="Exemple - 007 (ion-avatar)" color="danger"></ItemDivider>

            <AvatarItem title="Willyan" comment="willyan_fidelis@hotmail.com" img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb" slot="start"></AvatarItem>
            <AvatarItem title="Willyan" comment="willyan_fidelis@hotmail.com" img="https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/46717218_2238497662829699_7046670606808383488_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeF7iNno0quai-Rn0A0KPIg8xz5esRj9EUvHPl6xGP0RSwgIC-C8NROz10sp9k8EqIGPmogYa0CfYmCrxfm3NTPP&_nc_ohc=a_pU9I1qwRIAX8pz1Ut&_nc_ht=scontent.fjoi2-1.fna&oh=4331c8f669de9f811fbb3e33164f3e2a&oe=5EB5E17A" slot="start"></AvatarItem>

            <AvatarItem title="Avatar" comment="avatar@hotmail.com" img="https://img.olhardigital.com.br/uploads/acervo_imagens/2019/05/r16x9/20190507051851_1200_675_-_avatar.jpg" slot="end"></AvatarItem>
            <AvatarItem title="Avatar" comment="avatar@hotmail.com" img="https://img.olhardigital.com.br/uploads/acervo_imagens/2019/05/r16x9/20190507051851_1200_675_-_avatar.jpg" slot="end"></AvatarItem>

            <Avatar img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb"></Avatar>
            <AvatarChip title="Willyan" img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb"></AvatarChip>
        </>
    );
}

export const Exemple008 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-avatar' de varios tipos
    */
   const Styled = styled.div`
    #x {
        width:80px;
        height:80px;
        color:var(--ion-color-primary, red)
    };
    `;
   type Item = {
    src: string;
    text: string;
  };
  const items: Item[] = [
      { src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' },
      { src: 'https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb', text: 'a picture of a willyan' },
      { src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' },
    ];
    return (
        <>
            <ItemDivider title="Exemple - 008 (ion-img)" color="danger"></ItemDivider>

            {items.map((image, i, arr) => (
            <ImageItem key={i} img={image.src} slot="start" title={image.text}></ImageItem>
        ))}
        

        <ImageItem img="https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/46717218_2238497662829699_7046670606808383488_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeF7iNno0quai-Rn0A0KPIg8xz5esRj9EUvHPl6xGP0RSwgIC-C8NROz10sp9k8EqIGPmogYa0CfYmCrxfm3NTPP&_nc_ohc=a_pU9I1qwRIAX8pz1Ut&_nc_ht=scontent.fjoi2-1.fna&oh=4331c8f669de9f811fbb3e33164f3e2a&oe=5EB5E17A" slot="end" title="Willyan"></ImageItem>
        <ImageItem img="https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/46717218_2238497662829699_7046670606808383488_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeF7iNno0quai-Rn0A0KPIg8xz5esRj9EUvHPl6xGP0RSwgIC-C8NROz10sp9k8EqIGPmogYa0CfYmCrxfm3NTPP&_nc_ohc=a_pU9I1qwRIAX8pz1Ut&_nc_ht=scontent.fjoi2-1.fna&oh=4331c8f669de9f811fbb3e33164f3e2a&oe=5EB5E17A" slot="end" title="Willyan"></ImageItem>

        <Image img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb"></Image>
        
        <ItemDivider title="Exemplo com SGV"></ItemDivider>
        <Styled><ReactLogo  id="x"></ReactLogo></Styled>
        
        </>
    );
}

export const Exemple009 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-thumbnail' de varios tipos
    */
    return (
        <>
            <ItemDivider title="Exemple - 009 (ion-thumbnail)" color="danger"></ItemDivider>

            <ThumbnailItem title="Tutulo" comment="Comentario" img="http://placekitten.com/g/200/300" slot="start"></ThumbnailItem>
            <ThumbnailItem title="Tutulo" comment="Comentario" img="http://placekitten.com/g/200/300" slot="start"></ThumbnailItem>

            <ThumbnailItem title="Tutulo" comment="Comentario" img="https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/46717218_2238497662829699_7046670606808383488_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeF7iNno0quai-Rn0A0KPIg8xz5esRj9EUvHPl6xGP0RSwgIC-C8NROz10sp9k8EqIGPmogYa0CfYmCrxfm3NTPP&_nc_ohc=a_pU9I1qwRIAX8pz1Ut&_nc_ht=scontent.fjoi2-1.fna&oh=4331c8f669de9f811fbb3e33164f3e2a&oe=5EB5E17A" slot="end"></ThumbnailItem>
            <ThumbnailItem title="Tutulo" comment="Comentario" img="https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/46717218_2238497662829699_7046670606808383488_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeF7iNno0quai-Rn0A0KPIg8xz5esRj9EUvHPl6xGP0RSwgIC-C8NROz10sp9k8EqIGPmogYa0CfYmCrxfm3NTPP&_nc_ohc=a_pU9I1qwRIAX8pz1Ut&_nc_ht=scontent.fjoi2-1.fna&oh=4331c8f669de9f811fbb3e33164f3e2a&oe=5EB5E17A" slot="end"></ThumbnailItem>

            <Thumbnail __background="red" __radius={15} img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb"></Thumbnail>
            <Thumbnail img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb"></Thumbnail>
        </>
    );
}

export const Exemple010 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-thumbnail' de varios tipos
    */
   const [x, setX] = useState<number>(0);
   const [y, setY] = useState<number>(0);
    return (
        <>
            <ItemDivider title="Exemple - 010 (Posicionando elemento)" color="danger"></ItemDivider>

            <IonButton onClick={()=>{setX(x+10)}}><IonIcon slot="end" icon={star}/>+X</IonButton>
            <IonButton onClick={()=>{setX(x-10)}}><IonIcon slot="start" icon={star}/>-X</IonButton>
            <br></br>
            <IonButton onClick={()=>{setY(y+10)}}><IonIcon slot="end" icon={star}/>+Y</IonButton>
            <IonButton onClick={()=>{setY(y-10)}}><IonIcon slot="start" icon={star}/>-Y</IonButton>

            <Thumbnail __posUnit="px" __position="absolute" __x={x} __y={y} img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb"></Thumbnail>
        </>
    );
}


export const Exemple011 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-modal' de varios tipos
    */
   const [showModal, setShowModal] = useState(false);
    return (
        <>
            <ItemDivider title="Exemple - 011 (ion-modal)" color="danger"></ItemDivider>
            <IonModal showBackdrop={true} onDidDismiss={()=>{alert('Closed!')}} isOpen={showModal}>
                <ItemDivider title="Modal aberto" color="primary"></ItemDivider>
                <p>This is modal content</p>
                <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        </>
    );
}

export const Exemple012 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-popover' de varios tipos
    */
   const [showPopover, setShowPopover] = useState(false);

  return (
    <>
    <ItemDivider title="Exemple - 012 (ion-popover)" color="danger"></ItemDivider>
    
      <IonPopover
        isOpen={showPopover}
        onDidDismiss={e => setShowPopover(false)}
      >
        {/* <IonListHeader lines="inset"></IonListHeader> */}
        <IonListHeader>
            <IonLabel>Trending</IonLabel>
        </IonListHeader>
        <Item title="Item botão" button={true} ></Item>
        <Item title="Item botão" button={true} detail={true}></Item>
      </IonPopover>
      <IonButton onClick={() => setShowPopover(true)}>Show Popover</IonButton>
    </>
  );
}

export const Exemple013 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-Loading' de varios tipos
    */
   const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 3000);

  return (
    <>
    <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={5000}
      />
    </>
  );
}

export const Exemple014 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-Loading' de varios tipos
    */

  return (
    <>
    {/*-- Default Progressbar --*/}
    <IonProgressBar></IonProgressBar><br />

    {/*-- Default Progressbar with 50 percent --*/}
    <IonProgressBar value={0.5}></IonProgressBar><br />

    {/*-- Colorize Progressbar --*/}
    <IonProgressBar color="primary" value={0.5}></IonProgressBar><br />
    <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br />

    {/*-- Other types --*/}
    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br />
    <IonProgressBar type="indeterminate"></IonProgressBar><br />
    <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br />
    </>
  );
}

export const Exemple015 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-Loading' de varios tipos
    */

   const Styled = styled.div`
        .custom-skeleton ion-skeleton-text {
            line-height: 15px;
        }
        .custom-skeleton ion-skeleton-text:last-child {
            margin-bottom: 0px;
        }
    `;

   const [data, setData] = useState<any>();

   setTimeout(() => {
     setData({
       heading: 'Normal text',
       para1: 'Lorem ipsum dolor sit amet, consectetur',
       para2: 'adipiscing elit.'
     });
   }, 50000);
   return (
     <>
     {data ? (
         <>
           <div className="ion-padding">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar
             arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt
             vehicula.
           </div>
 
           <IonList>
             <IonListHeader>
               <IonLabel>
                 Data
               </IonLabel>
             </IonListHeader>
             <IonItem>
               <IonAvatar slot="start">
                 <img src="./avatar.svg" />
               </IonAvatar>
               <IonLabel>
                 <h3>{data.heading}</h3>
                 <p>{data.para1}</p>
                 <p>{data.para2}</p>
               </IonLabel>
             </IonItem>
             <IonItem>
               <IonThumbnail slot="start">
                 <img src="./thumbnail.svg" />
               </IonThumbnail>
               <IonLabel>
                 <h3>{data.heading}</h3>
                 <p>{data.para1}</p>
                 <p>{data.para2}</p>
               </IonLabel>
             </IonItem>
             <IonItem>
               <IonIcon icon={call} slot="start" />
               <IonLabel>
                 <h3>{data.heading}</h3>
                 <p>{data.para1}</p>
                 <p>{data.para2}</p>
               </IonLabel>
             </IonItem>
           </IonList>
         </>
       ) : (
         <Styled>
           <div className="ion-padding custom-skeleton">
             <IonSkeletonText animated style={{ width: '60%' }} />
             <IonSkeletonText animated />
             <IonSkeletonText animated style={{ width: '88%' }} />
             <IonSkeletonText animated style={{ width: '70%' }} />
             <IonSkeletonText animated style={{ width: '60%' }} />
           </div>
 

             <IonListHeader>
               <IonLabel>
                 <IonSkeletonText animated style={{ width: '20%' }} />
               </IonLabel>
             </IonListHeader>
             <IonItem>
               <IonAvatar slot="start">
                 <IonSkeletonText animated />
               </IonAvatar>
               <IonLabel>
                 <h3>
                   <IonSkeletonText animated style={{ width: '50%' }} />
                 </h3>
                 <p>
                   <IonSkeletonText animated style={{ width: '80%' }} />
                 </p>
                 <p>
                   <IonSkeletonText animated style={{ width: '60%' }} />
                 </p>
               </IonLabel>
             </IonItem>
             <IonItem>
               <IonThumbnail slot="start">
                 <IonSkeletonText animated />
               </IonThumbnail>
               <IonLabel>
                 <h3>
                   <IonSkeletonText animated style={{ width: '50%' }} />
                 </h3>
                 <p>
                   <IonSkeletonText animated style={{ width: '80%' }} />
                 </p>
                 <p>
                   <IonSkeletonText animated style={{ width: '60%' }} />
                 </p>
               </IonLabel>
             </IonItem>
             <IonItem>
               <IonSkeletonText animated style={{ width: '27px', height: '27px' }} slot="start" />
               <IonLabel>
                 <h3>
                   <IonSkeletonText animated style={{ width: '50%' }} />
                 </h3>
                 <p>
                   <IonSkeletonText animated style={{ width: '80%' }} />
                 </p>
                 <p>
                   <IonSkeletonText animated style={{ width: '60%' }} />
                 </p>
               </IonLabel>
             </IonItem>

         </Styled>
       )}
     </>
   );
}

export const Exemple016 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-alert' de varios tipos
    */
   const [showAlert1, setShowAlert1] = useState(false);
   const [showAlert2, setShowAlert2] = useState(false);
   const [showAlert3, setShowAlert3] = useState(false);
   const [showAlert4, setShowAlert4] = useState(false);
   const [showAlert5, setShowAlert5] = useState(false);
   return (
     <>
        <ItemDivider title="Exemple - 016 (ion-alert)" color="danger"></ItemDivider>

        <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert-Ok</IonButton>
        <IonButton onClick={() => setShowAlert2(true)} expand="block">Show Alert-Ok-Cancel</IonButton>
        <IonButton onClick={() => setShowAlert3(true)} expand="block">Show Loading</IonButton>
        <IonButton onClick={() => setShowAlert4(true)} expand="block">Show Toast</IonButton>
        <IonButton onClick={() => setShowAlert5(true)} expand="block">Show Toast with buttons</IonButton>


        <AlertOk backdropDismiss={false} onDidDismiss={() => setShowAlert1(false)} isOpen={showAlert1} title="Alert Simples" message="Menssagem simples com ok"></AlertOk>
        <AlertOkCancel backdropDismiss={true} onOk={()=>{alert('OK!')}} onDidDismiss={() => setShowAlert2(false)} isOpen={showAlert2} title="Alert ok e cancel" message="Menssagem simples com ok e cancelar"></AlertOkCancel>
        <Loading duration={5000} message="Agurade.." isOpen={showAlert3} onDidDismiss={() => setShowAlert3(false)}></Loading>
        <Toast duration={1000} onDidDismiss={() => setShowAlert4(false)} isOpen={showAlert4} message="Nova msg chegou.."></Toast>

        <Toast position="top" onDidDismiss={() => setShowAlert5(false)} buttons={[
            {
                side: 'end',
                icon: star,
                text: 'Favorite',
                handler: () => {
                  console.log('Favorite clicked');
                }
              },
              {
                side: 'end',
                icon: star,
                text: 'Done',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
        ]} isOpen={showAlert5} message="Nova msg chegou.."></Toast>

     </>
   );
}

export const Exemple017 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-button/toggle' de varios tipos
    */
   const [checked1, setChecked1] = useState<boolean>(false);
   const [checked2, setChecked2] = useState<boolean>(false);
   const [checked3, setChecked3] = useState<boolean>(false);
   const [checked4, setChecked4] = useState<boolean>(false);
   return (
     <>
        <ItemDivider title="Exemple - 017 (ToggleItem)" color="danger"></ItemDivider>

        <ItemDivider title="Saboros Pizza"></ItemDivider>
        <ToggleItem checked={checked1} onChange={(val)=>{setChecked1(val);alert(val)}} color="primary" label="Queijo"></ToggleItem>
        <ToggleItem checked={checked2} onChange={(val)=>{setChecked2(val);alert(val)}} color="danger" label="Salame"></ToggleItem>

        <ItemDivider title="Toggle sem label"></ItemDivider>
        <ToggleItem checked={checked3} onChange={(val)=>{setChecked3(val);alert(val)}} ></ToggleItem>
        <ToggleItem checked={checked4} onChange={(val)=>{setChecked4(val);alert(val)}} ></ToggleItem>
     </>
   );
}

export const Exemple018 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-GRID' de varios tipos
    */
   const Styled = styled.div`
    #xx {
        width:50%;
        position:relative;

    };
    #yy {
        width:50%;
        position:relative;
        
    };
    `;
    const img1: string = 'http://placekitten.com/g/200/300';
    const img2: string = 'https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb';
    interface IProps_Img {
        img: string;
        title: string
      }
    const Img = ({img,title,...props}:IProps_Img):JSX.Element => (
        <ImageItem img={img}slot="start"title={title}></ImageItem>
    )
    return (
        <>
        <ItemDivider title="Exemple - 018 (Varios tipos de grid)" color="danger"></ItemDivider>

        <ItemDivider title="Grid de listas, para varios tamanhos de tela"></ItemDivider>
        <IonGrid>
        <IonRow class="ion-justify-content-center">
            <IonCol sizeLg="3"sizeMd="4"><Img img={img1} title='Gato'></Img></IonCol>
            <IonCol sizeLg="3"sizeMd="4"><Img img={img2} title='Willyan'></Img></IonCol>
            
            <IonCol sizeLg="3"sizeMd="4"><Img img={img1} title='Gato'></Img></IonCol>
            <IonCol sizeLg="3"sizeMd="4"><Img img={img2} title='Willyan'></Img></IonCol>

            <IonCol sizeLg="3"sizeMd="4"><Img img={img1} title='Gato'></Img></IonCol>
            <IonCol sizeLg="3"sizeMd="4"><Img img={img2} title='Willyan'></Img></IonCol>

            <IonCol sizeLg="3"sizeMd="4"><Img img={img1} title='Gato'></Img></IonCol>
            <IonCol sizeLg="3"sizeMd="4"><Img img={img2} title='Willyan'></Img></IonCol>

            <IonCol sizeLg="3"sizeMd="4"><Img img={img1} title='Gato'></Img></IonCol>
            <IonCol sizeLg="3"sizeMd="4"><Img img={img2} title='Willyan'></Img></IonCol>
        </IonRow>
        
        <ItemDivider title="Grid de item unico, como player de video e afins.."></ItemDivider>
        <IonRow class="ion-justify-content-center">
        {/* <IonCol sizeSm="1"sizeLg="3"sizeMd="4"><Image __size={true} __width={60} __height={40} img={img1}></Image></IonCol> */}
            <IonCol sizeSm="1"sizeLg="3"sizeMd="4"><Image img={img1}></Image></IonCol>
        </IonRow>
        
        </IonGrid>

        <IonGrid>
        <IonRow>
            <IonCol>
                <ImageItem img={img1}slot="start"title="Cat"></ImageItem>
            </IonCol>
            <IonCol>
                <ImageItem img={img1}slot="start"title="Cat"></ImageItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="6"><ImageItem img={img2}slot="start"title="Cat"></ImageItem></IonCol>
            <IonCol><ImageItem img={img2}slot="start"title="Cat"></ImageItem></IonCol>
            <IonCol><ImageItem img={img2}slot="start"title="Cat"></ImageItem></IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="3">ion-col size="3"</IonCol>
            <IonCol>ion-col</IonCol>
            <IonCol size="3">ion-col size="3"</IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="3">ion-col size="3"</IonCol>
            <IonCol size="3" offset="3">
            ion-col size="3" offset="3"
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>ion-col</IonCol>
            <IonCol>
            ion-col
            <br />#
            </IonCol>
            <IonCol>
            ion-col
            <br />#
            <br />#
            </IonCol>
            <IonCol>
            ion-col
            <br />#
            <br />#
            <br />#
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol className="ion-align-self-start">ion-col start</IonCol>
            <IonCol className="ion-align-self-center">ion-col center</IonCol>
            <IonCol className="ion-align-self-end">ion-col end</IonCol>
            <IonCol>
            ion-col
            <br />#
            <br />#
            </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-start">
            <IonCol>start ion-col</IonCol>
            <IonCol>start ion-col</IonCol>
            <IonCol className="ion-align-self-end">start ion-col end</IonCol>
            <IonCol>
            ion-col
            <br />#
            <br />#
            </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-center">
            <IonCol>center ion-col</IonCol>
            <IonCol>center ion-col</IonCol>
            <IonCol>center ion-col</IonCol>
            <IonCol>
            ion-col
            <br />#
            <br />#
            </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-end">
            <IonCol>end ion-col</IonCol>
            <IonCol className="ion-align-self-start">end ion-col start</IonCol>
            <IonCol>end ion-col</IonCol>
            <IonCol>
            ion-col
            <br />#
            <br />#
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="12" size-sm>
            ion-col size="12" size-sm
            </IonCol>
            <IonCol size="12" size-sm>
            ion-col size="12" size-sm
            </IonCol>
            <IonCol size="12" size-sm>
            ion-col size="12" size-sm
            </IonCol>
            <IonCol size="12" size-sm>
            ion-col size="12" size-sm
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="12" size-md>
            ion-col size="12" size-md
            </IonCol>
            <IonCol size="12" size-md>
            ion-col size="12" size-md
            </IonCol>
            <IonCol size="12" size-md>
            ion-col size="12" size-md
            </IonCol>
            <IonCol size="12" size-md>
            ion-col size="12" size-md
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="6" size-lg offset="3">
            ion-col size="6" size-lg offset="3"
            </IonCol>
            <IonCol size="3" size-lg>
            ion-col size="3" size-lg
            </IonCol>
        </IonRow>
        </IonGrid>
        <div id="x">
            <ImageItem img="http://placekitten.com/g/200/300" slot="start" title="Cat"></ImageItem>
            <ImageItem img="http://placekitten.com/g/200/300" slot="start" title="Cat"></ImageItem>
            <ImageItem img="http://placekitten.com/g/200/300" slot="start" title="Cat"></ImageItem>
            <ImageItem img="http://placekitten.com/g/200/300" slot="start" title="Cat"></ImageItem>
        </div>

        <div id="y">
            <ImageItem img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb" slot="start" title="Willyan"></ImageItem>
            <ImageItem img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb" slot="start" title="Willyan"></ImageItem>
            <ImageItem img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb" slot="start" title="Willyan"></ImageItem>
            <ImageItem img="https://secure.gravatar.com/avatar/e345dd4dd3f3a7487db5714104e97cdb" slot="start" title="Willyan"></ImageItem>
        </div>

        <ImageItem img="https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/46717218_2238497662829699_7046670606808383488_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeF7iNno0quai-Rn0A0KPIg8xz5esRj9EUvHPl6xGP0RSwgIC-C8NROz10sp9k8EqIGPmogYa0CfYmCrxfm3NTPP&_nc_ohc=a_pU9I1qwRIAX8pz1Ut&_nc_ht=scontent.fjoi2-1.fna&oh=4331c8f669de9f811fbb3e33164f3e2a&oe=5EB5E17A" slot="end" title="Willyan"></ImageItem>
        <ImageItem img="https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/46717218_2238497662829699_7046670606808383488_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeF7iNno0quai-Rn0A0KPIg8xz5esRj9EUvHPl6xGP0RSwgIC-C8NROz10sp9k8EqIGPmogYa0CfYmCrxfm3NTPP&_nc_ohc=a_pU9I1qwRIAX8pz1Ut&_nc_ht=scontent.fjoi2-1.fna&oh=4331c8f669de9f811fbb3e33164f3e2a&oe=5EB5E17A" slot="end" title="Willyan"></ImageItem>
        
        </>
    );
}

export const Exemple019 : React.FC = () => {
    /* 
    Exemplo:
    Exemplo com 'ion-GRID' de varios tipos
    */

    //@ts-ignore
   const { state, dispatch } = useContext(AppContext);

    return (
        <>
        </>
    );
}

export const Exemple020 : React.FC = () => {
  /* 
  Exemplo:
  Exemplo com 'global state e exemplo de socket-io'
  */

  //@ts-ignore
 const { state, dispatch } = useContext(AppContext);

  return (
      <>
      </>
  );
}

export const Exemple021 : React.FC = () => {
  /* 
  Exemplo:
  Exemplo com 'reorder'
  */

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
  
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  const [disable, setDisable] = useState<boolean>(false);

  return (
      <>
      <ItemDivider title="Exemple - 021 (Reordem de itens de uma lista)" color="danger"></ItemDivider>

      {/* Icone Customizado */}
      <ReorderList list={["Item A","Item B","Item C"]} icon={repeat} slot="end"
        onClick={(index)=>{alert(index)}}
        onItemReorder={async(from: number, to: number)=>{alert(`Changed from ${from} to ${to} !`)}}>
      </ReorderList>

      {/* Icone Padrao */}
      <ReorderList list={["Item X","Item Y","Item Z"]} slot="start"
        onClick={(index)=>{alert(index)}}
        onItemReorder={async(from: number, to: number)=>{alert(`Changed from ${from} to ${to} !`)}}>
      </ReorderList>

      {/* Icone Padrao */}
      <ReorderList list={["Item X","Item Y","Item Z"]} slot="end"
        onClick={(index)=>{alert(index)}}
        onItemReorder={async(from: number, to: number)=>{alert(`Changed from ${from} to ${to} !`)}}>
      </ReorderList>

      {/* Elemento sem icone */}
      <ReorderList list={["Item 111","Item 222","Item 333"]}
        onClick={(index)=>{alert(index)}}
        onItemReorder={async(from: number, to: number)=>{alert(`Changed from ${from} to ${to} !`)}}>
      </ReorderList>

      

      </>
  );
}

export const Exemple022 : React.FC = () => {
  /* 
  Exemplo:
  Exemplo com 'IonSegment'
  */

  const [disable, setDisable] = useState<boolean>(false);

  return (
      <>
      <ItemDivider title="Exemple - 022 (Segmentos)" color="danger"></ItemDivider>

        {/*-- Default Segment --*/}
        <IonSegment onIonChange={(e:any) => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="friends">
            <IonLabel>Friends</IonLabel>
            <IonIcon icon={home} />
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Enemies</IonLabel>
            <IonIcon icon={home} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- Disabled Segment --*/}
        <IonSegment onIonChange={(e:any) => console.log('Segment selected', e.detail.value)} disabled value="sunny">
          <IonSegmentButton value="sunny">
            <IonLabel>Sunny</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="rainy">
            <IonLabel>Rainy</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with anchors --*/}
        <IonSegment onIonChange={(e:any) => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="dogs">
            <IonLabel>Dogs</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="cats">
            <IonLabel>Cats</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Scrollable Segment --*/}
        <IonSegment scrollable value="heart">
          <IonSegmentButton value="home">
            <IonIcon icon={home} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
          <IonSegmentButton value="star">
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="globe">
            <IonIcon icon={globe} />
          </IonSegmentButton>
          <IonSegmentButton value="basket">
            <IonIcon icon={basket} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with secondary color --*/}
        <IonSegment onIonChange={(e:any) => console.log('Segment selected', e.detail.value)} color="secondary">
          <IonSegmentButton value="standard">
            <IonLabel>Standard</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hybrid">
            <IonLabel>Hybrid</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sat">
            <IonLabel>Satellite</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment in a toolbar --*/}
        <IonToolbar>
          <IonSegment onIonChange={(e:any) => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="camera">
              <IonIcon icon={camera} />
            </IonSegmentButton>
            <IonSegmentButton value="bookmark">
              <IonIcon icon={bookmark} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {/*-- Segment with default selection --*/}
        <IonSegment onIonChange={(e:any) => console.log('Segment selected', e.detail.value)} value="javascript">
          <IonSegmentButton value="python">
            <IonLabel>Python</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="javascript">
            <IonLabel>Javascript</IonLabel>
          </IonSegmentButton>
        </IonSegment>

      

      </>
  );
}

export const Exemple023 : React.FC = () => {
  /* 
  Exemplo:
  Exemplo com 'checkbox'
  */

  const checkboxList = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
  const [checked, setChecked] = useState(false);

  return (
      <>
      <ItemDivider title="Exemple - 023 (checkbox)" color="danger"></ItemDivider>

      <IonList>
        <IonItemDivider>Default Checkbox</IonItemDivider>
        <IonItem>
          <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
          <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
        </IonItem>

        <IonItemDivider>Disabled Checkbox</IonItemDivider>
        <IonItem><IonCheckbox slot="end" disabled={true} /></IonItem>

        <IonItemDivider>Checkbox Colors</IonItemDivider>
        <IonItem>
          <IonCheckbox slot="end" color="primary" />
          <IonCheckbox slot="end" color="secondary" />
          <IonCheckbox slot="end" color="danger" />
          <IonCheckbox slot="end" color="light" />
          <IonCheckbox slot="end" color="dark" />
        </IonItem>
        <IonItemDivider>Checkboxes in a List</IonItemDivider>

        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox onIonChange={e =>{console.log(e.detail)}} slot="end" value={val} checked={isChecked} />
          </IonItem>
        ))}
      </IonList>
      {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} />
          </IonItem>
        ))}
      </>
  );
}
export const Exemple024 : React.FC = () => {
  /* 
  Exemplo:
  Exemplo com 'IonRange '
  */

  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });

  return (
      <>
      <ItemDivider title="Exemple - 024 (IonRange )" color="danger"></ItemDivider>

      <IonItem>
        <IonRange pin={true} value={value} onIonChange={e => setValue(e.detail.value as number)}>
          <IonIcon size="small" slot="start" icon={sunny} />
          <IonIcon slot="end" icon={sunny} />
        </IonRange>
      </IonItem>

      <IonList>
          <IonItemDivider>Default</IonItemDivider>
          <IonItem>
            <IonRange pin={true} value={value} onIonChange={e => setValue(e.detail.value as number)} />
          </IonItem>
          <IonItem>
            <IonLabel>Value: {value}</IonLabel>
          </IonItem>

          <IonItemDivider>Min & Max</IonItemDivider>
          <IonItem>
            <IonRange min={-200} max={200} color="secondary">
              <IonLabel slot="start">-200</IonLabel>
              <IonLabel slot="end">200</IonLabel>
            </IonRange>
          </IonItem>

          <IonItemDivider>Icons</IonItemDivider>
          <IonItem>
            <IonRange min={20} max={80} step={2}>
              <IonIcon size="small" slot="start" icon={sunny} />
              <IonIcon slot="end" icon={sunny} />
            </IonRange>
          </IonItem>

          <IonItemDivider>With Snaps & Ticks</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary" />
          </IonItem>

          <IonItemDivider>With Snaps & No Ticks</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary" />
          </IonItem>

          <IonItemDivider>Dual Knobs</IonItemDivider>
          <IonItem>
            <IonRange dualKnobs={true} min={0} max={60} step={3} snaps={true} onIonChange={e => setRangeValue(e.detail.value as any)} />
          </IonItem>
          <IonItem>
            <IonLabel>Value: lower: {rangeValue.lower} upper: {rangeValue.upper}</IonLabel>
          </IonItem>
        </IonList>

      </>
  );
}

export const Exemple025 : React.FC = () => {
  /* 
  Exemplo:
  Exemplo com 'datetime '
  */

  const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

  const customDayShortNames = [
    's\u00f8n',
    'man',
    'tir',
    'ons',
    'tor',
    'fre',
    'l\u00f8r'
  ];

  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  return (
      <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonDatetime Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>MMMM</IonLabel>
          <IonDatetime displayFormat="MMMM" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>MM DD YY</IonLabel>
          <IonDatetime displayFormat="MM DD YY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Disabled</IonLabel>
          <IonDatetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>YYYY</IonLabel>
          <IonDatetime pickerOptions={{
            buttons: [
              {
                text: 'Save',
                handler: () => console.log('Clicked Save!')
              }, {
                text: 'Log',
                handler: () => {
                  console.log('Clicked Log. Do not Dismiss.');
                  return false;
                }
              }
            ]
          }}
            placeholder="Custom Options" displayFormat="YYYY" min="1981" max="2002"
            value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}>
          </IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">MMMM YY</IonLabel>
          <IonDatetime displayFormat="MMMM YY" min="1989-06-04" max="2004-08-23" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">MM/DD/YYYY</IonLabel>
          <IonDatetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">MM/DD/YYYY</IonLabel>
          <IonDatetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>DDD. MMM DD, YY (custom locale)</IonLabel>
          <IonDatetime
            min="1990-02"
            max="2000"
            dayShortNames={customDayShortNames}
            displayFormat="DDD. MMM DD, YY"
            monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
            value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>D MMM YYYY H:mm</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>DDDD MMM D, YYYY</IonLabel>
          <IonDatetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>HH:mm</IonLabel>
          <IonDatetime cancelText="Cancelar" doneText="Ok" displayFormat="HH:mm" value={selectedDate} onIonChange={e => {setSelectedDate(e.detail.value!);let abc = (new Date(e.detail.value || "").getHours());console.log(("0" + abc).slice(-2));}}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>h:mm a</IonLabel>
          <IonDatetime displayFormat="h:mm a" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>hh:mm A (15 min steps)</IonLabel>
          <IonDatetime displayFormat="h:mm A" minuteValues="0,15,30,45" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Leap years, summer months</IonLabel>
          <IonDatetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" monthValues="6,7,8" yearValues={customYearValues} value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Specific days/months/years</IonLabel>
          <IonDatetime
            monthValues='6,7,8'
            yearValues='2014,2015'
            dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"
            displayFormat="DD/MMM/YYYY"
            value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          Selected Date: {selectedDate ? '(none)' : ''}
        </IonToolbar>
      </IonFooter>
      </>
  );
}
export const Exemple026 : React.FC = () => {
  /* 
  Exemplo:
  Exemplo com 'IonSelect'
  */

 const [gender, setGender] = useState<string>();
 const [hairColor, setHairColor] = useState<string>('brown');

  return (
      <>
      <IonList>
        <IonListHeader>
          <IonLabel>
            Single Selection
          </IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Gender</IonLabel>
          <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
            <IonSelectOption value="female">Female</IonSelectOption>
            <IonSelectOption value="male">Male</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Hair Color</IonLabel>
          <IonSelect value={hairColor} okText="Okay" cancelText="Dismiss" onIonChange={e => setHairColor(e.detail.value)}>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItemDivider>Your Selections</IonItemDivider>
        <IonItem>Gender: {gender ? gender : '(none selected)'}</IonItem>
        <IonItem>Hair Color: {hairColor}</IonItem>
      </IonList>
      </>
  );
}