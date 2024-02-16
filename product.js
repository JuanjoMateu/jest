let products = []; 
let id = 0; 

function resetProducts() {
    products = [];
    id = 0;
    return {products, id}
};

function getProducts() {
    return products
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name and price are obligatories')
    }
    if (products.find(product => product.name === name)) {
        throw new Error('Existing product');
    }
    const product = { id: id++, name, price};
    products.push(product);
    return products
}


module.exports = {
    resetProducts, 
    addProduct, 
    getProducts, 
}