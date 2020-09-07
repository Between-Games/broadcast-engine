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

import spies from 'chai-spies';
import chai from 'chai';

chai.use(spies);

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

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
            it('Should call the spy function when event is subscribed too', () => {
                const spy = chai.spy(function() {});

                broadcastEngine('spy').on('spy', spy);

                broadcastEngine('spy').emit('spy', 1);

                expect(spy).to.have.been.called();
            });

            it('Should not call the spy function when not subscribed to channel', () => {
                const spy = chai.spy(function() {});

                broadcastEngine('spy').on('spy', spy);

                broadcastEngine('notSpy').emit('spy', 1);

                expect(spy).to.not.have.been.called();
            });

            it('Should not call the spy function when not subscribed to event', () => {
                const spy = chai.spy(function() {});

                broadcastEngine('spy').on('spy', spy);

                broadcastEngine('spy').emit('notSpy', 1);

                expect(spy).to.not.have.been.called();
            });

            it('Should call spy function with parameters when provided while emitting event', () => {
                const spy = chai.spy(function() {});

                broadcastEngine('spy').on('spy', spy);

                broadcastEngine('spy').emit('spy', 1, 2, 3);

                expect(spy).to.have.been.called.with(1, 2, 3);
            });

            it('Should call spy function with no parameters when none are provided while emitting event', () => {
                const spy = chai.spy(function() {});

                broadcastEngine('spy').on('spy', spy);

                broadcastEngine('spy').emit('spy', 1);

                expect(spy).to.have.not.been.called.with(1, 2, 3);
            });

            it('Should call spy function only once when specified as such', () => {
                const spy = chai.spy(function() {});

                broadcastEngine('spy').once('spy', spy);

                broadcastEngine('spy').emit('spy', 1);

                expect(spy).to.have.been.called.once;
            });

            it('Should call spy function twice once when event is emitted only twice', () => {
                const spy = chai.spy(function() {});

                broadcastEngine('spy').on('spy', spy);

                broadcastEngine('spy').emit('spy', 1);
                broadcastEngine('spy').emit('spy', 2);

                expect(spy).to.have.been.called.twice;
            });
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
