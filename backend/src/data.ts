import { Product } from './types/Products';

export const sampleProducts: Product[] = [
  {
    name: 'Apple B Grade MacBook Pro',
    slug: 'apple-b-grade-macbook',
    image: '../images/Mac.jpg',
    productCategory: 'Laptops',
    storeName: 'Dell',
    price: 999.99,
    countInStock: 50,
    description:
      'High-performance laptop with a sleek design, perfect for work and entertainment.',
    rating: 4.5,
    numReviews: 120,
  },
  {
    name: 'iPhone 14 Pro',
    slug: 'iphone-14-pro',
    image: '../images/iphone 14.jpg',
    productCategory: 'Smartphones',
    storeName: 'Apple',
    price: 1099.99,
    countInStock: 30,
    description:
      'The latest iPhone with advanced camera features, powerful performance, and stunning display.',
    rating: 1.5,
    numReviews: 150,
  },
  {
    name: 'Samsung QLED Q80A',
    slug: 'samsung-qled-q80a',
    image: '../images/tv.jpg',
    productCategory: 'Smart TVs',
    storeName: 'Samsung',
    price: 1499.99,
    countInStock: 0,
    description:
      '4K QLED TV with Quantum HDR, providing vibrant colors and an immersive viewing experience.',
    rating: 3,
    numReviews: 80,
  },
  {
    name: 'Canon EOS R5',
    slug: 'canon-eos-r5',
    image: '../images/camera.jpg',
    productCategory: 'Cameras',
    storeName: 'Canon',
    price: 3899.99,
    countInStock: 15,
    description:
      'Professional mirrorless camera with 8K video capabilities and high-resolution imaging.',
    rating: 4.9,
    numReviews: 90,
  },
];
