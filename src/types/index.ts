export interface Brand {
  id: string;
  name: string;
  logo_url: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  brand_id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_featured: boolean;
  sizes_available: string[];
  colors_available: string[];
  brand?: Brand;
  category?: Category;
}

export interface StoreInfo {
  id: string;
  store_name: string;
  address: string;
  phone: string;
  email: string;
  hours: Record<string, string>;
  about: string;
}
