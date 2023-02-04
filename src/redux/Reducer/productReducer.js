export const productData = (data = [], action) => {
    console.log(data, action, 'product action');
    switch (action.type) {
        case 'Product_List': {
            return data
        } default : return data;
    }
}