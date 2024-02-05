# Load Products By React Query

1.  npm i @tanstack/react-query

2.  npm i @tanstack/react-query-devtools

3.  A simpler approach to fetch data from backend, as well as finfing isssues and debugging the code.

4.  In index.tsx:
    remove:

    1. import axios from 'axios';

       axios.defaults.baseURL =
       process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : '/';

    2. Next stap is wrapping react router by QueryClientProvider.

    const queryClient = new QueryClient();

    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </HelmetProvider>
    </React.StrictMode>
    );

5.  Create an apiClient.ts in the src folder. Here we basicially use it to set the base for our requests.
    create and instance of axios and export it.
    import axios from 'axios';

    const apiClient = axios.create({
    baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '/',
    headers: {
    'Content-Type': 'application/json',
    },
    });

    export default apiClient;

6.  Now create a new folder hooks. we need this to create custom hooks to interact with the backend. These hooks will be added to our api clients.

    Create a file called ProductHooks.ts:

    export const useGetProductsQuery = () =>
    useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
    });

7.  So we need to use this in home.txs. But first we need to remove all of the following:
    type State = {
    products: Product[];
    loading: boolean;
    error: string;
    };

    type Action =
    | { type: 'FETCH_REQUEST' }
    | { type: 'FETCH_SUCCESS'; payload: Product[] }
    | { type: 'FETCH_FAILURE'; payload: string };

    const initialState: State = {
    products: [],
    loading: true,
    error: '',
    };

    const reducer = (state: State, action: Action) => {
    switch (action.type) {
    case 'FETCH_REQUEST':
    return {
    ...state,
    loading: true,
    };
    case 'FETCH_SUCCESS':
    return {
    ...state,
    loading: false,
    products: action.payload,
    };
    case 'FETCH_FAILURE':
    return {
    ...state,
    loading: false,
    error: action.payload,
    };
    default:
    return state;
    }
    };

    export default function HomePage() {
    const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>

    > (reducer, initialState);

    useEffect(() => {
    const fetchData = async () => {
    dispatch({ type: 'FETCH_REQUEST' }); // set loading true
    try {
    const result = await axios.get('/api/products');
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); // Fetch the data from backend
    } catch (err) {
    dispatch({ type: 'FETCH_FAILURE', payload: getError(err as ApiError) });
    }
    };
    fetchData();
    }, []);

8.  And in home page simply :
    export default function HomePage() {

    const { data: products, isLoading, error } = useGetProductsQuery();

    return isLoading ? (
    <LoadingBox />
    ) : error ? (
    // @ts-ignore
    <MessageBox variant="red">{getError(error as ApiError)}</MessageBox>
    ) : (
    <!--  make sure to put products instead of product -->

    <>
    <Helmet>
    <title>ShopTech</title>
    </Helmet>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5">
    {products!.map((product) => (
    <ProductItem key={product.slug} product={product} />
    ))}
    </div>
    </>
    );
    }
