export const addToCart = (data) => {
    return {
        type: 'Add',
        data
    }
}

export const removeToCart = (data) => {
    return {
        type: 'Remove',
        data
    }
}

export const emptyCart = () => {
    return {
        type: 'Empty',
        data: []
    }
}