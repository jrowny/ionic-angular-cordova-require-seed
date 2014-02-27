/*
    File: main.js
    Author: Jonathan Rowny (jrowny@gmail.com)
    Description: Loads up all the things you need to make a fun contacts app with Angular
*/
require.config({
    paths: {
        cordova: '../cordova',
        angular: '../lib/js/angular/angular',
        angularAnimate: '../lib/js/angular/angular-animate',
        angularTouch: '../lib/js/angular/angular-touch',
        angularSanitize: '../lib/js/angular/angular-sanitize',
        uiRouter: '../lib/js/angular-ui/angular-ui-router',
        ionic: '../lib/js/ionic',
        angularIonic: '../lib/js/ionic-angular',
        text: '../bower_components/requirejs-text/text'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularAnimate' : ['angular'],
        'angularTouch' : ['angular'],
        'angularSanitize' : ['angular'],
        'uiRouter' : ['angular'],
        'ionic' :  {'exports' : 'ionic'},
        'angularIonic': ['angular', 'ionic','uiRouter', 'angularAnimate', 'angularTouch', 'angularSanitize']
    },
    priority: [
        "angular"
    ]
});

require( [
    'cordova',
    'ionic',
    'angular',
    'app'], function(cordova, ionic, angular, app) {
    'use strict';

    var start  = function(){
        angular.bootstrap(document, [app['name']]);
    }
    (document.body && device) ? start() : ionic.Platform.ready(start);

});