import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response Status: ${response.status}`);
                }
                const result = await response.json();

                setData(result);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error);
                }
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url]);

    return { data, isLoading };
}
