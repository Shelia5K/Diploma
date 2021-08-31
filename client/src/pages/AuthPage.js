import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Auth.context'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

//задаем базовую составляющую страницы
//"proxy": "http://localhost:5000", любой запрос с front-end - а будет идти на 5000

export const AuthPage = () => {

    const auth = useContext(AuthContext)

    const message = useMessage()

    const {loading, request, error, clearError} = useHttp()

    //вся валидация готова на back-end(node.js)
    const[form, setForm] = useState({
        email: '', password: ''
    })

    useEffect( () => {
        //console.log('Error', error)
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect( () => {
        window.M.updateTextFields()
    })

    //нативный js event (обертка react-а над event-ом, просто api такое же )
    //... - оператор spread позволяет расширить доступные для итерации элементы
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            //console.log('Data', data)
            message(data.message) //сообщение, что регистрация пройдена
        } catch(e) {}
    }

    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            //message(data.message)
            auth.login(data.token, data.userId, data.admin)
        } catch(e) {} 
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s6 offset-s3 AuthDiv">
                    <div className="card blue darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Authorization</span>
                            <div>

                                <div className="input-field">
                                    <input 
                                        placeholder="Enter email" 
                                        id="email" 
                                        type="text"
                                        name="email"
                                        className="yellow-input"
                                        value={form.email}
                                        onChange = {changeHandler}
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input-field">
                                    <input 
                                        placeholder="Enter password" 
                                        id="password" 
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        onChange = {changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>

                            </div>
                        </div>

                        <div className="card-action">

                            <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                            onClick={loginHandler}
                            disabled={loading}
                            >sign in
                            </button>
                            
                            <button 
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                            >registration
                            </button>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}