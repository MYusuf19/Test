const {EventEmitter} = require('events');
const pembuatEventEmitter = new EventEmitter();

function buatkopi (kopi){
    console.log("kopi "+kopi+" sudah dibuat");

}

pembuatEventEmitter.on('buat-kopi',buatkopi);

let kopi="arabica";
pembuatEventEmitter.emit('buat-kopi',kopi);