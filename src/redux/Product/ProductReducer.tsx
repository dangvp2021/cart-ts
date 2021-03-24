import React from 'react'
import  Dictionary  from '../../Models/IDictionary';
import IProduct from '../../Models/IProduct';
import  CartProduct  from '../../Models/IQuantity';
import { ProductAction,ProductType } from './ProductAction';

export interface ProductState {
  products: IProduct[];
}
const initial: ProductState = {
  products: [],
};
export function productReducer (intials:ProductState=initial, action:ProductAction)
{
  switch (action.type) {

    case ProductType.PRODUCT_FETCHED:

      return {
        ...intials,
        products: action.products,
      };

    default:
      return intials;
  }
}

