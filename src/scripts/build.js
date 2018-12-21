var fs = require("fs");
var webpack = require("webpack");
var Rx = require("rxjs");
var zipdir = require("zip-dir");
var Rx0 = require("rxq");
var serverConfig = require("./server.config.json");
var extName = require("../package.json").name;


var args = process.argv.slice(2);

var watch = args
    .filter(f => f === "--watch")
    .length > 0;

var deploy = args
    .filter(f => f === "--deploy")
    .length > 0;

var bundleS = new BundleObservable(extName)
    .mergeMap(function (c) {
        return new CopyObservable(c);
    })
    .mergeMap(function (c) {
        return new ZipObservable(c);
    })
    .publish();

if (deploy) {
    var deployed$ = bundle$
        .mergeMap(function (c) {
            return new DeployObservable(c);
        });

    deployedS.subscribe(s => {
        console.log("Deployed bundle to server");
    });
}

bundle$.connect();

bundle$
    .subscribe(s => {
        console.log("Created new bundle");
    }); 
