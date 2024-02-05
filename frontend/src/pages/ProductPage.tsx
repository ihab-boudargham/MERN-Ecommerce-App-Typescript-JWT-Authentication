import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useGetProuctDetailsBySlugQuery } from '../hooks/productHooks';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';

export default function ProductPage() {
  const parms = useParams();
  const { slug } = parms;

  const {
    data: product,
    isLoading,
    error,
  } = useGetProuctDetailsBySlugQuery(slug!);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    // @ts-ignore
    <MessageBox variant="red">{getError(error as ApiError)}</MessageBox>
  ) : product ? (
    <MessageBox variant="red">Product not found!</MessageBox>
  ) : (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <div>Product</div>
    </>
  );
}
