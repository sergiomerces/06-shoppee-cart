//o que o carrinho pode fazer?

//adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item do carrinho
async function deleteItem(userCart, name) {
    
}
//remover item do carrinho
async function removeItem(userCart, index) {
    
}

//calcular total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
};