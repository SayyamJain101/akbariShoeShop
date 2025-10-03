import { Brand, Product, StoreInfo } from '../types';

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Nike',
    logo_url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Leading athletic footwear brand'
  },
  {
    id: '2',
    name: 'Adidas',
    logo_url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium sports and lifestyle shoes'
  },
  {
    id: '3',
    name: 'Puma',
    logo_url: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Performance athletic footwear'
  },
  {
    id: '4',
    name: 'New Balance',
    logo_url: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Comfort-focused running shoes'
  },
  {
    id: '5',
    name: 'Converse',
    logo_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Iconic casual footwear'
  },
  {
    id: '6',
    name: 'Reebok',
    logo_url: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Classic athletic shoes'
  }
];

export const products: Product[] = [
  {
    id: '1',
    brand_id: '1',
    category_id: '1',
    name: 'Air Max Performance',
    description: 'Premium running shoes with advanced cushioning technology',
    price: 129.99,
    image_url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    sizes_available: ['7', '8', '9', '10', '11', '12'],
    colors_available: ['Black', 'White', 'Blue', 'Red']
  },
  {
    id: '2',
    brand_id: '2',
    category_id: '1',
    name: 'Ultraboost Runner',
    description: 'Energy-returning running shoes for maximum performance',
    price: 149.99,
    image_url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    sizes_available: ['7', '8', '9', '10', '11'],
    colors_available: ['Black', 'White', 'Grey']
  },
  {
    id: '3',
    brand_id: '3',
    category_id: '2',
    name: 'Suede Classic',
    description: 'Timeless casual sneakers with iconic style',
    price: 89.99,
    image_url: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    sizes_available: ['7', '8', '9', '10', '11', '12'],
    colors_available: ['Navy', 'Red', 'Green', 'Black']
  },
  {
    id: '4',
    brand_id: '4',
    category_id: '1',
    name: 'Fresh Foam X',
    description: 'Ultra-comfortable running shoes with superior cushioning',
    price: 119.99,
    image_url: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    sizes_available: ['7', '8', '9', '10', '11'],
    colors_available: ['White', 'Black', 'Blue']
  },
  {
    id: '5',
    brand_id: '5',
    category_id: '2',
    name: 'Chuck Taylor All Star',
    description: 'Iconic canvas sneakers for everyday style',
    price: 65.99,
    image_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    sizes_available: ['6', '7', '8', '9', '10', '11', '12'],
    colors_available: ['Black', 'White', 'Red', 'Blue']
  },
  {
    id: '6',
    brand_id: '6',
    category_id: '1',
    name: 'Classic Leather',
    description: 'Retro-inspired athletic shoes with modern comfort',
    price: 79.99,
    image_url: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    sizes_available: ['7', '8', '9', '10', '11'],
    colors_available: ['White', 'Black', 'Navy']
  },
  {
    id: '7',
    brand_id: '1',
    category_id: '3',
    name: 'Court Vision',
    description: 'Sleek basketball-inspired shoes for street style',
    price: 95.99,
    image_url: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: false,
    sizes_available: ['8', '9', '10', '11', '12'],
    colors_available: ['White', 'Black']
  },
  {
    id: '8',
    brand_id: '2',
    category_id: '2',
    name: 'Stan Smith',
    description: 'Classic tennis shoes with minimalist design',
    price: 99.99,
    image_url: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: false,
    sizes_available: ['7', '8', '9', '10', '11'],
    colors_available: ['White/Green', 'White/Navy']
  }
];

export const storeInfo: StoreInfo = {
  id: '1',
  store_name: 'Akbari Shoe Shop',
  address: 'Bombay Bazaar, Bombay Bazaar-450001',
  phone: '07947125836',
  email: 'info@solehaven.com',
  hours: {
    'Monday - Friday': '9:00 AM - 9:00 PM',
    'Saturday': '10:00 AM - 9:00 PM',
    'Sunday': '11:00 AM - 6:00 PM'
  },
  about: 'Akbari Shoe Shop is your premier destination for authentic footwear from the world\'s leading brands. With over 15 years of experience, we pride ourselves on offering an extensive selection of shoes for every occasion, from high-performance athletic wear to timeless casual styles. Our knowledgeable staff is dedicated to helping you find the perfect fit, and we guarantee 100% authentic products from all major brands. Visit our showroom to experience personalized service and discover why we\'re the trusted choice for shoe enthusiasts across the city.'
};
