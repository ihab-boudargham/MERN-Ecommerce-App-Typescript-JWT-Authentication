import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from 'react-helmet-async';
import { useGetProductsQuery } from '../hooks/productHooks';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import { useContext } from 'react';
import { Store } from '../Store';

export default function HomePage() {
  const { state } = useContext(Store);

  const { data: products, isLoading, error } = useGetProductsQuery();
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    // @ts-ignore
    <MessageBox variant="red">{getError(error as ApiError)}</MessageBox>
  ) : (
    <>
      <Helmet>
        <title>ShopTech</title>
      </Helmet>
      <div className={`${state.mode === 'dark' ? 'dark' : ''}`}>
        <div
          className={`grid ${
            state.mode === 'dark' ? 'bg-gray-500' : 'bg-white'
          } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5`}
        >
          {products!.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
