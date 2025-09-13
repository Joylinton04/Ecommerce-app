import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  type SetStateAction,
  type Dispatch,
} from "react";

interface AppContextProps {
  // Define your state and actions here
  cartQuantity: number;
  setCartQuantity: Dispatch<SetStateAction<number>>;
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
  addToCartQuantity: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>("linton");
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const addToCartQuantity = () => {
    setCartQuantity((cart) => cart + 1);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cartQuantity,
        setCartQuantity,
        addToCartQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
