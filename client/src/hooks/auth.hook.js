import { useState, useCallback, useEffect } from 'react'

//модуль который работает исключительно с авторазицей пользователя в систему 

const storageName = 'userData'

export const useAuth = () => {

    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [admin, setAdmin] = useState(false)

    //при попытке войти в аккаунт, передаем в метод login токен, ид и поле админ
    //localStorage.setItem - сохраняем данные о пользователе 
    const login = useCallback( (jwtToken, id, admin) => {
        setToken(jwtToken)
        setUserId(id)
        setAdmin(admin)
        localStorage.setItem(storageName, JSON.stringify( {
            userId: id, token: jwtToken, admin: admin
        }))
    }, [])

    //при выходе задаем всему значение null и чистим инфу о юзере
    const logout = useCallback( () => {
        setToken(null)
        setUserId(null)
        setAdmin(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect( () => { //поэтому у меня сразу заходит на main page
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token) {
            login(data.token, data.userId, data.admin)
        }
        setReady(true)
    }, [login])

    return { login, logout, token, userId, admin, ready }
}