const fs = require('node:fs')

const readStream = fs.createReadStream(__dirname)
readStream.close()

readStream.on('close', () => {
	console.log('close queue');
})

console.log("sync 1");



setTimeout(() => {
	console.log('time out 1');
	
}, 1000)

setTimeout(() => {
	console.log('time out 2');
	process.nextTick(() => {
		console.log('timeout to nest tick');
	})
}, 0)

Promise.resolve().then(() => {
	console.log('inside promise queue');
	process.nextTick(() => {
		console.log('promise to next tick');
	})
})

Promise.resolve().then(() => {
	console.log('inside promise queue 2');
})

process.nextTick(() => {
	console.log('inside next tick queue');
})

console.log('sync 2');

setImmediate(() => console.log('inside set immediate'))