import ADD_TOCART from './acionTypes';

export const addProduct = product => {

    return {
        type : ADD_TOCART,
        payload : product
    }

}