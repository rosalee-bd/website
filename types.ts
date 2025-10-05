
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  gallery: string[];
  tag?: string; // e.g., 'Pre-Order', '-20%'
  category: string;
  brand?: string;
  sizes?: string[];
  saleEnds?: string; // For countdown timer e.g. "3d:05h:31m:37s"
  description: string;
  materials: string[];
  additionalInfo: { title: string; content: string }[];
  showOnHome?: boolean;
  showInSearch?: boolean;
  isSoldOut?: boolean;
}