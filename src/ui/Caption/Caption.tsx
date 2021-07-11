import s from "./Caption.module.css"
import React, {ReactElement} from "react"

type CaptionType = {
    month: string
    year: number
    onSwitchMonth: (direction: string) => void
}

export const Caption = ({month, year, onSwitchMonth}: CaptionType): ReactElement => {
    return (
        <caption className={s.caption_table}>
            <span className={`${s.arrow_left} ${s.arrow}`} onClick={() => onSwitchMonth("back")}> </span>
            <div className={s.caption_table_month}>{month + " " + year}</div>
            <span className={`${s.arrow_right} ${s.arrow}`} onClick={() => onSwitchMonth("next")}> </span>
        </caption>
    )
}