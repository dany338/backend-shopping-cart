const fs = require('fs');
const path = require('path');

exports.getProducts = () => {
    const dataPath = path.join(__dirname, '../data/products.json');
    const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    return products;
};

exports.getProductById = (productId) => {
    const products = this.getProducts();
    return products.find(product => product.id === productId);
};
