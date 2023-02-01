export const addToCart = (data) => {
    console.log(data, 'from react')
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