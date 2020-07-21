import { useMemo } from "react";
import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const useDateFormat = (date, format = "ll") => {
    return useMemo(() => {
        if (date) {
            return dayjs(date).format(format);
        }
        return "";
    }, [date]);
};

export default useDateFormat;
