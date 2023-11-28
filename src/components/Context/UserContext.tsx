import { createContext, useState } from "react";

// UserContext의 타입 정의
type UserContextType = {
  userEmail: string;
  isLoggedIn: boolean;
  setUserEmail: (email: string) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

// 초기 상태 정의
const initialUserState: UserContextType = {
  userEmail: "",
  isLoggedIn: false,
  setUserEmail: () => {},
  setIsLoggedIn: () => {},
};

export const UserContext = createContext<UserContextType>(initialUserState);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userEmail, setUserEmail] = useState<string>(localStorage.getItem("userEmail") || "");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleSetUserEmail = (email: string) => {
    localStorage.setItem("userEmail", email);
    setUserEmail(email);
  };

  const handleSetIsLoggedIn = (loggedIn: boolean) => {
    localStorage.setItem("isLoggedIn", loggedIn.toString());
    setIsLoggedIn(loggedIn);
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        isLoggedIn,
        setUserEmail: handleSetUserEmail,
        setIsLoggedIn: handleSetIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
