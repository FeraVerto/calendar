import s from "./Day.module.css"
import React from "react"


type DayComponentType = {
    ceil: any
    selectDate: string
    setSelectDate: (selectDate: string) => void
}

export const Days = ({ceil, setSelectDate}: DayComponentType) => {

    /*const a = (e: any) => {
        if (e.nativeEvent.shiftKey) {
            console.log("Shift")
        }
    }*/

    const onSelectDay = (date: any) => {

        setSelectDate(date)
    }

    return (
        <>
            <td onClick={() => !ceil.isActive && onSelectDay(ceil.date.format("YYYY-MM-DD"))}
                className={`${s.table_ceil} ${ceil.isActive && s.active} ${!ceil.isCurrentMonth && s.table_ceil_month} ${ceil.isCurrentDay && s.table_ceil_current_day} ${ceil.isSelected && s.selectedDay}`}>
                {ceil.date.date()}
            </td>
        </>
    )
}