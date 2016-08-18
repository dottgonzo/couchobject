"use strict";
const chai = require("chai");
const expect = chai.expect;
const index_1 = require("../index");
const Obj = new index_1.default();
describe("test new object with no conf", function () {
    describe("basic test existence", function () {
        it("expect no errors", function () {
            expect(Obj).to.be.ok;
        });
        it("expect an object", function () {
            expect(Obj).to.be.an("Object");
        });
    });
    describe("properties", function () {
        it("expect createdAt as number", function () {
            expect(Obj).to.have.property("createdAt").that.is.a("number");
        });
        it("expect updatedAt as number equal to createdAt", function () {
            expect(Obj).to.have.property("updatedAt").that.is.a("number");
        });
        it("expect _id as string", function () {
            expect(Obj).to.have.property("_id").that.is.a("string");
        });
    });
    describe("composition of _id", function () {
        it("expect that _id is composed of 4 word", function () {
            expect(Obj._id.split("_").length).that.equal(4);
        });
        it("expect that first word of _id is class data", function () {
            expect(Obj._id.split("_")[0]).that.equal("data");
        });
        it("expect that second word of _id is serial 00000", function () {
            expect(Obj._id.split("_")[1]).that.equal("00000");
        });
        it("expect that third word of _id is a number equal to createdAt", function () {
            expect(parseInt(Obj._id.split("_")[2])).that.is.a("number").that.equal(Obj.createdAt);
        });
        it("expect fourth word of _id is an uid", function () {
            expect(Obj._id.split("_")[3]).that.is.a("string");
        });
        it("expect fourth word of _id is an uid of 5 characters", function () {
            expect(Obj._id.split("_")[3].length).that.equal(6);
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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UUFFMUYsQ0FBQyxDQUFDLENBQUM7UUFDSyxFQUFFLENBQUMscUNBQXFDLEVBQUU7WUFFOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEQsQ0FBQyxDQUFDLENBQUM7UUFDWSxFQUFFLENBQUMscURBQXFELEVBQUU7WUFFckUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vY2hhIGZyb20gXCJtb2NoYVwiO1xuaW1wb3J0ICogYXMgY2hhaSBmcm9tIFwiY2hhaVwiO1xuXG5cbmNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0XG5cbmltcG9ydCBDb3VjaE9iaiBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc3QgT2JqID0gbmV3IENvdWNoT2JqKCk7XG5cblxuXG5kZXNjcmliZShcInRlc3QgbmV3IG9iamVjdCB3aXRoIG5vIGNvbmZcIiwgZnVuY3Rpb24oKSB7XG4gICAgZGVzY3JpYmUoXCJiYXNpYyB0ZXN0IGV4aXN0ZW5jZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImV4cGVjdCBubyBlcnJvcnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleHBlY3QoT2JqKS50by5iZS5vaztcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwiZXhwZWN0IGFuIG9iamVjdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4cGVjdChPYmopLnRvLmJlLmFuKFwiT2JqZWN0XCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcInByb3BlcnRpZXNcIiwgZnVuY3Rpb24oKSB7XG5cblxuICAgICAgICBpdChcImV4cGVjdCBjcmVhdGVkQXQgYXMgbnVtYmVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZXhwZWN0KE9iaikudG8uaGF2ZS5wcm9wZXJ0eShcImNyZWF0ZWRBdFwiKS50aGF0LmlzLmEoXCJudW1iZXJcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcImV4cGVjdCB1cGRhdGVkQXQgYXMgbnVtYmVyIGVxdWFsIHRvIGNyZWF0ZWRBdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4cGVjdChPYmopLnRvLmhhdmUucHJvcGVydHkoXCJ1cGRhdGVkQXRcIikudGhhdC5pcy5hKFwibnVtYmVyXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJleHBlY3QgX2lkIGFzIHN0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4cGVjdChPYmopLnRvLmhhdmUucHJvcGVydHkoXCJfaWRcIikudGhhdC5pcy5hKFwic3RyaW5nXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICAgICAgZGVzY3JpYmUoXCJjb21wb3NpdGlvbiBvZiBfaWRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJleHBlY3QgdGhhdCBfaWQgaXMgY29tcG9zZWQgb2YgNCB3b3JkXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBleHBlY3QoT2JqLl9pZC5zcGxpdChcIl9cIikubGVuZ3RoKS50aGF0LmVxdWFsKDQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiZXhwZWN0IHRoYXQgZmlyc3Qgd29yZCBvZiBfaWQgaXMgY2xhc3MgZGF0YVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgZXhwZWN0KE9iai5faWQuc3BsaXQoXCJfXCIpWzBdKS50aGF0LmVxdWFsKFwiZGF0YVwiKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJleHBlY3QgdGhhdCBzZWNvbmQgd29yZCBvZiBfaWQgaXMgc2VyaWFsIDAwMDAwXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBleHBlY3QoT2JqLl9pZC5zcGxpdChcIl9cIilbMV0pLnRoYXQuZXF1YWwoXCIwMDAwMFwiKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJleHBlY3QgdGhhdCB0aGlyZCB3b3JkIG9mIF9pZCBpcyBhIG51bWJlciBlcXVhbCB0byBjcmVhdGVkQXRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGV4cGVjdChwYXJzZUludChPYmouX2lkLnNwbGl0KFwiX1wiKVsyXSkpLnRoYXQuaXMuYShcIm51bWJlclwiKS50aGF0LmVxdWFsKE9iai5jcmVhdGVkQXQpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGl0KFwiZXhwZWN0IGZvdXJ0aCB3b3JkIG9mIF9pZCBpcyBhbiB1aWRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGV4cGVjdChPYmouX2lkLnNwbGl0KFwiX1wiKVszXSkudGhhdC5pcy5hKFwic3RyaW5nXCIpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICBpdChcImV4cGVjdCBmb3VydGggd29yZCBvZiBfaWQgaXMgYW4gdWlkIG9mIDUgY2hhcmFjdGVyc1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgZXhwZWN0KE9iai5faWQuc3BsaXQoXCJfXCIpWzNdLmxlbmd0aCkudGhhdC5lcXVhbCg2KTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIFxufSk7XG5cblxuIl19
