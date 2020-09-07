// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║      ╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ║   ║ ║║ ║         ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║         ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ╔╝ ╚══╝ ║║ ╚═════╗║ ║      ║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import utilityEngine from '@sarc-test/utility-engine';

import broadcastEngine from '../dist/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

broadcastEngine('user').once('onPasswordChange', function(...parameters) {
    console.log('onPasswordChange', ...parameters);
});

broadcastEngine('user').emit('onPasswordChange', {'1': 'a'});
broadcastEngine('user').emit('onPasswordChange', {'1': 'a'});
broadcastEngine('user').emit('onPasswordChange', {'1': 'a'});

function isEventEmitter(value) {
    return utilityEngine.isObject(value) &&
        utilityEngine.isObject(value._events) &&
        utilityEngine.isNumber(value._eventsCount) &&
        utilityEngine.isNumber(value._maxListeners) ||
        utilityEngine.isUndefined(value._maxListeners);
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║      ╚══╗ ╔══╝
//  ║ ║  ║ ║║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ║   ║ ║║ ║         ║ ║
//  ║ ║  ║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║         ║ ║
// ╔╝ ╚══╝ ║║ ╚═════╗║ ║      ║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗   ║ ║
// ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝   ╚═╝

describe('Default', function() {
    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
    // ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║      ╚══╗ ╔══╝
    //  ║ ║  ║ ║║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ║   ║ ║║ ║         ║ ║
    //  ║ ║  ║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║         ║ ║
    // ╔╝ ╚══╝ ║║ ╚═════╗║ ║      ║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗   ║ ║
    // ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝   ╚═╝

    describe('#(channelName)', function() {
        describe('#(channelName)', function() {

        });

        describe('#(CHANNELNAME)', function() {
            it('Should return an event emitter when channel name parameter is null', () => {
                expect(broadcastEngine(null)).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is undefined', () => {
                expect(broadcastEngine(undefined)).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is an empty object', () => {
                expect(broadcastEngine({})).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a filled object', () => {
                expect(broadcastEngine({foo: 'bar'})).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is true boolean', () => {
                expect(broadcastEngine(true)).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is false boolean', () => {
                expect(broadcastEngine(false)).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a number', () => {
                expect(broadcastEngine(1)).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a primitive number', () => {
                expect(broadcastEngine(Number('1'))).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a wrapped primitive number', () => {
                expect(broadcastEngine(new Number('1'))).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a string', () => {
                expect(broadcastEngine('string')).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a primitive string', () => {
                expect(broadcastEngine(String('string'))).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a wrapped primitive string', () => {
                expect(broadcastEngine(new String('string'))).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is an array', () => {
                expect(broadcastEngine([])).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a map', () => {
                expect(broadcastEngine(new Map())).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a date', () => {
                expect(broadcastEngine(new Date())).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a function', () => {
                expect(broadcastEngine(function() {})).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a class declaration', () => {
                expect(broadcastEngine(class Class {})).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a class instance', () => {
                expect(broadcastEngine(new (class Class {})())).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });

            it('Should return an event emitter when channel name parameter is a class instance', () => {
                expect(broadcastEngine(new (class Class {}))).to.satisfy(function(value) {
                    return isEventEmitter(value);
                });
            });
        });
    });
});
