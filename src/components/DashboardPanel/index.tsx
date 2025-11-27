import type { TimeframesKeys } from "../../libs/types";
import css from "./index.module.scss";

type Props = {
    timeframe: TimeframesKeys;
    onTimeframeClick: (tf: TimeframesKeys) => void;
};

export default function DashboardPanel({ timeframe, onTimeframeClick }: Props) {
    const buttons = [
        { name: "daily", onClick: () => onTimeframeClick("daily") },
        { name: "weekly", onClick: () => onTimeframeClick("weekly") },
        { name: "monthly", onClick: () => onTimeframeClick("monthly") },
    ];

    return (
        <div className={css.panel}>
            <div data-text-preset="4">Report for</div>
            <div data-text-preset="2">Jeremy Robson</div>

            <ul data-text-preset="3-regular">
                {buttons.map(({ onClick, name }, index) => (
                    <li key={index}>
                        <button onClick={onClick} disabled={timeframe === name}>
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
