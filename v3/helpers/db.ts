import { Connection } from "mariadb";
import { createConnection as connect } from 'mariadb';

export async function createConnection() {
    if (!process.env.DB_HOST ||
        !process.env.DB_USER ||
        !process.env.DB_PASS ||
        !process.env.DB_NAME ||
        !process.env.DB_PORT) {
        throw new Error('Missing required environment variables');
    }

    return connect({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: +process.env.DB_PORT!,
        database: process.env.DB_NAME,
    })
}

export async function initDb(connection: Connection) {
    if (process.env.INIT_DB === 'true') {
        await connection.query(`CREATE TABLE IF NOT EXISTS data (
    id INTEGER UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);`);
        await connection.query(`INSERT INTO data (name) VALUES ('Hello World'),
    ('Item 1'),
    ('Item 2'),
    ('Item 3'),
    ('Item 4'),
    ('Item 5'),
    ('Item 6'),
    ('Item 7'),
    ('Item 8'),
    ('Item 9'),
    ('Item 10'),
    ('Item 11'),
    ('Item 12'),
    ('Item 13'),
    ('Item 14'),
    ('Item 15'),
    ('Item 16'),
    ('Item 17'),
    ('Item 18'),
    ('Item 19');`);
    }
}
