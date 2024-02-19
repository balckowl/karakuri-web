import { create } from "zustand"

interface TGameStoreState {
    level: number;
    belongingList: string[];
    getBelonging: (belonging: string) => void;
    havingItem: string;
    setHavingItem: (item: string) => void;
    clearLampList: any;
    setClearLampList: (clearLampList: any) => void;
    setClearLampAtIndex: (level:any , index:any, value:any) => void;
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
    })),
    clearLampList: {},
    setClearLampList: (clearLampList: any) => set((state) => ({
        clearLampList: state.clearLampList = clearLampList
    })),
    setClearLampAtIndex: (level: keyof TGameStoreState['clearLampList'], index: number, value: string) => set((state) => {
        // 新しい配列を作成
        const newLampArray = [...state.clearLampList[level]];
        // 指定されたインデックスの値を更新
        newLampArray[index] = value;
        
        return {
            ...state,
            clearLampList: {
                ...state.clearLampList,
                [level]: newLampArray,
            },
        };
    }),

}))

