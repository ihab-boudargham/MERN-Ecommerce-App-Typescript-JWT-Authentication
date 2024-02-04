import { Product } from './types/Products';

export const sampleProducts: Product[] = [
  {
    name: 'Apple B Grade MacBook Pro',
    slug: 'apple-b-grade-macbook',
    image: '../images/Mac.jpg',
    category: 'Laptops',
    brand: 'Dell',
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
    category: 'Smartphones',
    brand: 'Apple',
    price: 1099.99,
    countInStock: 30,
    description:
      'The latest iPhone with advanced camera features, powerful performance, and stunning display.',
    rating: 4.8,
    numReviews: 150,
  },
  {
    name: 'Samsung QLED Q80A',
    slug: 'samsung-qled-q80a',
    image: '../images/tv.jpg',
    category: 'Smart TVs',
    brand: 'Samsung',
    price: 1499.99,
    countInStock: 20,
    description:
      '4K QLED TV with Quantum HDR, providing vibrant colors and an immersive viewing experience.',
    rating: 4.7,
    numReviews: 80,
  },
  {
    name: 'Canon EOS R5',
    slug: 'canon-eos-r5',
    image: '../images/camera.jpg',
    category: 'Cameras',
    brand: 'Canon',
    price: 3899.99,
    countInStock: 15,
    description:
      'Professional mirrorless camera with 8K video capabilities and high-resolution imaging.',
    rating: 4.9,
    numReviews: 90,
  },
  {
    name: 'Sony WF-1000XM4',
    slug: 'sony-wf-1000xm4',
    image: '../images/earphones.jpg',
    category: 'Accessories',
    brand: 'Sony',
    price: 279.99,
    countInStock: 40,
    description:
      'Premium noise-canceling wireless earbuds with exceptional sound quality and long battery life.',
    rating: 4.6,
    numReviews: 110,
  },
];
