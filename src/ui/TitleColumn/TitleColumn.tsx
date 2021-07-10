import s from "./TitleColumn.module.css"
import React from "react"

export const TitleColumn = () => {
    const weeks = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    return (
        <thead>
            <tr className={s.title_column}>
                {
                    weeks.map((w, i) => <td key={i}>{w.toUpperCase()}</td>)
                }
            </tr>
        </thead>
    )
}