import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

console.log("Hello DEV, I'run here")

server.listen(5000);