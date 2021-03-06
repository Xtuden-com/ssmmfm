/* global require */

require.config({
    baseUrl: '../../',
    urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        bootstrap: {
            deps: [
                'jquery'
            ]
        },
        mousetrap: {
            exports: 'Mousetrap'
        },
        elasticsearch: {
            exports: 'elasticsearch'
        },
        mocha: {
            exports: 'mocha'
        },
        chai: {
            exports: 'chai'
        },
        sinon: {
            exports: 'sinon'
        }
    },

    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        underscore: 'bower_components/underscore/underscore-min',
        handlebars: 'bower_components/handlebars/handlebars.min',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
        backbone: 'bower_components/backbone/backbone',
        mousetrap: 'bower_components/mousetrap/mousetrap.min',
        elasticsearch: 'bower_components/elasticsearch/elasticsearch.min',
        text: 'bower_components/requirejs-text/text',
        mocha: 'bower_components/mocha/mocha',
        chai: 'bower_components/chai/chai',
        sinon: 'bower_components/sinon/lib/sinon',
        tests: 'test/tests',
        fixtures: 'test/fixtures',
        helpers: 'test/helpers'
    }
});