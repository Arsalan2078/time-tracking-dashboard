import type { ActivityProps, TimeframesKeys } from "../../libs/types";
import css from "./index.module.scss";

interface Props extends ActivityProps {
    timeframe: TimeframesKeys;
}

export default function Activity({ title, timeframes, timeframe }: Props) {
    const pastLabels = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month",
    };

    return (
        <li className={css.activity}>
            <div data-text-preset="3-medium">{title}</div>

            <div>
                <div data-text-preset="1">
                    <div>{timeframes[timeframe].current}hrs</div>
                </div>

                <div data-text-preset="4">
                    {pastLabels[timeframe]} - {timeframes[timeframe].previous}
                    hrs
                </div>
            </div>
        </li>
    );
}
