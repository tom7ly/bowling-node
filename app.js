import express from "express"
import msgs from './consts'
const app = express()
app.use(express.json())
app.listen(3000)

app.get('/', (req, res) => {
    res.send("Welcome to our Bowling world")
})

app.post('/new_game', (req, res) => {
    const playerName = req.body.name
    if (!playerName || playerName.trim() === '') {
        return res.status(400).json({ error: msgs.INVALID_NAME(playerName) })
    }
    res.status(200).send(msgs.SUCCESS_NEW_GAME(playerName))
})

app.post('/roll', (req, res) => {
    const knockedPins = req.body.knockedPins
    const playerName = req.body.name
    if (!playerName) {
        return res.status(400).json({ error: msgs.INVALID_NAME(playerName) })
    }
    game = '' /*PH*/
    res.status(201).json(msgs.SUCCESS_ROLL(playerName, game))
})

app.get('/game-status', (req, res) => {
    const playerName = req.query.name;
    if (!playerName) {
        return res.status(400).json({ error:  });
    }
    res.status(200).json(`Game status for player [${playerName}]`);
})