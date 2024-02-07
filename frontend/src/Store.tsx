import { create } from 'zustand';

type AppState = {
  mode: string;
  toggleMode: () => void;
};

const useStore = create<AppState>((set) => ({
  mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')!
    : window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
  toggleMode: () =>
    set((state) => ({ mode: state.mode === 'dark' ? 'light' : 'dark' })),
}));

export default useStore;
