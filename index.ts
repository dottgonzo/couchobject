const uid: Iuid = require("uid");


interface Iuid {
    (n?: number): string
}

interface ICouchobj {


    _id: string;
    createdAt: number;
    updatedAt: number;
    serial: string;
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





export default function Obj(conf?: Iconf): ICouchobj {

    let _id: string;

    const _this = <ICouchobj>{}

    if (conf && conf.class) {
        _this.class = conf.class;
        if (!conf || !conf._id) _id = _this.class + "_";
    } else if (!conf || !conf._id) {
        _id = "data_";
    }

    if (conf && conf.serial) {
        _this.serial = conf.serial;
        if (!conf || !conf._id) _id = _id + _this.serial + "_";
    } else if (!conf || !conf._id) {
        _id = _id + "00000_";
    }


    if (conf && conf.apiVersion) _this.apiVersion = conf.apiVersion;

    if (conf && conf.createdAt) {
        _this.createdAt = conf.createdAt;
    } else {
        _this.createdAt = new Date().getTime();
    }

    if (!conf || !conf._id) _id = _id + _this.createdAt + "_";

    if (conf && conf.updatedAt) {
        _this.updatedAt = conf.updatedAt
    } else {
        _this.updatedAt = _this.createdAt;
    }


    if (conf && conf._id) {
        _id = conf._id
    } else {
        _id = _id + uid(6);
    }

    _this._id = _id;

    return _this


    // this.locations = event.locations;



}




