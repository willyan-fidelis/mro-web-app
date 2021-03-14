//import { RecipeReviewCard } from '../components/video-player/video-player'
import React from 'react';
import { IonCardContent, IonCard, IonButton } from '@ionic/react';
//import { useVideo } from 'react-use';
//import "node_modules/video-react/dist/video-react.css"; // import css
//import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import './video-player.css';
import { VideoModel } from '../../../application/api'

export interface PropsVideoPlayer {
    data: VideoModel
}

export const VideoPlayer = (props: PropsVideoPlayer) => {


    //console.log(controls, state, ref)
    return (
        <IonCard>
            <script src="dist/clipboard.min.js"></script>
            <IonCardContent>
                <div className='player-wrapper'>
                    <ReactPlayer
                        volume={0.01}
                        playing={true}
                        className='react-player'
                        controls={true}
                        url={props.data.edited_fullname/* 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' */}
                        width='100%'
                        height='100%'
                    />
                </div>
            </IonCardContent>
            <IonCardContent>
                {props.data.customer_name} - {props.data.local_name}  <br />
                Data: {props.data.when_date} <br />
                Hora: {props.data.when_time} <br />
                Download: <a href={props.data.edited_fullname} download>Baixe agora!</a> <br></br>
                Video: <a onClick={()=>{
                    var textField = document.createElement('textarea');
                    textField.innerText = props.data.edited_fullname;
                    document.body.appendChild(textField);
                    textField.select();
                    document.execCommand('copy');
                    textField.remove();
                }}>Copiar URL!</a>
                {/* <IonButton mode="md" onClick={() =>{
                    var textField = document.createElement('textarea');
                    textField.innerText = props.data.edited_fullname;
                    document.body.appendChild(textField);
                    textField.select();
                    document.execCommand('copy');
                    textField.remove();
                }} expand="block">Copiar URL</IonButton> */}
            </IonCardContent>
        </IonCard>
    );
};