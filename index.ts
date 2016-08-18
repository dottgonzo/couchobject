const uid: Iuid = require("uid");


interface Iuid {
    (n?: number): string
}

interface ICouchobj {


    _id: string;
    createdAt: number;
    updatedAt: number;
    permalink: string;
    uid: string;
    _rev: string;
    apiVersion: string;
    class: string;
}


interface Iconf {

    _id?: string;
    createdAt?: number;
    updatedAt?: number;
    serial?: any;
    _rev?: string;
    apiVersion?: string;
    class?: any;

}


export default class {


    _id: string;
    createdAt: number;
    updatedAt: number;
    serial: string;
    _rev: string;
    apiVersion: string;
    class: string;



    constructor(conf?: Iconf) {

        let _id;

        if (conf && conf.class) {
            this.class = conf.class;
            if (!conf || !conf._id) _id = this.class + "_";
        } else if (!conf || !conf._id) {
            _id = "data_";
        }

        if (conf && conf.serial) {
            this.serial = conf.serial;
            if (!conf || !conf._id) _id = _id + this.serial + "_";
        } else if (!conf || !conf._id) {
            _id = _id + "00000_";
        }


        if (conf && conf.apiVersion) this.apiVersion = conf.apiVersion;

        if (conf && conf.createdAt) {
            this.createdAt = conf.createdAt;
        } else {
            this.createdAt = new Date().getTime();
        }

        if (!conf || !conf._id) _id = _id + this.createdAt + "_";

        if (conf && conf.updatedAt) {
            this.updatedAt = conf.updatedAt
        } else {
            this.updatedAt = this.createdAt;
        }


        if (conf && conf._id) {
            _id = conf._id
        } else {
            _id = _id + uid(6);
        }

        this._id = _id;
       

        // this.locations = event.locations;

    }

}




