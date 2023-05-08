import { createContext, useContext } from "react";
import IUser from "types/user";

export interface IUserContext {
  user: IUser | undefined
  isLoading: boolean,
  setUser: React.Dispatch<IUser>,
}

export const AuthContext = createContext<IUserContext>({
  user: undefined,
  isLoading: false,
  setUser: (user: IUser) => {},
});

export const useAuthContext = () => useContext(AuthContext);