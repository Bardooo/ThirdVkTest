export type CartItem = {
  id: string,
  imageUrl: string,
  title: string,
  description: string,
  price: number,
  count: number
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface CartItemSliceState {
  items: CartItem[];
  totalPrice: number;
  status: Status;
}