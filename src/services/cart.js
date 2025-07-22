//o que o carrinho pode fazer?

//adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item do carrinho - exclui
async function deleteItem(userCart, name) {
    const index = userCart.cartfindIndex((item) => item.name === name);

    if(index !== -1){
        userCart.Cart.splice(index, 1);
    }
}
//remover item do carrinho - diminui
async function removeItem(userCart, index) {
    //transforma o número visual para o usuário no número de index
    const deleteIndex = index -1;
    
    //se é maior que zero ou se é maior que o tamanho do carrinho
    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function displayCart(userCart) {
    console.log('Shoppee Cart List: ');
    userCart.forEach((item, index)=>{
        console.log(`${index + 1}. ${item.name} - ${item.price} - ${item.quantity} - Subtotal ${item.subtotal()}`);
    });
}

//calcular total do carrinho
async function calculateTotal(userCart) {
    console.log('\nShoppee Cart TOTAL is: ');
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result}`);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
};