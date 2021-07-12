import s from "./TitleColumn.module.css"
import React, {ReactElement} from "react"

export const TitleColumn = (): ReactElement => {
    const weeks = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    return (
        <thead className={s.title}>
            <tr className={s.title_column}>
                {
                    weeks.map((w, i) => <td key={i}>{w.toUpperCase()}</td>)
                }
            </tr>
        </thead>
    )
}