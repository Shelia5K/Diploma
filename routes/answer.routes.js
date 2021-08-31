const {Router} = require('express')
const router = Router()
const Answer = require('../models/Answer')

router.get('/:id', async (req, res) => {
    try {
        const answers = await Answer.find({ subject_id: req.params.id })
        res.json(answers)

    } catch(e) {
        res.status(500).json({message: 'Something went wrong, pls try again' }) 
    }
})

module.exports = router