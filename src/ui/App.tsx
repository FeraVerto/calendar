import React, {ReactElement} from "react"
import s from "./App.module.css"
import {Month} from "./Month/Month"
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../bll/redux-store"


const App = (): ReactElement => {

    const month = useSelector<AppStateType, number>(state => state.calendar.currentMonth)
    const year = useSelector<AppStateType, number>(state => state.calendar.currentYear)
    const selectedDays = useSelector<AppStateType, Array<string>>(state => state.calendar.selectedDays)
    const dispatch = useDispatch()

    return (
        <div className={s.app}>
            <h1>Календарь</h1>
            <Month selectedDays={selectedDays} year={year} month={month} dispatch={dispatch}/>
        </div>
    )
}

export default App
