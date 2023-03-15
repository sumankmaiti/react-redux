const http = require('node:http')
const fs = require('node:fs')


const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type' : 'text/html' })
	
	if (req.url == '/home'){
		var name = 'home'
	} else{
		name = 'world'
	}

	// fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res)
	let html = fs.readFileSync('index.html', 'utf-8')
	res.end(html.replace('{{name}}', name))
})

server.listen(3000, () => {
	console.log('server running on port 3000');
})

