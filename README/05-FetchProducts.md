# Fetch Products

1.  npm install axios

2.  import axios from 'axios' in the index.tsx in the front end where we will be making the API calls.

3.  But first we need to config bas URL for axios, where we will check if we are in development or production mode (.env) we will set the base URL to the backend server 'http://localhost:5000'

4.  npm i --save-dev @types/node

5.  We will fetch the products from the Home page.

    1.  So we will define types in the home page to use reducer hook to fetch data from backend. But first we should define initial state for reducer hook.
    2.  For fetching, we need:
        - the product array
        - Loading boolean
        - error string
    3.  So we will define the type State as:

        type State = {
        products: Product[];
        loading: boolean;
        error: string;
        }

    4.  And now we will define the action types as:

        type Action =
        | { type: 'FETCH_REQUEST' }
        | { type: 'FETCH_SUCCESS', payload: Product[] }
        | { type: 'FETCH_FAILURE', payload: string }

    5.  Now we will define the reducer function as:
        const initialState: State = {
        products: [],
        loading: true,
        error: ''
        }

    6.  Now we will define the reducer function as:
        const reducer = (state: State, action: Action) => {
        switch (action.type) {
        case 'FETCH_REQUEST':
        return {
        ...state,
        loading: true
        }
        case 'FETCH_SUCCESS':
        return {
        ...state,
        loading: false,
        products: action.payload
        }
        case 'FETCH_FAILURE':
        return {
        ...state,
        loading: false,
        error: action.payload
        }
        default:
        return state
        }
        }

    7.  Create types/ApiError.ts

    8.  Now we want to define a function to get the error as:
        export declare type ApiError = {
        message: string;
        response: {
        data: {
        message: string;
        }
        }
        }

    9.  Create utils.ts
        import { ApiError } from './types/ApiError';

        export const getError = (error: ApiError) => {
        return error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        };

        {\*\*
        This code is useful in scenarios where you might be dealing with API responses or network requests. For example, when you make an HTTP request to an API, you may receive an error response in a specific format. The ApiError type is a way to define the expected structure of error objects in your application.

        The getError function can then be used to extract the most relevant error message from the error object. This can be especially helpful in handling and displaying error messages to users, logging, or any other scenario where you need to deal with error responses consistently.

        \*\*}

6.  For fetch products we will use useReducer.

7.  Now import useReducer from react as:
    import { useReducer } from 'react';

8.  Now before the return statement, add the following code:
    const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action> >(reducer, initialState);

9.  After that we will import useEffect:
    useEffect(() => {
    const fetchData = async () => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
    const result = await axios.get('/api/products');
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    } catch (error) {
    dispatch({ type: 'FETCH_FAILURE', payload: getError(err as ApiError) });
    }
    };
    fetchData();
    }, []);

10. we should defone getError function in utils.ts as:
    import { ApiError } from './types/ApiError';

    export const getError = (error: ApiError) => {
    return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
    };

    and create types/ApiError.ts file as:
    export declare type ApiError = {
    message: string;
    response: {
    data: {
    message: string;
    };
    };
    };

11. For loading and error we created componenets to display these:
    return loading ? (
    <LoadingBox />
    ) : error ? (
    <MessageBox variant="red">This is an error message.</MessageBox>
    ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
    // here we should replace sampleProducts with products
    {products.map((product) => (  
     <li className="list-none w-[350px]" ............
