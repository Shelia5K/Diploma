const {Router} = require('express')
const Question = require('../models/Question')
const Answer = require('../models/Answer')
const router = Router()

router.post('/add', async (req, res) => {
    try {
        const {question, answer, subId} = req.body

        const q = new Question({
            question: question,
            subject_ID: subId
        })

        const a = new Answer({
            answer: answer,
            subject_id: subId
        })

        await q.save(), a.save()

        res.status(201).json({ q, a })

    } catch(e) {
        res.status(500).json({message: 'Something went' }) 
    }
})

module.exports = router // экспортируем объект router 