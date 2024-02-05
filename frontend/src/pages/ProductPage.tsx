import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useGetProuctDetailsBySlugQuery } from '../hooks/productHooks';

export default function ProductPage() {
  const parms = useParams();
  const { slug } = parms;

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProuctDetailsBySlugQuery(slug!);

  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <div>Product</div>
    </>
  );
}
