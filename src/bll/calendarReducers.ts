import dayjs from "dayjs"

const SWITCH_MONTH = "calendar/DIRECTION_MONTH"
const SET_SELECT_DAYS = "calendar/SET_SELECT_DAYS"

type CalendarType = {
    currentDay: number
    currentMonth: number
    currentYear: number
    selectedDays: Array<string>
}

export const initialState: CalendarType = {
    currentDay: dayjs().day(),
    currentMonth: dayjs().month(),
    currentYear: dayjs().year(),
    selectedDays: []
}

type onSwitchMonthACType = ReturnType<typeof onSwitchMonthAC>
type setSelectDaysACType = ReturnType<typeof setSelectDaysAC>
export type ActionType = onSwitchMonthACType | setSelectDaysACType

export const calendarReducer = (state = initialState, action: ActionType): CalendarType => {
    switch (action.type) {

        case SWITCH_MONTH: {
            const currentDate = dayjs().month(state.currentMonth).year(state.currentYear)
            const switchedMonth =
                action.direction === "back"
                    ? currentDate.subtract(1, "month")
                    : currentDate.add(1, "month")

            return {
                ...state,
                currentMonth: switchedMonth.month(),
                currentYear: switchedMonth.year()
            }
        }

        case SET_SELECT_DAYS:
            return {
                ...state,
                selectedDays: [...action.selectedDays]
            }

        default:
            return state
    }
}



export const onSwitchMonthAC = (direction: string) => ({type: SWITCH_MONTH, direction} as const)
export const setSelectDaysAC = (selectedDays: Array<string>) => ({type: SET_SELECT_DAYS, selectedDays} as const)
/*
export const removeDateAC = (date: string) => {
    console.log("remove", date)
    return {type: REMOVE_DATE, date} as const
}*/


/*case REMOVE_DATE:
    return {
        ...state,
        selectedDays: state.selectedDays.filter(f => f !== action.date)
    }*/
