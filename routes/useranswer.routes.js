const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const UserAnswer = require('../models/UserAnswers')
const router = Router()

router.post('/generate', auth, async (req, res) => {
    try {
        const {mark, SubjectId} = req.body
        
        const userans = new UserAnswer({
            mark: mark,
            owner: req.user.userId,
            subject_id: SubjectId
        })
        
        await userans.save()
        res.status(201).json({ userans })

    } catch(e) {
        res.status(500).json({message: 'Something went' }) 
    }
})

router.get('/userAns', auth, async (req, res) => {
    try {
      const userans = await UserAnswer.find({ owner: req.user.userId })
      res.json(userans)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router