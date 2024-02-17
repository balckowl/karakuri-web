import { create } from "zustand"

interface TGameStoreState {
    level: number;
    belongingList: string[];
    getBelonging: (belonging: string) => void;
    havingItem: string;
    setHavingItem: (item: string) => void;
}

export const useGameStore = create<TGameStoreState>()((set) => ({
    level: 1,
    belongingList: ["","","","",""],
    getBelonging: (belonging: string) => set((state) => ({
        belongingList: state.belongingList.map((item, index) => index === state.belongingList.indexOf("") ? belonging : item)
    })),
    havingItem: "",
    setHavingItem: (item: string) => set((state) => ({
        havingItem: state.havingItem = item
    })) 
}))

