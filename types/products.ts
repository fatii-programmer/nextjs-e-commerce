export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    tags?: string[];
    discountPercentage?: number;
    isNew?: boolean;
    productImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    inventory:number;
    
  }
  