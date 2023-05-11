import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(()=> {
        return getSavedValue(value, initialValue);
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]) //update localstorage when the 'value' is updated

    return [value, setValue];
}

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();

    return initialValue;
}