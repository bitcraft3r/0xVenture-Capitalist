import { create } from 'zustand'

type Store = {
    userCoins: number;
    biz1Quantity: number;
    biz2Quantity: number;
    biz3Quantity: number;
    biz4Quantity: number;
    biz5Quantity: number;
    biz6Quantity: number;
    biz7Quantity: number;
    biz8Quantity: number;
    biz9Quantity: number;
    biz10Quantity: number;

}

type Actions = {
    addCoins: (coins: number) => void;
    addBiz1Quantity: (quantity: number) => void;
    addBiz2Quantity: (quantity: number) => void;
    addBiz3Quantity: (quantity: number) => void;
    addBiz4Quantity: (quantity: number) => void;
    addBiz5Quantity: (quantity: number) => void;
    addBiz6Quantity: (quantity: number) => void;
    addBiz7Quantity: (quantity: number) => void;
    addBiz8Quantity: (quantity: number) => void;
    addBiz9Quantity: (quantity: number) => void;
    addBiz10Quantity: (quantity: number) => void;

}

export const useStore = create<Store & Actions>((set) => ({
    userCoins: 0,
    biz1Quantity: 0,
    biz2Quantity: 0,
    biz3Quantity: 0,
    biz4Quantity: 0,
    biz5Quantity: 0,
    biz6Quantity: 0,
    biz7Quantity: 0,
    biz8Quantity: 0,
    biz9Quantity: 0,
    biz10Quantity: 0,

    addCoins: (amount) => set((state) => ({ userCoins: state.userCoins + amount })),
    addBiz1Quantity: (quantity) => set((state) => ({ biz1Quantity: state.biz1Quantity + quantity })),
    addBiz2Quantity: (quantity) => set((state) => ({ biz2Quantity: state.biz2Quantity + quantity })),
    addBiz3Quantity: (quantity) => set((state) => ({ biz3Quantity: state.biz3Quantity + quantity })),
    addBiz4Quantity: (quantity) => set((state) => ({ biz4Quantity: state.biz4Quantity + quantity })),
    addBiz5Quantity: (quantity) => set((state) => ({ biz5Quantity: state.biz5Quantity + quantity })),
    addBiz6Quantity: (quantity) => set((state) => ({ biz6Quantity: state.biz6Quantity + quantity })),
    addBiz7Quantity: (quantity) => set((state) => ({ biz7Quantity: state.biz7Quantity + quantity })),
    addBiz8Quantity: (quantity) => set((state) => ({ biz8Quantity: state.biz8Quantity + quantity })),
    addBiz9Quantity: (quantity) => set((state) => ({ biz9Quantity: state.biz9Quantity + quantity })),
    addBiz10Quantity: (quantity) => set((state) => ({ biz10Quantity: state.biz10Quantity + quantity })),

}))
