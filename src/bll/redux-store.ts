import {combineReducers, createStore, Store} from "redux"
import {calendarReducer} from "./calendarReducers"

const reducer = combineReducers({
    calendar: calendarReducer
})

export type AppStateType = ReturnType<typeof reducer>
export type StoreType = Store<AppStateType>

export const store: StoreType = createStore(reducer)