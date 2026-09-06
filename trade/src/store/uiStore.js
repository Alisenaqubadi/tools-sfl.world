import { create } from 'zustand'

export const useUiStore = create((set) => ({
  selectedSymbol: 'AAPL',
  setSelectedSymbol: (selectedSymbol) => set({ selectedSymbol }),
}))
