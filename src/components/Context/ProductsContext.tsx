// // authContext.tsx
// import React, { createContext, useState, useContext } from "react";

// // Define the shape of your context
// interface CartContextType {
//   hey: string;
//   setHey: () => void;
// }

// // Create the context with initial values
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Custom hook to use the CartContext
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within an CartProvider");
//   }
//   return context;
// };

// // CartProvider component to wrap your app and provide the context
// export const CartProvider: React.FC = ({ children }: any) => {
//   const [hey, setHey] = useState<string>("");
//   const values = { hey, setHey };
//   return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
// };
