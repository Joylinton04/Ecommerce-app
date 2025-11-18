import useAddToCart from "@/query/useAddToCart";
import useSessionUser from "@/query/useSession";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  type SetStateAction,
  type Dispatch,
  useEffect,
} from "react";
import { toast } from "react-toastify";

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
  isLoadingCardAddition?: boolean
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>("linton");
  const { mutate, isPending:isLoadingCardAddition } = useAddToCart();

  const [cartQuantity, setCartQuantity] = useState<number>(() => {
    const saved = localStorage.getItem("cartQuantity");
    return saved ? JSON.parse(saved) : 0;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
  }, [cart]);

  // useEffect(() => {
  //   // debounced backend sync logic
  // },[cart])

  const addToCart = ({ productId, quantity, size }: CartItem) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    // request

    mutate(
      {productId, quantity,size},
      {
        onSuccess: () => {
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
          toast.success("Item added to cart successfully");
        },
        onError: (err: any) => {
          toast.error(err.response.data.message || "Failed to add to cart");
        },
      }
    );
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
        isLoadingCardAddition
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
