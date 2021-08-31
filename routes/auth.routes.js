const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()

// /api/auth/register (endpoint)
router.post('/register', 
[
    check('email', 'Wrong email').isEmail(), //проверка(валидатор) email-а 
    check('password', 'Min length of password is 6 symbols').isLength({ min: 6 }) //валидатор на длину пароля
],
async (req, res) => {
    console.log(req.body)
    try {

        const errors = validationResult(req) // express валидатор валидирует входящие поля

        if(!errors.isEmpty()) //если есть какие то ошибки 
        {
            //return - чтобы не было продолжения выполнения скрипта 
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during registration'
            })
        }

        const {email, password} = req.body //получаем поля с front-end -а 
        const candidate = await User.findOne({ email }) //проверка на существование пользователя

        if(candidate) {
            return res.status(400).json({ message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 12) //хеширование пароля
        const user = new User({ email, password: hashedPassword }) //создание нового пользователя
        
        await user.save() //сохранение пользователя 

        res.status(201).json({ message: 'User created'}) // ответ front end -у что пользователь создан 

    } catch(e) {
        res.status(500).json({message: 'Something went wrong, pls try again' }) //серверная (базовая) ошибка 
    }
})

// /api/auth/login (endpoint)
router.post('/login',
[
    check('email', 'Enter correct login').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
],
async (req, res) => {
        try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during authorization'
            })
        }
        // node.js воспринимает req.body как stream поэтому используем встроенный middleware
        const {email, password} = req.body
        
        const user = await User.findOne( {email} )

        if(!user) {
            return res.status(400).json({ message: 'User isn`t found' })
        }

        const isMatch = await bcrypt.compare(password, user.password) //сравнение паролей пользователя user.password - пароль который находится в бд

        if(!isMatch) {
            return res.status(400).json({ message: 'Wrong password, try again' })
        }

        const token = jwt.sign(
            { userId: user.id }, //данные которые будут зашифрованы в jwt token
            config.get('jwtSecret'), //секретная строчка
            { expiresIn: '1h' } //через сколько jwt token закончит своё существование
        )

        res.json({ token, userId: user.id, admin: user.isAdmin }) //показывает что мы выполнили вход
        //console.log(user.isAdmin)
        
    } catch(e) {
        res.status(500).json({message: 'Something went wrong, pls try again' })
    }
})

module.exports = router // экспортируем объект router 