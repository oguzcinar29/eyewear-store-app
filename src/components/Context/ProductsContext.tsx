import React, { createContext, useEffect, useState } from "react";

type StateContextType = {
  card: Array<any>;
  setCard: React.Dispatch<React.SetStateAction<any>>;
};

export const StateContext = createContext<null | StateContextType>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const getCard = async () => {
    const guestId = JSON.parse(window.localStorage.getItem("guestId") || "[]");
    const res = await fetch(`${API_URL}/api/card/get-card?id=${guestId}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch card");
    } else {
      const data = await res.json();
      setCard(data);
    }
  };
  useEffect(() => {
    getCard();
  }, []);

  const [card, setCard] = useState<Array<any>>([]);
  const value = {
    card,
    setCard,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
