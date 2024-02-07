import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from 'react-helmet-async';
import { useGetProductsQuery } from '../hooks/productHooks';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import useStore from '../Store';

export default function HomePage() {
  const { mode } = useStore();
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
      <div className="">
        <div
          className={`grid ${
            mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
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
