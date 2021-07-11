import s from "./Day.module.css"
import React, {ReactElement} from "react"
import {DayType} from "../Month/Month"


type DayComponentType = {
    ceil: DayType
    setSelectDate: (selectDate: { action: "" | "add" | "delete", date: string }) => void
    selectedDays: Array<string>
}

export const Days = ({ceil, setSelectDate, selectedDays}: DayComponentType): ReactElement => {

    /*const a = (e: any) => {
        if (e.nativeEvent.shiftKey) {
            console.log("Shift")
        }
    }*/

    const currentDayString: string = ceil.date && ceil.date.format("YYYY-MM-DD")

    const onSelectDay = (date: string) => {
        const exSelectedDay: boolean = selectedDays.some(selected => selected === date)
        if (exSelectedDay) {
            setSelectDate({action: "delete", date: date})
        } else {
            setSelectDate({action: "add", date: date})
        }
    }

    return (
        <td onClick={() => !ceil.isActive && onSelectDay(currentDayString)}
            className={`${s.table_ceil} ${ceil.isActive && s.active} ${!ceil.isCurrentMonth && s.table_ceil_month} ${ceil.isCurrentDay && s.table_ceil_current_day} ${ceil.isSelected && s.selectedDay}`}>
            {ceil.date.date()}
        </td>
    )
}