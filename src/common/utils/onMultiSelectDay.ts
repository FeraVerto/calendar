import dayjs, {Dayjs} from "dayjs"
import {MultiSelectType} from "../../ui/Month/Month"

export const onMultiSelectDay = (date: MultiSelectType): Array<string> => {

    const startDay: Dayjs = dayjs(date.start, "YYYY-MM-DD")
    const endDay: Dayjs = dayjs(date.end, "YYYY-MM-DD")

    /* eslint-disable */
    let [start, end] =  startDay.isBefore(endDay, "day") ? [startDay, endDay] : [endDay, startDay]
    /* eslint-enable */

    const arr: Array<string> = []
    while (start.isSameOrBefore(end, "day")) {
        arr.push(start.format("YYYY-MM-DD"))
        start = start.add(1, "day")
    }
    return arr
}