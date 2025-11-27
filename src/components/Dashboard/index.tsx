import { useState } from "react";
import type { ActivityProps, TimeframesKeys } from "../../libs/types";
import css from "./index.module.scss";
import DashboardPanel from "../DashboardPanel";
import DashboardActivities from "../DashboardActivities";

type Props = {
    activities: ActivityProps[];
};

export default function Dashboard({ activities }: Props) {
    const [timeframe, setTimeframe] = useState<TimeframesKeys>("weekly");
    const onTimeframeClick = (tf: TimeframesKeys) => setTimeframe(tf);

    return (
        <div className={css.dashboard}>
            <DashboardPanel
                timeframe={timeframe}
                onTimeframeClick={onTimeframeClick}
            />
            <DashboardActivities
                timeframe={timeframe}
                activities={activities}
            />
        </div>
    );
}
