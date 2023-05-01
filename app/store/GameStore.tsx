import { create } from 'zustand'

type Store = {
    userCoins: number;

}

type Actions = {
    addCoins: (coins: number) => void;

}

export const useStore = create<Store & Actions>((set) => ({
    userCoins: 0,

    addCoins: (amount) => set((state) => ({ userCoins: state.userCoins + amount })),

}))
