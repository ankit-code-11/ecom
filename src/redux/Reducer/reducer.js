export const cartData = (data = [], action) => {
    console.log(action)
    switch (action.type) {
        case "Add":

            return [action.data, ...data];
        default: 
            return data;
    }
}