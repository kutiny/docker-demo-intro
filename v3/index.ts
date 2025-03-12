try {
    process.loadEnvFile();
} catch(err) {
    console.error('Could not load .env file');
}

import { createServer } from 'node:http';
import { createConnection, initDb } from './helpers/db';

createConnection()
    .then(async (connection) => {
        await initDb(connection);
        const server = createServer((_, res) => {
            connection.query('SELECT name FROM data').then(data => {

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write(
                    'Data:\n' +
                    data.map(
                        (a: { name: string }) => a.name
                    ).join(',\n') + '\n'
                );
                res.end();
            });
        });

        const port = process.env.PORT || 8080;
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    });


