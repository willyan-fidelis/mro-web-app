const axios = require('axios');
//import * as axios from 'axios'

interface userModel {
    email: string | null,
    session: string | null,
    name: string | null,
}

export class Api {
    private user: userModel = { email: null, session: null, name: null };
    private base_url: string = 'http://192.168.0.18:3001'
    constructor() {
        //this.api = axios.default('http://localhost:3001/')
        console.log("Hello willyan again!")
    }

    async places(): Promise<Array<any>> {

        return new Promise(async (resolve: any, reject: any) => {
            axios.get(this.base_url + '/places/bra/sc/join/copa/places/',
                {

                },
                { headers: { 'Content-Type': 'application/json' } }
            ).then((response: any) => {
                resolve([response.data, null])
            }, (error: any) => {
                resolve([null, error])
            });
        })
    }

    xxx() {
        axios.get(this.base_url + '/videos/highest-rated-videos/local/3',
            {
                email: "maicon@gmail.com",
                session: "b283baf4e50f743a307eb9f130e9fcce",
                offset: "0",
                max: "100"
            },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((response: any) => {
            console.log(response);
        }, (error: any) => {
            console.log(error);
        });

        /*         axios({
                    method: 'get',
                    url: this.base_url + '/videos/highest-rated-videos/local/3',
                    //headers: {},
                    data: {
                        email: "maicon@gmail.com",
                        session: "b283baf4e50f743a307eb9f130e9fcce",
                        offset: "0",
                        max: "100"
                    }
                }).then((response: any) => {
                    console.log(response);
                }, (error: any) => {
                    console.log(error);
                }); */
    }
    async highest_rated_videos(offset: number, max: number): Promise<Array<any>> {
        return new Promise(async (resolve: any, reject: any) => {
            axios.post(this.base_url + '/videos/highest-rated-videos/all/',
                {
                    email: this.user.email,
                    session: this.user.session,
                    offset,
                    max
                },
                { headers: { 'Content-Type': 'application/json' } }
            ).then((response: any) => {
                resolve([response.data, null])
            }, (error: any) => {
                resolve([null, error])
            });
        })
    }
    async teste(): Promise<any> {
        console.log("Tested!")
        let [res, err] = await this.places()
        console.log(res)
        res ? alert(res.msg) : alert("Erro: " + err)
    }
}