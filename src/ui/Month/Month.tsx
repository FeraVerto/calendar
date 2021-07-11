import React, {Dispatch, ReactElement, useEffect, useState} from "react"
import s from "./Month.module.css"
import {ActionType, onSwitchMonthAC, setSelectDaysAC} from "../../bll/calendarReducers"
import {uppercaseFirstLetter} from "../../common/utils/uppercaseFirstLetter"
import dayjs, {Dayjs} from "dayjs"
import isToday from "dayjs/plugin/isToday"
import arraySupport from "dayjs/plugin/arraySupport"
import updateLocale from "dayjs/plugin/updateLocale"
import localeData from "dayjs/plugin/localeData"
import weekday from "dayjs/plugin/weekday"
import "dayjs/locale/ru"
import {Days} from "../Day/Days"
import {TitleColumn} from "../TitleColumn/TitleColumn"
import {Caption} from "../Caption/Caption"
import {getDate} from "../../common/utils/getDate"


dayjs.locale("ru")

dayjs.extend(isToday)
dayjs.extend(arraySupport)
dayjs.extend(updateLocale)
dayjs.extend(localeData)
dayjs.extend(weekday)

const ROWS_TABLE = 6
const COLS_TABLE = 7

type MonthType = {
    month: number
    year: number
    dispatch: Dispatch<ActionType>
    selectedDays: Array<string>
}

export type DayType = {
    date: Dayjs
    month: number
    isCurrentDay: boolean
    isCurrentMonth: boolean
    isNextMonth: boolean
    isSelected: boolean
    isActive: boolean
}


export const Month = ({year, month, selectedDays, dispatch}: MonthType): ReactElement => {
    const date: Dayjs = dayjs()

    const [selectDate, setSelectDate] = useState<{ action: "" | "add" | "delete", date: string }>({
        action: "",
        date: ""
    })

    useEffect(() => {
        if (selectDate.action === "add") {
            localStorage.setItem(selectDate.date, selectDate.date)

        }
        if (selectDate.action === "delete") {
            localStorage.removeItem(selectDate.date)
        }
        setSelectDate({
            action: "",
            date: ""
        })
        const data: Array<string> = getDate()
        data && dispatch(setSelectDaysAC(data))
    }, [selectDate.date, selectDate.action])

    const table: Array<Array<DayType>> = []
    let rows: Array<DayType> = []

    let startCalendarDay: Dayjs = date
        .month(month)
        .year(year)
        .startOf("month")
        .weekday(0)


    for (let i = 0; i < ROWS_TABLE; i++) {
        rows = []
        for (let j = 0; j < COLS_TABLE; j++) {
            rows.push({
                date: startCalendarDay,
                month: startCalendarDay.month(),
                isCurrentDay: startCalendarDay.isSame(date, "day"),
                isCurrentMonth: month === startCalendarDay.month(),
                isNextMonth: month < startCalendarDay.month(),
                isSelected: selectedDays.some(s => s === startCalendarDay.format("YYYY-MM-DD")),
                isActive: startCalendarDay.isBefore(date, "day")
            })
            startCalendarDay = startCalendarDay.add(1, "day")
        }
        table.push(rows)
    }

    const monthName: string = uppercaseFirstLetter(date.month(month).format("MMMM"))

    const onSwitchMonth = (direction: string) => {
        dispatch(onSwitchMonthAC(direction))
    }

    return (
        <table className={s.table}>
            <Caption year={year} month={monthName} onSwitchMonth={onSwitchMonth}/>
            <TitleColumn/>
            <tbody className={s.table_rows_container}>
                {
                    table.map((t: Array<DayType>, i: number) =>
                        <tr key={i} className={s.table_rows}>
                            {
                                t.map((ceil: DayType) =>
                                    <Days selectedDays={selectedDays} key={ceil.date.format("YYYY-MM-DD")} setSelectDate={setSelectDate} ceil={ceil}/>)
                            }
                        </tr>)
                }
            </tbody>
        </table>
    )
}