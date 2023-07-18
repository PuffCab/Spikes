import React, { useState } from "react";

function useLocalStorage(key = "", initialValue = "") {
  // get local storage initial stored values
  const initialStorage = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("error", error);
      return initialValue;
    }
  };

  //State value for storage. Initial value is whatever was already in the local storage
  const [storage, setStorage] = useState(initialStorage);

  const setStorageItems = (newStorageItem) => {
    try {
      //? every new value that we store will replace the previous one (e.g.: user email, tokens, etc...)
      //   const newStoredItem = newStorageItem;

      //? this variant will allow us to pass setter functions, making possible to add new values to the storage (e.g.: new favorites)
      const newStoredItem =
        typeof newStorageItem === "function"
          ? newStorageItem(storage)
          : newStorageItem;

      setStorage(newStoredItem);
      window.localStorage.setItem(key, JSON.stringify(newStoredItem));
    } catch (error) {
      console.log("sorry, I couldn't store it");
    }
  };

  return [storage, setStorageItems];
}

export { useLocalStorage };
