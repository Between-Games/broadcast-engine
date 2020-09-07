// ╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔══╗ ║ ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚╗ ╔══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚══╝ ╚╗║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║ ║ ║  ║ ║║ ║      ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗║ ║║ ║║ ║║ ║ ╔═══╗   ║ ║   ║ ║║ ║║ ║║ ╚═════╗   ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ║   ║ ║║ ╔═══╗ ║ ║ ║  ║ ║║ ║      ║ ╔═══╗ ║╚═════╗ ║   ║ ║   ╚═══════╝║ ╔═════╝║ ║║ ║║ ║║ ║ ╚═╗ ║   ║ ║   ║ ║║ ║║ ║║ ╔═════╝   ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ╚═══╝ ║║ ║   ║ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║   ║ ║╔═════╝ ║   ║ ║            ║ ╚═════╗║ ║║ ╚╝ ║║ ╚═══╝ ║╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═════╗╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝            ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import EventEmitter from 'events';

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

const _eventEmittersByChannelName = new Map();  // Initialize map used to store emitters by channel

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
// ║ ╚═════╗╔══╝ ╚╝ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
// ║ ╔═════╝║ ╔╗ ╔══╝║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ║ ╚═════╗║ ║║ ╚══╗║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

export default function(channelName) {                  // Get event emitter associated to given channel name
    return _getEventEmitterByChannelName(channelName);  // Get event emitter associated to given channel name
}

// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗╔════╗╔═╗╔═══════╗╔═╗      ╔═══════╗
// ║ ╔═════╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║║ ╔╗ ║║ ║║ ╔═════╝║ ║      ║ ╔═════╝
// ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ╚═════╗║ ║      ║ ╚═════╗
// ║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ║║ ║║ ║║ ║║ ║║ ║║ ╔═════╝║ ║      ╚═════╗ ║
// ║ ╚═════╗║ ║   ║ ║║ ║   ║ ║║ ║║ ╚╝ ║║ ║║ ╚╝ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
// ╚═══════╝╚═╝   ╚═╝╚═╝   ╚═╝╚═╝╚════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝

function _getEventEmitterByChannelName(channelName) {       // Get event emitter associated to given channel name
    return _eventEmittersByChannelName.get(channelName) ||  // Return event emitter linked to channel name in map
        _insertEventEmitterByChannelName(channelName);      // Create and include event emitter in map by channel
}

function _insertEventEmitterByChannelName(channelName) {        // Create and include event emitter in map by channel
    const eventEmitter = new EventEmitter();                    // Initialize brand new instance of the event emitter

    _eventEmittersByChannelName.set(channelName, eventEmitter); // Insert event emitter in map using the channel name

    return eventEmitter;                                        // Return newly created event emitter instance object
}
