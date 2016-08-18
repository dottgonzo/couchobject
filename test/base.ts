import * as mocha from "mocha";
import * as chai from "chai";


const expect = chai.expect

import CouchObj from "../index";

const Obj = CouchObj();



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


        it("expect createdAt as number", function() {
            expect(Obj).to.have.property("createdAt").that.is.a("number");
        });
        it("expect updatedAt as number equal to createdAt", function() {
            expect(Obj).to.have.property("updatedAt").that.is.a("number");
        });
        it("expect _id as string", function() {
            expect(Obj).to.have.property("_id").that.is.a("string");
        });
    });
    
        describe("composition of _id", function() {

        it("expect that _id is composed of 4 word", function() {

            expect(Obj._id.split("_").length).that.equal(4);

        });

        it("expect that first word of _id is class data", function() {

            expect(Obj._id.split("_")[0]).that.equal("data");

        });
        it("expect that second word of _id is serial 00000", function() {

            expect(Obj._id.split("_")[1]).that.equal("00000");

        });
        it("expect that third word of _id is a number equal to createdAt", function() {

            expect(parseInt(Obj._id.split("_")[2])).that.is.a("number").that.equal(Obj.createdAt);

        });
                it("expect fourth word of _id is an uid", function() {

            expect(Obj._id.split("_")[3]).that.is.a("string");

        });
                       it("expect fourth word of _id is an uid of 5 characters", function() {

            expect(Obj._id.split("_")[3].length).that.equal(6);

        });
    });

    
});


