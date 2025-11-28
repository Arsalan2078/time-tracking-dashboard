import jeremy from "/images/image-jeremy.png";
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
            <div className={css.top}>
                <img
                    className={css.image}
                    src={jeremy}
                    width="64"
                    height="64"
                    alt="Jeremy"
                />
                <div>
                    <div data-text-preset="4">Report for</div>
                    <div data-text-preset="2">Jeremy Robson</div>
                </div>
            </div>

            <ul className={css.list} data-text-preset="3-regular">
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
