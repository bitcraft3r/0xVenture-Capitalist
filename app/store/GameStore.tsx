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
    biz1Time: number;
    biz2Time: number;
    biz3Time: number;
    biz4Time: number;
    biz5Time: number;
    biz6Time: number;
    biz7Time: number;
    biz8Time: number;
    biz9Time: number;
    biz10Time: number;
    biz1Revenue: number;
    biz2Revenue: number;
    biz3Revenue: number;
    biz4Revenue: number;
    biz5Revenue: number;
    biz6Revenue: number;
    biz7Revenue: number;
    biz8Revenue: number;
    biz9Revenue: number;
    biz10Revenue: number;

}

type Actions = {
    addCoins: (coins: number) => void;
    setCoins: (coins: number) => void;
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
    setBiz1Quantity: (quantity: number) => void;
    setBiz2Quantity: (quantity: number) => void;
    setBiz3Quantity: (quantity: number) => void;
    setBiz4Quantity: (quantity: number) => void;
    setBiz5Quantity: (quantity: number) => void;
    setBiz6Quantity: (quantity: number) => void;
    setBiz7Quantity: (quantity: number) => void;
    setBiz8Quantity: (quantity: number) => void;
    setBiz9Quantity: (quantity: number) => void;
    setBiz10Quantity: (quantity: number) => void;
    setBiz1Time: (time: number) => void;
    setBiz2Time: (time: number) => void;
    setBiz3Time: (time: number) => void;
    setBiz4Time: (time: number) => void;
    setBiz5Time: (time: number) => void;
    setBiz6Time: (time: number) => void;
    setBiz7Time: (time: number) => void;
    setBiz8Time: (time: number) => void;
    setBiz9Time: (time: number) => void;
    setBiz10Time: (time: number) => void;
    setBiz1Revenue: (revenue: number) => void;
    setBiz2Revenue: (revenue: number) => void;
    setBiz3Revenue: (revenue: number) => void;
    setBiz4Revenue: (revenue: number) => void;
    setBiz5Revenue: (revenue: number) => void;
    setBiz6Revenue: (revenue: number) => void;
    setBiz7Revenue: (revenue: number) => void;
    setBiz8Revenue: (revenue: number) => void;
    setBiz9Revenue: (revenue: number) => void;
    setBiz10Revenue: (revenue: number) => void;

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
    biz1Time: 0,
    biz2Time: 0,
    biz3Time: 0,
    biz4Time: 0,
    biz5Time: 0,
    biz6Time: 0,
    biz7Time: 0,
    biz8Time: 0,
    biz9Time: 0,
    biz10Time: 0,
    biz1Revenue: 0,
    biz2Revenue: 0,
    biz3Revenue: 0,
    biz4Revenue: 0,
    biz5Revenue: 0,
    biz6Revenue: 0,
    biz7Revenue: 0,
    biz8Revenue: 0,
    biz9Revenue: 0,
    biz10Revenue: 0,

    addCoins: (amount) => set((state) => ({ userCoins: state.userCoins + amount })),
    setCoins: (amount) => set(() => ({ userCoins: amount })),
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
    setBiz1Quantity: (quantity) => set(() => ({ biz1Quantity: quantity })),
    setBiz2Quantity: (quantity) => set(() => ({ biz2Quantity: quantity })),
    setBiz3Quantity: (quantity) => set(() => ({ biz3Quantity: quantity })),
    setBiz4Quantity: (quantity) => set(() => ({ biz4Quantity: quantity })),
    setBiz5Quantity: (quantity) => set(() => ({ biz5Quantity: quantity })),
    setBiz6Quantity: (quantity) => set(() => ({ biz6Quantity: quantity })),
    setBiz7Quantity: (quantity) => set(() => ({ biz7Quantity: quantity })),
    setBiz8Quantity: (quantity) => set(() => ({ biz8Quantity: quantity })),
    setBiz9Quantity: (quantity) => set(() => ({ biz9Quantity: quantity })),
    setBiz10Quantity: (quantity) => set(() => ({ biz10Quantity: quantity })),
    setBiz1Time: (time) => set(() => ({ biz1Time: time })),
    setBiz2Time: (time) => set(() => ({ biz2Time: time })),
    setBiz3Time: (time) => set(() => ({ biz3Time: time })),
    setBiz4Time: (time) => set(() => ({ biz4Time: time })),
    setBiz5Time: (time) => set(() => ({ biz5Time: time })),
    setBiz6Time: (time) => set(() => ({ biz6Time: time })),
    setBiz7Time: (time) => set(() => ({ biz7Time: time })),
    setBiz8Time: (time) => set(() => ({ biz8Time: time })),
    setBiz9Time: (time) => set(() => ({ biz9Time: time })),
    setBiz10Time: (time) => set(() => ({ biz10Time: time })),
    setBiz1Revenue: (revenue) => set(() => ({ biz1Revenue: revenue })),
    setBiz2Revenue: (revenue) => set(() => ({ biz2Revenue: revenue })),
    setBiz3Revenue: (revenue) => set(() => ({ biz3Revenue: revenue })),
    setBiz4Revenue: (revenue) => set(() => ({ biz4Revenue: revenue })),
    setBiz5Revenue: (revenue) => set(() => ({ biz5Revenue: revenue })),
    setBiz6Revenue: (revenue) => set(() => ({ biz6Revenue: revenue })),
    setBiz7Revenue: (revenue) => set(() => ({ biz7Revenue: revenue })),
    setBiz8Revenue: (revenue) => set(() => ({ biz8Revenue: revenue })),
    setBiz9Revenue: (revenue) => set(() => ({ biz9Revenue: revenue })),
    setBiz10Revenue: (revenue) => set(() => ({ biz10Revenue: revenue })),

}))
