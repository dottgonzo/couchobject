
import * as mocha from "mocha";
import * as chai from "chai";

let expect = chai.expect

import CouchObj from "../index";



const ClassAndSerial = { serial: "seffesgsrgr", class: "cllgr" }

const ObjwithConf = CouchObj(ClassAndSerial);




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


        it("expect createdAt as number", function() {
            expect(ObjwithConf).to.have.property("createdAt").that.is.a("number");
        });
        it("expect updatedAt as number", function() {
            expect(ObjwithConf).to.have.property("updatedAt").that.is.a("number");
        });
        it("expect _id as string", function() {
            expect(ObjwithConf).to.have.property("_id").that.is.a("string");
        });


    });
    describe("corrispondence for object with class and serial", function() {


        it("expect that class is " + ClassAndSerial.class, function() {
            expect(ObjwithConf).to.have.property("class").that.equal(ClassAndSerial.class);
        });
        it("expect that serial is " + ClassAndSerial.serial, function() {
            expect(ObjwithConf).to.have.property("serial").that.equal(ClassAndSerial.serial);
        });


    });
    describe("composition of _id", function() {

        it("expect that _id is composed of 4 word", function() {

            expect(ObjwithConf._id.split("_").length).that.equal(4);

        });

        it("expect that first word of _id is class", function() {

            expect(ObjwithConf._id.split("_")[0]).that.equal(ClassAndSerial.class);

        });
        it("expect that second word of _id is serial", function() {

            expect(ObjwithConf._id.split("_")[1]).that.equal(ClassAndSerial.serial);

        });
        it("expect that third word of _id is a number equal to createdAt", function() {

            expect(parseInt(ObjwithConf._id.split("_")[2])).that.is.a("number").that.equal(ObjwithConf.createdAt);

        });
                it("expect fourth word of _id is an uid", function() {

            expect(ObjwithConf._id.split("_")[3]).that.is.a("string");

        });
                       it("expect fourth word of _id is an uid of 5 characters", function() {

            expect(ObjwithConf._id.split("_")[3].length).that.equal(6);

        });
    });




});