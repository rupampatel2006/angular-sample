export interface Categories {
  fruits: string[];
  vegetables: string[];
  beverages: string[];
  snacks: string[];
}

export interface CategoriesData {
  categories: Categories;
}


export interface Product {
  product: string;
  quantity: number;
}

export interface Category {
  key: string;
  products: Product[];
  checked: boolean;
}
