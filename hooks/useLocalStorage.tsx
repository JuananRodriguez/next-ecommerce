import { useEffect, useState, SetStateAction } from "react";

type SetStoredValue = SetStateAction<any>;

export function useLocalStorage(
  key: string,
  initialValue: any
): [any, SetStoredValue] {
  const [storedValue, setStoredValue] =
    useState<[any, SetStoredValue]>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      const storedValue = item ? JSON.parse(item) : initialValue;
      setStoredValue(storedValue);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
