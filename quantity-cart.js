const shoppingCart = [
    {name: 'shoe', price: 1200,  quantity:2},
    {name: 'pant', price: 3700,  quantity:5},
    {name: 'belt', price: 600,  quantity:4},
    {name: 'shirt', price: 2200,  quantity:3},
]

function totallCost (products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totallCost(shoppingCart);
console.log('total expense today:', expense);