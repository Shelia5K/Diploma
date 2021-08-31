import React, {useContext, useCallback, useEffect, useState } from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/Auth.context'

export const HtmlExercisePage = () => {

    var arr = []
    var mark = 0  

    const[form, setForm] = useState([])
    const HTML = "60ae77a1ef930522647b7b52"
    const message = useMessage()
    const auth = useContext(AuthContext)
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const {loading, request, error, clearError} = useHttp()

    const fetchQuestions = useCallback( async () => {
        try{
            const fetched = await request(`/api/question/${HTML}`, 'GET', null)
            setQuestions(fetched)
        }catch(e) {}
    },[HTML, request]) //получение полных данных всех вопросов

    const fetchAnswers = useCallback( async () => {
        try{
            const fetched = await request(`/api/answer/${HTML}`, 'GET', null)
            setAnswers(fetched)
        }catch(e) {}
    },[HTML, request]) //получение полных данных всех ответов

    const SaveAnswers = async () => {
        try{
            await request('/api/useranswer/generate', 'POST', {mark, SubjectId: HTML}, {
                Authorization: `Bearer ${auth.token}`
            })
        } catch(e) {}
    }

    useEffect(() => 
        {
            fetchQuestions()
            fetchAnswers()
            message(error)
            clearError()
            window.M.updateTextFields()
        }, [fetchQuestions, fetchAnswers, error, message, clearError]
    )

    useEffect(() => {
        setForm(questions.map((item,key) => {
                return { id: key, answer: ''}
            })
        )
    },[questions]) //зависимость от questions - useEffect произойдет только 1 раз потому что мы изменим кол-во вопросов


    
    if (loading) { return <Loader/> }

    const changeHandler = (id,event) => 
    {
            setForm( prev => 
                prev.map((item, key) => 
                {
                    if(id === key) 
                    { return {...item, answer:event.target.value} }
                    return item
                }
            )
        )
    }

    const InputHandler = () => {

        for( let answer of answers) { arr.push(answer.answer) }

        arr.forEach(function(item, index) {
            if(item === form[index].answer.toLowerCase().split(' ').join(''))
            { mark++ }
            
        })
        SaveAnswers() 

        message(mark + ' / ' + questions.length)
    }

    return (

        <div>

            { questions.map((questions, index) => 
            {
                return (
                    <div key={questions._id}>
                        <div className="div-1 div-padding-32 div-grey div-1Sql">
                            <div className="div-context">
                                <h1 className="h1-sizeSQL" style={{paddingLeft:50}}>Exercise:{index + 1}</h1>
                                <div className="div-col l6 div-center div1">
                                    <p className="p-size">{questions.question}</p>
                                    <div className="input-field">
                                        <input
                                            placeholder="Enter answer" 
                                            id = {questions._id}
                                            type="text"
                                            className="red-inputSQL"
                                            name = {"answer" + index}
                                            onChange = {(event) => changeHandler(index,event)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) }
                    <div className="QListbtn">
                        <button 
                        className="btn waves-effect waves-light btn-large" 
                        type="submit" 
                        name="action"
                        disabled={loading}
                        onClick={InputHandler}
                        >Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>

        </div>
    )
}