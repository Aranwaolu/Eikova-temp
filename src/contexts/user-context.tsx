import { createContext, useState } from "react";
import { getUserFromLocal } from "../utils";

interface IUser {
  token: string;
  isLoggedIn: boolean;
  details: {
    name: string;
    role: string;
    email: string;
  };
}
interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

const defaultValue = {
  user: getUserFromLocal(),
  setUser: (user: IUser) => {},
};
export const UserContext = createContext<IUserContext>(defaultValue);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>(getUserFromLocal());
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
