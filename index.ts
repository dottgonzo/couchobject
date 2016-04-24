interface Iuid {
    (): string
}

let uid: Iuid = require("uid");


interface ICouchobj {


    _id: string;
    createdAt: number;
    updatedAt: number;
    permalink: string;
    uid: string;
    _rev: string;
    _apiVersion: string;
    class: string;
}


interface Iconf {

    _id?: string;
    _createdAt?: number;
    _updatedAt?: number;
    _serial?: string;
    _rev?: string;
    _apiVersion?: string;
    _class?: string;

}


class Couchobj {


    _id: string;
    _createdAt: number;
    _updatedAt: number;
    _serial: string;
    _rev: string;
    _apiVersion: string;
    _class: string;



    constructor(conf?: Iconf) {

        let _id;


        if (conf && conf._class) {
            this._class = conf._class;
            if (!conf || !conf._id) _id = _id + this._class + "_";
        }
        if (conf && conf._serial) {
            this._serial = conf._serial;
            if (!conf || !conf._id) _id = _id + this._serial + "_";
        }

        if (conf && conf._apiVersion) this._apiVersion = conf._apiVersion;


        if (conf && conf._createdAt) {
            this._createdAt = conf._createdAt
        } else {
            this._createdAt = new Date().getTime();
        }
        if (conf && conf._updatedAt) {
            this._updatedAt = conf._updatedAt
        } else {
            this._updatedAt = this._createdAt;
        }


        if (conf && conf._id) {
            _id = conf._id



        } else {

            _id = _id + uid();

        }

        this._id = _id;
       


        // this.locations = event.locations;



    }



}



export = Couchobj
