import css from "./App.module.scss";
import Dashboard from "./components/Dashboard";
import { DATA_URL } from "./libs/constants";
import { useFetch } from "./libs/hooks";
import type { ActivityProps } from "./libs/types";

export default function App() {
    const { data: activities, isLoading } = useFetch<ActivityProps[]>(DATA_URL);

    return (
        <div className={css.app}>
            {isLoading && <p>Loading...</p>}
            {activities && <Dashboard activities={activities} />}
        </div>
    );
}
