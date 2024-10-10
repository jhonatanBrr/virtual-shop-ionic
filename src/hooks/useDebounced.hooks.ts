import { useEffect, useState } from "react";

const useDebounced = (
    searcherValue: string | number
) => {
    
    const [debouncedValue, setDebouncedValue] = useState< string | number >(searcherValue);
    
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