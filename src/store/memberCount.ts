import { create } from "zustand";

interface MemberState {
  counts: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export const useCountStore = create<MemberState>((set) => ({
  // 숙박 기본 인원 2로 설정
  counts: 2,
  increaseCount: () => set((state) => ({ counts: state.counts + 1 })),
  decreaseCount: () => set((state) => ({ counts: state.counts - 1 })),
}));
