import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
console.log("Hello DEV, I'run here")

const users = [];

server.post("/sign-up", (req,res)=>{
    if(!req.body.username || !req.body.avatar){
        res.sendStatus(400);
    }
    const user = {
        username: req.body.username,
        avatar: req.body.avatar
    }
    users.push(user);
    res.send("OK").status(201);
})






server.listen(5000);