import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
console.log("Hello DEV, I'run here")

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
    if (!req.body.username || !req.body.avatar) {
        res.sendStatus(401);
    }
    const user = {
        username: req.body.username,
        avatar: req.body.avatar
    }
    users.push(user);
    res.status(201).send("OK")
});

server.get("/tweets", (req, res) => {
    const toSend = []
    for (let i = tweets.length-1, k = 1; i >=0 && k<=10; i--, k++) {
        for (let j = 0; j < users.length; j++) {
            if (tweets.length > 0) {
                console.log(users, tweets)
                if (tweets[i].username === users[j].username) {
                    toSend.push({
                        username: tweets[i].username,
                        avatar: users[j].avatar,
                        tweet: tweets[i].tweet
                    });
                    break;
                }
            }
        }
    }
    res.status(200).send(toSend);
});
server.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.status(201).send("OK");
});



server.listen(5000);