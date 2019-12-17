const axios = require('axios');
//import * as axios from 'axios'

interface userModel {
    email: string | null,
    session: string | null,
    name: string | null,
}

export class Api {
    private user: userModel = { email: null, session: null, name: null };
    private base_url: string | undefined = process.env.REACT_APP_API_IP//'http://192.168.25.159:3001'//'http://192.168.0.18:3001'

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
    async latest_bylocalandweekday_videos(
        offset: number, max: number,
        country: string,
        state: string,
        city: string,
        customer: string,
        local: string,
        weekday: string,
        start: string,
        end: string,
    ): Promise<Array<any>> {
        return new Promise(async (resolve: any, reject: any) => {
            axios.post(this.base_url +
                `/videos/last/${country}/${state}/${city}/${customer}/${local}/${weekday}/${start}/${end}/`,
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

export interface VideoModel {
    OID: string,
    city_name: string,
    country_name: string,
    customer_name: string,
    deslikes_rate: number,
    edited_filename: string,
    edited_fullname: string,
    likes_rate: number,
    local_OID: number,
    local_name: string,
    state_name: string,
    thumbnail_img_fullname: string,
    total_rate: number,
    user_video_rate: number | null,
    view_count: number,
    when: string,
    when_date: string,
    when_time: string,
}