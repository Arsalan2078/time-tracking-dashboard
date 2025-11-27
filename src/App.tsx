import css from "./App.module.scss";

export default function App() {
    return (
        <div className={css.app}>
            <div data-text-preset="1">Deep ocean purple.</div>
            <div data-text-preset="2">Deep ocean purple.</div>
            <div data-text-preset="3-regular">Deep ocean purple.</div>
            <div data-text-preset="3-medium">Deep ocean purple.</div>
            <div data-text-preset="4">Deep ocean purple.</div>
        </div>
    );
}
