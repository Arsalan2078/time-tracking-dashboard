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
        <li className={css.activity} data-title={title}>
            <div className={css.content}>
                <div className={css.title} data-text-preset="3-medium">
                    {title}

                    <a href="#">
                        <svg
                            width="21"
                            height="5"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                                fill="#BBC0FF"
                                fillRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div className={css.timeframe}>
                    <div className={css.current} data-text-preset="1">
                        <div>{timeframes[timeframe].current}hrs</div>
                    </div>

                    <div className={css.previous} data-text-preset="4">
                        {pastLabels[timeframe]} -{" "}
                        {timeframes[timeframe].previous}
                        hrs
                    </div>
                </div>
            </div>
        </li>
    );
}
