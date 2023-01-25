export const cartData = (data = [], action) => {
    console.log(action)
    switch (action.type) {
        case "Add":
            return [action.data, ...data];
        case "Remove": 
            data.pop();
            return [...data];
        case "Empty":
            return action.data;
        default: 
            return data;
    }
}