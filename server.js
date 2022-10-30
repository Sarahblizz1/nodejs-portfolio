const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((request, response) => {
    if(request.url === '/'){
    let filePath = path.join(__dirname, 'portfolio', 'home.html');
    fs.readFile(filePath, 'utf8', (err, content) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content)
        })
}

if(request.url === '/about.html'){
    let filePath = path.join(__dirname, 'portfolio', 'about.html');
    fs.readFile(filePath, 'utf8', (err, content) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content)
        })
    }
    
    if(request.url === '/contact.html'){
        let filePath = path.join(__dirname, 'portfolio', 'contact.html');
        fs.readFile(filePath, 'utf8', (err, content) => {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(content)
            })
    }

    if(request.url === '/home.html'){
        let filePath = path.join(__dirname, 'portfolio', 'home.html');
        fs.readFile(filePath, 'utf8', (err, content) => {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(content)
            })
    }
})

const port = 7500

server.listen(port, () => {
    console.log(`succesfuly logged into ${port}`);
});
