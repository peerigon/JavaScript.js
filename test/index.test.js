"use strict";

var expect;

if (typeof require === "function") {
    expect = require("expect.js");

    // launching mighty compiler
    require("../lib/index.js");
} else {
    expect = window.expect;
}

describe("JavaScript.js", function () {
    describe("Boolean", function () {
        it("should be a Boolean", function () {
            expect(true).to.be.a("boolean");
            expect(false).to.be.a("boolean");
        });
    });
    describe("Number", function () {
        it("should be a Number", function () {
            expect(1).to.be.a("number");
            expect(4.3e12).to.be.a("number");
       });
    });
    describe("String", function () {
        it("should be a String", function () {
            expect("Hello").to.be.a("string");
            expect("").to.be.a("string");
       });
    });
    describe("Array", function () {
        it("should be an Array", function () {
            expect([]).to.be.an(Array);
            expect([1, 2, 3]).to.be.an(Array);
        });
    });
    describe("Object", function () {
        it("should be an Object", function () {
            expect({}).to.be.an(Object);
            expect({ myObj: "myObj" }).to.be.an(Object);
        });
    });
    describe("Function", function () {
        it("should be a Function", function () {
            expect(function () {}).to.be.a(Function);
        });
    });
});


