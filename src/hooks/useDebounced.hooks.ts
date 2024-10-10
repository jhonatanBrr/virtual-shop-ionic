import { useEffect, useState } from "react";

const useDebounced = (
    searcherValue: string
) => {
    
    const [debouncedValue, setDebouncedValue] = useState<string>(searcherValue);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(searcherValue);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searcherValue]);

    return { debouncedValue }
}

export default useDebounced