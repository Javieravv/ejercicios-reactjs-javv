import { create } from 'zustand'

type Store = {
    count: number
    inccount: () => void
    inccountstep: (step: number) => void
    name?: string
}

export const useStore = create<Store>()((set) => ({
    count: 100,
    name: 'Javier Armando Vargas Vega - Xavier inc()',
    inccount: () => set((state) => ({ count: state.count + 1 })),
    inccountstep: (step: number) => set((state) => ({ count: state.count + step })),
}))