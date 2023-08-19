import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IMenuContext {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
interface IChildren {
  children: React.ReactNode;
}

export const MenuContext = createContext<IMenuContext | null>(null);

const ContextProvider = ({ children }: IChildren) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>{children}</MenuContext.Provider>;
};

export default ContextProvider;
