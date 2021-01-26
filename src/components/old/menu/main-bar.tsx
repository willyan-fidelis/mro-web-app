import React, { useCallback, useContext, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import RefreshIcon from '@material-ui/icons/Refresh'
import { IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { search,film } from 'ionicons/icons';
import { Redirect, useHistory  } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const ButtonAppBar = (props:any) => {
    const classes = useStyles(props);
    let [redirect, setRedirect] = useState<string>('\tab1');
    let history = useHistory();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <RefreshIcon className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </RefreshIcon> */}

                        {/* <IonSegment onIonChange={(e:any) => {
                            if(e.detail.value=="Replays"){console.log('3');history.push("/tab1")}else{console.log('2');history.push("/tab2")};
                            console.log('Segment selected', e.detail.value);
                            }}>
                            <IonSegmentButton value="Replays">
                                <IonLabel>Replays</IonLabel>
                                <IonIcon icon={film} />
                            </IonSegmentButton>
                            <IonSegmentButton value="Procurar">
                                <IonLabel>Procurar</IonLabel>
                                <IonIcon icon={search} />
                            </IonSegmentButton>
                        </IonSegment> */}
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
