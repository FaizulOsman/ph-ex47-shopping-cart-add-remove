// use localStorage to manage cart data
// FileName: fakedb.js

const addToDb = ({ id }) => {
    let shoppingCart = {};

    const getCart = localStorage.getItem('shopping-cart')
    if (getCart) {
        shoppingCart = JSON.parse(getCart)
    }

    let quantity = shoppingCart[id]
    if (quantity) {
        shoppingCart[id] = quantity + 1
    } else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


const removeFromDb = ({ id }) => {
    let shoppingCart;

    const getCart = localStorage.getItem('shopping-cart')
    if (getCart) {
        shoppingCart = JSON.parse(getCart)
    } else {
        shoppingCart = {}
    }

    let quantity = shoppingCart[id]
    if (quantity) {
        shoppingCart[id] = quantity - 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


const deleteFormDb = ({ id }) => {
    const getItems = localStorage.getItem('shopping-cart')
    if (getItems) {
        const shoppingCart = JSON.parse(getItems)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

export { addToDb, removeFromDb, deleteFormDb, deleteShoppingCart }