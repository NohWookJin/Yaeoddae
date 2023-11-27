import { create } from "zustand";

interface MemberState {
  counts: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export const useCountStore = create<MemberState>((set) => ({
  counts: 2,
  increaseCount: () => set((state) => ({ counts: state.counts + 1 })),
  decreaseCount: () => set((state) => ({ counts: state.counts - 1 })),
}));
