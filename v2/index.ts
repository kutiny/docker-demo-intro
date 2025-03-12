import { createServer } from 'http';

const server = createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

server.listen(3000);
