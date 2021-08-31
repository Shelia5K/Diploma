import React, {useContext, useCallback, useEffect, useState } from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import { AuthContext } from '../context/Auth.context'

export const UserStatisticPage = () => {

  const [userans, setUserans] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)
  
  var NameOfSub = ""
  const SQL = "60c7a25e8d35b136948a2c42"
  const HTML = "60ae77a1ef930522647b7b52"
  const JS = "60ae77a8261cf4501c670a72"

  const fetchStats = useCallback(async () => {
  try {
    const fetched = await request('/api/useranswer/userAns', 'GET', null, {
      Authorization: `Bearer ${token}`
    })
    setUserans(fetched)
  } catch (e) {}
  }, [token, request])

  useEffect(() => { fetchStats() }, [fetchStats])

  if (loading) { return <Loader/> }

  if (!userans.length) { return <p className="center">Оценок пока нет</p> }
  
  const SubjectHandler = (subject) => { 
    

    if(subject === SQL) {
      return NameOfSub = "SQL"
    }

    if(subject === HTML) {
      return NameOfSub = "HTML"
    }

    if(subject === JS) {
      return NameOfSub = "JS"
    }
    
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Оценка</th>
          <th>Предмет</th>
          <th>Время</th>
          <th>День</th>
        </tr>
      </thead>

      <tbody>
        { userans.map((ans, index) => {
          return (
          <tr key={ans._id}>
            <td>{index + 1}</td>
            <td>{ans.mark}</td>
            <td>{SubjectHandler(ans.subject_id)}</td>
            <td><strong>{new Date(ans.date).toLocaleTimeString()}</strong></td>
            <td><strong>{new Date(ans.date).toLocaleDateString()}</strong></td>
          </tr>
          )
        }) }
      </tbody>
    </table>
  )
}
