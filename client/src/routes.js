import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HtmlExercisePage} from './pages/HtmlExercisePage'
import {SqlExercisePage} from './pages/SqlExercisePage'
import {JsExercisePage} from './pages/JsExercisePage'
import {MainPage} from './pages/MainPage'
import {AuthPage} from './pages/AuthPage'
import {UserStatisticPage} from './pages/UserStatisticPage'
import {AdminPanel} from './pages/AdminPanel'

//exact - откликается исключительно на данную ссылку 
//isAuthenticated - пользователь зарегестрирован в системе
//isAdmin - является ли пользователь админом
export const useRoutes = (isAuthenticated, isAdmin) => {

    if(isAuthenticated && isAdmin) {
        return (
            <Switch>
            <Route path = "/admin" exact>
                <AdminPanel />
            </Route>
            <Route path = "/main" exact>
                <MainPage />
            </Route>
            <Route path = "/exercise/html" exact>
                <HtmlExercisePage />
            </Route>
            <Route path = "/exercise/sql" exact>
                <SqlExercisePage />
            </Route>
            <Route path = "/exercise/js" exact>
                <JsExercisePage />
            </Route>
            <Route path = "/stat" exact>
                <UserStatisticPage />
            </Route>
            <Redirect to = "/main" />
        </Switch>
        )
    }

    if(isAuthenticated) {
        return (
            <Switch>
            <Route path = "/main" exact>
                <MainPage />
            </Route>
            <Route path = "/exercise/html" exact>
                <HtmlExercisePage />
            </Route>
            <Route path = "/exercise/sql" exact>
                <SqlExercisePage />
            </Route>
            <Route path = "/exercise/js" exact>
                <JsExercisePage />
            </Route>
            <Route path = "/stat" exact>
                <UserStatisticPage />
            </Route>
            <Redirect to = "/main" />
        </Switch>
        )
    }

    //если isAuthenticated = false
    return (
        <Switch>
            <Route path = "/" exact>
                <AuthPage />
            </Route>
            <Redirect to = "/" /> 
        </Switch>
    )
}

//файл для определения всех ссылок 