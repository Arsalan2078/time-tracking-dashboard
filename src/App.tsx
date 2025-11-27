import { useState } from "react";
import css from "./App.module.scss";
import { DATA_URL } from "./libs/constants";
import { useFetch } from "./libs/hooks";
import type { ActivityProps, TimeframesKeys } from "./libs/types";

export default function App() {
    const { data: activities, isLoading } = useFetch<ActivityProps[]>(DATA_URL);
    const [timeframe, setTimeframe] = useState<TimeframesKeys>("weekly");

    function onTimeframeClick(tf: TimeframesKeys) {
        setTimeframe(tf);
    }

    return (
        <div className={css.app}>
            <div>
                <div data-text-preset="4">Report for</div>
                <div data-text-preset="2">Jeremy Robson</div>

                <ul data-text-preset="3-regular">
                    <li>
                        <button onClick={() => onTimeframeClick("daily")}>
                            Daily
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTimeframeClick("weekly")}>
                            Weekly
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTimeframeClick("monthly")}>
                            Monthly
                        </button>
                    </li>
                </ul>
            </div>

            {isLoading && <p>Loading...</p>}

            {activities && (
                <ul>
                    {activities.map(({ title, timeframes }) => (
                        <li key={title}>
                            <div data-text-preset="3-medium">{title}</div>

                            <div>
                                <div data-text-preset="1">
                                    <div>
                                        {timeframes[timeframe].current}hrs
                                    </div>
                                </div>

                                <div data-text-preset="4">
                                    {timeframe === "daily" && `Yesterday`}
                                    {timeframe === "weekly" && `Last Week`}
                                    {timeframe === "monthly" &&
                                        `Last Month`} -{" "}
                                    {timeframes[timeframe].previous}
                                    hrs
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
