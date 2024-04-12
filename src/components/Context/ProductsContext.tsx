import React, { createContext, useState } from "react";

type StateContextType = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  card: Array<any>;
  setCard: React.Dispatch<React.SetStateAction<any>>;
};

export const StateContext = createContext<null | StateContextType>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [card, setCard] = useState<Array<any>>([]);
  const value = {
    activeMenu,
    setActiveMenu,
    card,
    setCard,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
