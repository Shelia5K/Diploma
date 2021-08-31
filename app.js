const express = require('express') //подключение пакета express через require
const config = require('config') // чтобы полючить константу PORT 
const mongoose = require('mongoose') //подключение пакета mongoose для бд

const app = express() //результат работы функции express (сервер)

app.use(express.json({extended:true })) // встроенный middleware

//регистрация routes для обработки разных api запросов с front end-а (app.use)
app.use('/api/auth', require('./routes/auth.routes'))

app.use('/api/question', require('./routes/question.routes'))
app.use('/api/answer', require('./routes/answer.routes'))
app.use('/api/useranswer', require('./routes/useranswer.routes'))
app.use('/api/admin', require('./routes/admin.routes'))

const PORT = config.get('port') || 5000

async function start() 
{
    try {
        
        //метод connect возвращает promise 
        //используем await чтобы подождать пока promise завершиться
        await mongoose.connect( config.get('mongoUri'), 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true, //параметры для успешной работы connect 
            useCreateIndex: true
        })

         // после подсоединения (connect) запускаем сервер строкой app.listen
         // ()=> - callback
        app.listen(PORT, ()=> console.log(`app has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1) // выход из процесса node js если что то пошло не так 
    }
}

start()


//"start": "node app.js", - запуск файла app.js
//"server": "nodemon app.js", - служит для разработки(nodemon перезагружает сервер)
//"client": "npm run start --prefix client", - запуск папки client
//"dev": "concurrently \"npm run server\" \"npm run client\"" - автоматизация запуска двух скриптов одновременно
