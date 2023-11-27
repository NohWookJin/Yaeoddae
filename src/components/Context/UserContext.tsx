import { createContext, useState, Dispatch, SetStateAction } from "react";

// UserContext의 타입 정의
type UserContextType = {
  userName: string;
  isLoggedIn: boolean;
  setUserName: Dispatch<SetStateAction<string>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

// 초기 상태 정의
const initialUserState: UserContextType = {
  userName: "",
  isLoggedIn: false,
  setUserName: () => {},
  setIsLoggedIn: () => {},
};

// UserContext 생성
export const UserContext = createContext<UserContextType>(initialUserState);

// UserProvider 컴포넌트
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ userName, isLoggedIn, setUserName, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
