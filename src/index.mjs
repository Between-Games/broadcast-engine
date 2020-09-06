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

// ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗
// ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ╚══╗ ╔══╝║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝
// ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗   ║ ║   ║ ╚═══╝ ║║ ║   ║ ║║ ╚═════╗
// ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝   ║ ║   ║ ╔═╗ ╔═╝║ ║   ║ ║║ ╔═════╝
// ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║            ║ ║   ║ ║ ║ ╚═╗║ ╚═══╝ ║║ ╚═════╗
// ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝            ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═══════╝

export function returnTrue() {  //
    return true;                //
}
// ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═════╝
// ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
// ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝║ ╔═════╝║ ╔═══╗ ║║ ║      ╚═════╗ ║║ ╔═════╝
// ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║         ║ ║      ║ ║   ║ ║║ ╚═════╗╔═════╝ ║║ ╚═════╗
// ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝         ╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

export function returnFalse() { //
    return false;               //
}
// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
// ║ ╚═════╗╔══╝ ╚╝ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
// ║ ╔═════╝║ ╔╗ ╔══╝║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ║ ╚═════╗║ ║║ ╚══╗║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

export default {
    returnTrue,
    returnFalse,
};
