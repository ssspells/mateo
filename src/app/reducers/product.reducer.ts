import * as productActions from '../actions/product.actions';
import { Product } from '../models/product.model';

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: any;
}

export const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}

export function reducer(
    state = initialState,
    action: productActions.ActionsUnion
): ProductState {
    switch(action.type) {
        case productActions.ActionTypes.LoadDataBegin: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case productActions.ActionTypes.LoadDataSuccess: {
            return {
                ...state,
                loading: false,
                products: action.payload.data
             };
        }

        case productActions.ActionTypes.LoadDataFailure: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        
        default: {
            return state;
        }
    }
}

export const getProducts = (state: ProductState) => state.products;