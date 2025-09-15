import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  type SetStateAction,
  type Dispatch,
  useEffect,
} from "react";

interface CartItem {
  productId: string;
  quantity: number;
  size: string;
}

interface AppContextProps {
  cartQuantity: number;
  setCartQuantity: Dispatch<SetStateAction<number>>;
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>("linton");
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  // useEffect(() => {
  //   // debounced backend sync logic
  // },[cart])

  const addToCart = ({ productId, quantity, size }: CartItem) => {
    setCart((prevCart) => {
      // check if product with same id & size exists
      const existingItem = prevCart.find(
        (item) => item.productId === productId && item.size === size
      );

      if (existingItem) {
        // update quantity
        return prevCart.map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // add new item
        return [...prevCart, { productId, quantity, size }];
      }
    });

    setCartQuantity((cart) => Math.max(0, cart + 1));
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
    setCartQuantity((cart) => Math.max(0, cart - 1));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cartQuantity,
        setCartQuantity,
        cart,
        addToCart,
        removeFromCart,
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
