// coffee: price_1OgUfuGSGCprzML8cPnRLcG6
// sunglasses: price_1OgUhYGSGCprzML8MPyYERa9
// camera: price_1OgUi6GSGCprzML8wM85S8hj

const productArray = [
    {
        id: "price_1OgUfuGSGCprzML8cPnRLcG6",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1OgUhYGSGCprzML8MPyYERa9",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1OgUi6GSGCprzML8wM85S8hj",
        title: "Camera",
        price: 39.99
    },
]

function getProducts(id) {
    let productData = productArray.find(product => product.id === id);

    if(productData == undefined){
        console.log("Product data does not exist for ID :" + id)
        return undefined
    }
    return productData
}

export { productArray, getProducts };