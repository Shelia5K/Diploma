const {Router} = require('express')
const router = Router()
const Question = require('../models/Question')

router.get('/:id', async (req, res) => {

    try {
        const questions = await Question.find({ subject_ID: req.params.id })
        res.json(questions)

    } catch(e) {
        res.status(500).json({message: 'Something went wrong, pls try again' }) 
    }
})

module.exports = router