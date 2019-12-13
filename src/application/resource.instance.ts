import { Api } from './api'
export let api: Api

function initialize_api(): Api {
    let elem: Api = new Api()
    return elem;
}


export function instance_initialize() {
    api = initialize_api()

    console.log("Initialized with sucess!")
}

export function instance_start() {
    //start_a();
}
export function instance_kill() {
    //kill_a();
}