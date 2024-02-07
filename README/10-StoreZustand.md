# Zustand

We will create a react context to handle the state of the application.

1. npm install zustand

2. Create a Store.ts in frontend.

3. import { create } from 'zustand';

4. Define the type for the state:

   <------------------------------------->
   type AppState = {
   mode: string;
   toggleMode: () => void;
   // Add your new state properties here
   // Example: count: number;
   // Example: increment: () => void;
   };

   <------------------------------------->

5. Create the Zustand store:

   <------------------------------------->

   const useStore = create<AppState>((set) => ({

   // Initialize the state properties
   mode: localStorage.getItem('mode')
   ? localStorage.getItem('mode')!
   : window.matchMedia &&
   window.matchMedia('(prefers-color-scheme: dark)').matches
   ? 'dark'
   : 'light',

   // Define the functions that update the state
   toggleMode: () =>
   set((state) => ({ mode: state.mode === 'dark' ? 'light' : 'dark' })),
   // Add the initial values and functions for your new state properties
   // Example:
   // count: 0,
   // increment: () => set((state) => ({ count: state.count + 1 })),
   }));

   export default useStore;

   <------------------------------------->

6. In the compoenent where the toggling of the theme is needed, import the store and use it as needed as:
   import useStore from './store';

   const [mode, toggleMode] = useStore()

   <button onClick={toggleMode}></button>
   and we can use it as follow: ${mode === 'dark' ? 'dark' : ''}

7. In the component where the toggling action is not needed bu the change in theme is needed, import the store and use it as needed as:
   import useStore from './store';

   const {mode} = useStore();
   and we can use it as follow: ${mode === 'dark' ? 'dark' : ''}
