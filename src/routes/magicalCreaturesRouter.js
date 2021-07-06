import express from "express"

const fields = ['title', 'url', 'description']

// `creatures` variable should return to you the creature objects that you need!
import creatures from '../creatures.js'

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get('/', (req, res) => {

    res.render("creatures/index", { creatures: creatures })
})
magicalCreaturesRouter.get('/:creatureName', (req, res) => {
    let creatureName = req.params.creatureName

    let creatureData = creatures.find(
            (creature) => creature.name === creatureName
        )
        // for (let i = 0; i < creatures.length; i++) {
        //     if (creatureName === creatures[i].name) {
        //         creatureData = creatures[i]
        //     }
        // }
    res.render('creatures/show', { creature: creatureData })
})

export default magicalCreaturesRouter