# Reducer

We will create a react context to handle the state of the application.

1.  Create a Store.ts in frontend.

2.  to create a context we start by defining the type of the applictaion

    <------------------------------------->
    type AppState = {
    mode: string // a property used for settinga light or a dark mode
    }
    <------------------------------------->

3.  We should define an initial state for our application:
    then deifne the value of the mode.What we will basically use is to check in the local storage for mode, if it exists use it as mode.
    otherwise check web browser for the theme. if the selected theme by the user is dark set the mode to dark otherwise set it to light.

    <------------------------------------->

    const initialState: AppState = {

    mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')!
    : window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
    };

    <------------------------------------->

4.  Next we will define a reducer to create a redux context:

            1. but first we should define an Action type for the reducer to send the actionS

            <------------------------------------->


            type Action = {
            type: "SWITCH_MODE"
            }

            <------------------------------------->

            2. Now we will define the reducer function. The reducer function accepts 2 parameters, state of type AppState and action of type Action.

            the return value of the reducer is AppState. So i get a new state from the old state.
            In the reducer we have a switch statement that checks for the action type.
            if the action type is SWITCH_MODE we return a new state with the mode property set to the opposite of the current mode.
            if the action type is not SWITCH_MODE we return the old state.

            for all swutch cases we need to have a default case to return the old state.

            <------------------------------------->

            function reducer(state: AppState, action: Action): AppState {

            switch (action.type) {
            case 'SWITCH_MODE':
            return { ...state, mode: state.mode === 'dark' ? 'light' : 'dark' };
            default:
            return state;
            }
            }

            <------------------------------------->

            3. Next step is defining dispatch function that return initial state at the very begining of running the application.

            <------------------------------------->

            const defaultDispatch: React.Dispatch<Action> = () => initialState;

            <------------------------------------->

            4. Next step is creating context using react.createContext and passing the dispatch function and state as a value.

            const Store = React.createContext({
            state: initialState,
            dispatch: defaultDispatch,
            });

            <------------------------------------->

            5. W need to define a store provider component that will wrap the entire application and pass the state and dispatch function as a value to the context.

            thet we will define the reducer hook that will be used to update the state.

            The value prop makes these values available to any components that are consumers of this context.

            <------------------------------------->

            function StoreProvider(props: React.PropsWithChildren<{}>) {
            const [state, dispatch] = React.useReducer<React.Reducer<AppState, Action>>(
                reducer,
                initialState
            );

            return <Store.Provider value={{ state, dispatch }} {...props} />;
            }

            export { Store, StoreProvider}

            <------------------------------------->

    5. Wrap the <StoreProvider> around the entire application in index.tsx, to make the state and dispatch function available to all components.

    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <StoreProvider>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </HelmetProvider>
    </StoreProvider>
    </React.StrictMode>
    );

    6. Now you can use the state and dispatch function in any component that is wrapped with the <StoreProvider> component.
       To use this context we add to App.tsx the folowing:

    const { state, dispatch } = useContext(Store);

    7. Next step is defining useEffect to to change the theme of the application:

    useEffect (() => {
    document.body.setAttribute('data', state.theme);
    })
