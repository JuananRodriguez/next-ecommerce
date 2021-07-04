import { useEffect, useState, SetStateAction } from "react";

type SetStoredValue = (value: any) => void;
type GetStoredValue = () => any;

export function useLocalStorage(
  key: string,
  initialValue: any
): [any, SetStoredValue, GetStoredValue] {
  const [storedValue, setStoredValue] =
    useState<[any, SetStoredValue]>(initialValue);

  useEffect(() => {
    try {
      const items = window.localStorage.getItem(key);
      const storedValue = items ? JSON.parse(items) : initialValue;
      setStoredValue(storedValue);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setValue = (value: any): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const getValue = (): any => {
    try {
      const items = window.localStorage.getItem(key);
      return items ? JSON.parse(items) : storedValue;
    } catch (error) {
      console.log(error);
      return storedValue;
    }
  };

  return [storedValue, setValue, getValue];
}
