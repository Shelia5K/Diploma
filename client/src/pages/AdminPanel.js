import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import 'materialize-css'
//задаем базовую составляющую страницы

export const AdminPanel = () => {

    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()

    const SQL = "60c7a25e8d35b136948a2c42"
    const HTML = "60ae77a1ef930522647b7b52"
    const JS = "60ae77a8261cf4501c670a72"

    const [ActiveCheckbox, setActiveCheckbox] = useState([
        {name: SQL, checked: false},
        {name: HTML, checked: false},
        {name: JS, checked: false}
    ])

    //вся валидация готова на back-end(node.js)
    const[form, setForm] = useState({
        question: '', answer: ''
    })

    useEffect( () => {
        //console.log('Error', error)
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect( () => {
        window.M.updateTextFields()
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const changeCheckBoxHandler = (event,id) => {
        setActiveCheckbox(prev => {
            return prev.map((item,key) => {
                if(key === id) {
                    return {...item, checked: !item.checked }
                }
                return {...item, checked: false}
            })
        })
    }


    
    const AddHandler = async () => {
        let subjectId = ActiveCheckbox.filter(item => item.checked)
        let subId = subjectId[0].name
        let answer = form.answer.toLowerCase().split(' ').join('')
        try{
            await request('/api/admin/add', 'POST', {question: form.question, answer, subId})
        } catch(e) {} 
        //message('added!')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s6 offset-s3 AuthDiv">
                    <div className="card green darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Add Question/Answer</span>
                            <div>

                                <div className="input-field">
                                    <input 
                                        placeholder="Enter question" 
                                        id="question" 
                                        type="text"
                                        name="question"
                                        className="red-inputSQL"
                                        value={form.question}
                                        onChange = {changeHandler}
                                    />
                                </div>

                                <div className="input-field">
                                    <input 
                                        placeholder="Enter answer" 
                                        id="answer" 
                                        type="text"
                                        name="answer"
                                        value={form.answer}
                                        onChange = {changeHandler}
                                        className="red-inputSQL"
                                    />
                                </div>
                                
                                <div>
                                    <form action="#">
                                        <label className="p-Admin">
                                            <input 
                                            type="checkbox" 
                                            className="filled-in" 
                                            onChange = {(event) => changeCheckBoxHandler(event,0)}
                                            checked = {ActiveCheckbox[0].checked}
                                            />
                                            <span style={{color: 'black'}}>SQL</span>
                                        </label>
                                        <label className="p-Admin">
                                            <input 
                                            type="checkbox" 
                                            className="filled-in" 
                                            onChange = {(event) => changeCheckBoxHandler(event,1)}
                                            checked = {ActiveCheckbox[1].checked}
                                            />
                                            <span style={{color: 'black'}}>HTML</span>
                                        </label>
                                        <label className="p-Admin">
                                            <input 
                                            type="checkbox" 
                                            className="filled-in" 
                                            onChange = {(event) => changeCheckBoxHandler(event,2)}
                                            checked = {ActiveCheckbox[2].checked}
                                            />
                                            <span style={{color: 'black'}}>JS</span>
                                        </label>
                                    </form>
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-action">
                            <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                            onClick={AddHandler}
                            disabled={loading}
                            >Add
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}