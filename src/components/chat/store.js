// store.js
import { create } from 'zustand'

const useStore = create((set) => ({
    message: '',
    setMessage: (text) => set({ message: text }),
}))

export default useStore
