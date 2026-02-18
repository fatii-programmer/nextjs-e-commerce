export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  };
  slug: { current: string };
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}
