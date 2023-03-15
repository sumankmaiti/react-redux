process.env.UV_THREADPOOL_SIZE = 6;

const start_time = Date.now()
for( let i = 0; i < 15; i++) {
	(() => {
		for(let j = 0; j <= 100000; j++) {

		}
	})()
	console.log(Date.now() - start_time);
}