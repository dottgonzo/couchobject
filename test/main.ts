import * as mocha from "mocha";
import * as chai from "chai";

let expect = chai.expect

import CouchObj = require("../index");

let Obj = new CouchObj();

let ClassAndSerial = { _serial: "seffesgsrgr", _class: "cllgr" }

let ObjwithConf = new CouchObj(ClassAndSerial);

describe("test new object with no conf", function() {
    describe("basic test existence", function() {

        it("expect no errors", function() {
            expect(Obj).to.be.ok;
        });
        it("expect an object", function() {
            expect(Obj).to.be.an("Object");
        });
    });
    describe("properties", function() {


        it("expect _createdAt as number", function() {
            expect(Obj).to.have.property("_createdAt").that.is.a("number");
        });
        it("expect _updatedAt as number", function() {
            expect(Obj).to.have.property("_updatedAt").that.is.a("number");
        });
        it("expect _id as string", function() {
            expect(Obj).to.have.property("_id").that.is.a("string");
        });
    });
});



describe("test new object with class and serial", function() {
    describe("basic test existence", function() {

        it("expect no errors", function() {
            expect(ObjwithConf).to.be.ok;
        });
        it("expect an object", function() {
            expect(ObjwithConf).to.be.an("Object");
        });
    });
    describe("properties", function() {


        it("expect _createdAt as number", function() {
            expect(ObjwithConf).to.have.property("_createdAt").that.is.a("number");
        });
        it("expect _updatedAt as number", function() {
            expect(ObjwithConf).to.have.property("_updatedAt").that.is.a("number");
        });
        it("expect _id as string", function() {
            expect(ObjwithConf).to.have.property("_id").that.is.a("string");
        });


    });
    describe("corrispondence for object with class and serial", function() {


        it("expect that _class is " + ClassAndSerial._class, function() {
            expect(ObjwithConf).to.have.property("_class").that.equal(ClassAndSerial._class);
        });
        it("expect that _serial is " + ClassAndSerial._serial, function() {
            expect(ObjwithConf).to.have.property("_serial").that.equal(ClassAndSerial._serial);
        });
     //   it("expect that _id is correct", function() {


       // });

    });
});