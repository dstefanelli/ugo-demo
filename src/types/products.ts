export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: priceInfo;
  shortDescription: string;
}

export interface priceInfo {
  itemPrice: string;
  linePrice: string;
  linePriceDisplay: string;
  unitPrice: string;
  isB2BPrice: boolean;
}
