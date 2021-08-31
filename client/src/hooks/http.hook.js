import {useState, useCallback} from 'react'

//работа с асинхронными запросами на сервер используя нативный api браузера fetch
//fetch - предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP

export const useHttp = () => {
  const [loading, setLoading] = useState(false) //идет подгрузка данных
  const [error, setError] = useState(null)

  //используем useCallback чтобы react не вошел в рекурсию 

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {

      //чтобы не передавать как object, приводим body к строке
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json' // при работе с json надо явно указать что мы передаем json, поэтому добавляем ключ 
      }

      const response = await fetch(url, {method, body, headers}) // ссылку и набор опций принимает метод 
      const data = await response.json() //распарсиваем response

      //проверка на корректность запроса
      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(e.message) 
      throw e //вывод ошибки 
    }
  }, [])

  const clearError = useCallback(() => setError(null), []) //для чистки ошибок

  return { loading, request, error, clearError }
}
