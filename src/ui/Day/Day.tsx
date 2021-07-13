import s from "./Day.module.css"
import React, {ReactElement} from "react"
import {DayType, MultiSelectType} from "../Month/Month"


type DayComponentType = {
    ceil: DayType
    setSelectDate: (selectDate: { action: "" | "add" | "delete", date: string }) => void
    selectedDays: Array<string>
    setMultiSelect: (multiSelect: MultiSelectType) => void
    multiSelect: MultiSelectType
}

export const Day = ({
    ceil,
    setSelectDate,
    selectedDays,
    setMultiSelect,
    multiSelect
}: DayComponentType): ReactElement => {


    const currentDayString: string = ceil.date && ceil.date.format("YYYY-MM-DD")

    const onSelectDay = (date: string, e: React.MouseEvent) => {
        const isContainedInLocaleStorage: boolean = selectedDays.some(selected => selected === date)

        if (e.nativeEvent.shiftKey) {
            setMultiSelect({...multiSelect, end: date})
        }

        if (isContainedInLocaleStorage) {
            setSelectDate({action: "delete", date: date})
        } else if (!isContainedInLocaleStorage && !e.nativeEvent.shiftKey) {
            setSelectDate({action: "add", date: date})
            setMultiSelect({start: date, end: null})
        }
    }

    return (
        <td onClick={(e) => !ceil.isActive && onSelectDay(currentDayString, e)}
            className={`${s.table_ceil} 
                        ${ceil.isActive && s.active}
                        ${!ceil.isCurrentMonth && s.table_ceil_month} 
                        ${ceil.isCurrentDay && s.table_ceil_current_day}
                        ${ceil.isSelected && s.selectedDay}`}>
            {ceil.date.date()}
        </td>
    )
}