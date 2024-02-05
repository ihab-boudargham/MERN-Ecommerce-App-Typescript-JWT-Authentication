import { useQuery } from '@tanstack/react-query';
import apiClient from '../apiClient';
import { Product } from '../types/Products';

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  });

export const useGetProuctDetailsBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ['product', slug],
    queryFn: async () =>
      (await apiClient.get<Product>(`api/product/${slug}`)).data,
  });
