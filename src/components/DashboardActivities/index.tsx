import type { ActivityProps, TimeframesKeys } from "../../libs/types";
import Activity from "../Activity";
import css from "./index.module.scss";

type Props = {
    timeframe: TimeframesKeys;
    activities: ActivityProps[];
};

export default function DashboardActivities({ timeframe, activities }: Props) {
    return (
        <ul className={css.activities}>
            {activities.map(({ title, timeframes }) => (
                <Activity
                    title={title}
                    timeframes={timeframes}
                    timeframe={timeframe}
                    key={title}
                />
            ))}
        </ul>
    );
}
