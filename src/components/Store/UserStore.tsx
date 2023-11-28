import create from "zustand";

type UserState = {
  userEmail: string;
  isLoggedIn: boolean;
  setUserEmail: (email: string) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

const useUserStore = create<UserState>((set) => ({
  userEmail: "",
  isLoggedIn: false,
  setUserEmail: (email: string) => set({ userEmail: email }),
  setIsLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
}));

export default useUserStore;
