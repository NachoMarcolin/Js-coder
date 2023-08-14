const products = [
    { id: 1, name: 'Taza Dory', price: 3000, stock: 5, image: 'https://previews.dropbox.com/p/thumb/AB-_BK1S-gA_9p8rwOjVHVqg83XlqMWRxmiixIy1qQ9RsdRX8Ik_rela2wEx4kYX1Dk1IpN4XIbczaMrrV_s7dRzlzB4MUo627ytqzAugSw3lLAYhkpVLHchd_0NHABsvmJMFefNDzhzW6OBqWL46x4fheUNkv1MJ1wOkTuWgnKsnfQwXofUluy6mFo4jkOPNMw3SEV5N0PoTCe6IDLKaBWRY1U-wNO6GbbzHnhtZhfHWzUfohLOMwmq6gyTOocrXzQx0uDxuBluWievBT80VV78ncXtJO6x3BuApvtphq2I0D4pCWuV0kR_-OlD3qka-R-958jEhJBB59UMtLd-k6Im/p.jpeg' },
    { id: 2, name: 'Taza Mike', price: 3100, stock: 3, image: 'https://previews.dropbox.com/p/thumb/AB8LVO7LbD5zuQ4x-3W9qEWLyXidhMy3s_ogWyCZHMVo8XAsur2P91A5XQfMTXMwyBj3Ejzc1puQgaHyEHoedUU2HTvyUSM0mceWGwwDJ2hKyeJfxOFMNHHy3HBQlkGgaA-QABig5fSx_-Mrs0CedyBgZGfSrgE_67wJ4IVmEaIb9dpU4G-pQ82ENxzmDGcCve2Myh0ov8Ty78OuvlMCPNro-tyi32e7O9uV9FrjQO7fEyIHke2JaTOUvsx0e8pELQWztnk3sESH3BMRxhIyt7XWJZCH6JW8NT8ygcnI1A1yD6s59f36vagTrGM3iVoldr-QGKxT7pdsfal-58n6PqME/p.jpeg' },
    { id: 3, name: 'Taza Stitch', price: 3200, stock: 15, image: 'https://previews.dropbox.com/p/thumb/AB_Xxc-kdr9S5fFifYN-8nmzf46GTdQN6XBz3IZIbMz8wnYmvT2MzsyaF2QLVW9i5CiVUgS_04lW0US6eA9_4mkovBmzhMpCnFLxPdTSLs_GsrNz24B2jwhDeSVLqElxR3Bno1huEFMbqYmU5_RD1di42eot1_rwgBijRu11i4KGx7n4uPAS1mJV5MSjaTyoRAPLWcnCuV_qzJC0wqHn747T-WPlKbhqEZLZCf_I8t4yiYKrr6kJeWYX9-oZTmXcRaDBC1ZEqUGSeJQRewzgli7Sm1Wy_w9O_ZsIUP2ESQtHMCy9h7dHSObFMNP2I4GT8jWNsGuaIQCWQ2YvafRln7jF/p.jpeg' },
    { id: 4, name: 'Taza Narcianito', price: 3000, stock: 10, image: 'https://previews.dropbox.com/p/thumb/AB8KESYTqdpkaLY1UmbtTSNorhXP_fmhPqa4I6LyQSGSyzNEDm54jbHvONaCHNhipAgIpb-cS9QamRiAcqnB5xLqlSi9zJ4zw4DCPzkhkd4joCs-HZcWAK0w7yr7rmKOla-70YpPKUS_dkoJtY04AQJl8lYaPIf9dtSn9VIouCeuzJIvbDJnU8Rpkv8ssP9BeV0OgV_gO17gUmWTm6QvgHET7prcccqGV0EaNAxjgnalkwji_nforE90w-jWmMNkJykkllL2T8t9dJSxmnA1zYLn23XrHkmXD3c2G5LBG3XtMbUl6OubgjR3D-fXfrDraGyQZh7cUqhc_j7bVtC-O90o/p.jpeg' },
    { id: 5, name: 'Taza Jack', price: 3100, stock: 6, image: 'https://previews.dropbox.com/p/thumb/AB_olbLKpRqCXbL6FGVEGSBrV1izAEd5-THNteQ2Xe5DMJDAOjUjmP6qhV_7AWiAj727DLBqZgVh1W_vFgO9fyMK09IbNp-5FnwszJdjkROjjjUc3nhUlhLlNFfrnyTZ8-N_SXzOaZcYCY3eGVHMw-ydEZXkwVRdnA4s-ooPpGnSLfcYAf11sbTdTjXE6G65mC0QRX8Fy3isoyau-OWLub5QL_2xVjBytCOFPp7Fj1sWnY2vFFZ5YTYJvXJhSmDExfJENbOCzAkuZJtriyHUQpyT-XpomxqZ1tsswO1CEPL0seH3xx0InOSRfpdK54-hqjKZMpjpeg9quwRh-hGN0Yeo/p.jpeg' },
];

const cart = [];

function addToCart(id) {
    const productToAdd = products.find(product => product.id === id);
    if (productToAdd && productToAdd.stock > 0) {
        cart.push(productToAdd);
        productToAdd.stock--;
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart');

    // Eliminar todos los elementos hijos de cartContainer
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }

    if (cart.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'El carrito está vacío.';
        cartContainer.appendChild(emptyCartMessage);
        return;
    }

    const total = cart.reduce((sum, product) => sum + product.price, 0);
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = product.name;
        cartContainer.appendChild(cartItem);
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total}`;
    cartContainer.appendChild(totalElement);
}

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    const cartContainer = document.querySelector('#carrito');
    const totalContainer = document.querySelector('#total');
    const clearButton = document.querySelector('button');

    const products = [
        { id: 1, name: 'Taza Dory', price: 3000, stock: 5, image: 'https://previews.dropbox.com/p/thumb/AB-_BK1S-gA_9p8rwOjVHVqg83XlqMWRxmiixIy1qQ9RsdRX8Ik_rela2wEx4kYX1Dk1IpN4XIbczaMrrV_s7dRzlzB4MUo627ytqzAugSw3lLAYhkpVLHchd_0NHABsvmJMFefNDzhzW6OBqWL46x4fheUNkv1MJ1wOkTuWgnKsnfQwXofUluy6mFo4jkOPNMw3SEV5N0PoTCe6IDLKaBWRY1U-wNO6GbbzHnhtZhfHWzUfohLOMwmq6gyTOocrXzQx0uDxuBluWievBT80VV78ncXtJO6x3BuApvtphq2I0D4pCWuV0kR_-OlD3qka-R-958jEhJBB59UMtLd-k6Im/p.jpeg' },
        { id: 2, name: 'Taza Mike', price: 3100, stock: 3, image: 'https://previews.dropbox.com/p/thumb/AB8LVO7LbD5zuQ4x-3W9qEWLyXidhMy3s_ogWyCZHMVo8XAsur2P91A5XQfMTXMwyBj3Ejzc1puQgaHyEHoedUU2HTvyUSM0mceWGwwDJ2hKyeJfxOFMNHHy3HBQlkGgaA-QABig5fSx_-Mrs0CedyBgZGfSrgE_67wJ4IVmEaIb9dpU4G-pQ82ENxzmDGcCve2Myh0ov8Ty78OuvlMCPNro-tyi32e7O9uV9FrjQO7fEyIHke2JaTOUvsx0e8pELQWztnk3sESH3BMRxhIyt7XWJZCH6JW8NT8ygcnI1A1yD6s59f36vagTrGM3iVoldr-QGKxT7pdsfal-58n6PqME/p.jpeg' },
        { id: 3, name: 'Taza stitch', price: 3200, stock: 15, image: 'https://previews.dropbox.com/p/thumb/AB_Xxc-kdr9S5fFifYN-8nmzf46GTdQN6XBz3IZIbMz8wnYmvT2MzsyaF2QLVW9i5CiVUgS_04lW0US6eA9_4mkovBmzhMpCnFLxPdTSLs_GsrNz24B2jwhDeSVLqElxR3Bno1huEFMbqYmU5_RD1di42eot1_rwgBijRu11i4KGx7n4uPAS1mJV5MSjaTyoRAPLWcnCuV_qzJC0wqHn747T-WPlKbhqEZLZCf_I8t4yiYKrr6kJeWYX9-oZTmXcRaDBC1ZEqUGSeJQRewzgli7Sm1Wy_w9O_ZsIUP2ESQtHMCy9h7dHSObFMNP2I4GT8jWNsGuaIQCWQ2YvafRln7jF/p.jpeg' },
        { id: 4, name: 'Taza Marcianito', price: 3000, stock: 10, image: 'https://previews.dropbox.com/p/thumb/AB8KESYTqdpkaLY1UmbtTSNorhXP_fmhPqa4I6LyQSGSyzNEDm54jbHvONaCHNhipAgIpb-cS9QamRiAcqnB5xLqlSi9zJ4zw4DCPzkhkd4joCs-HZcWAK0w7yr7rmKOla-70YpPKUS_dkoJtY04AQJl8lYaPIf9dtSn9VIouCeuzJIvbDJnU8Rpkv8ssP9BeV0OgV_gO17gUmWTm6QvgHET7prcccqGV0EaNAxjgnalkwji_nforE90w-jWmMNkJykkllL2T8t9dJSxmnA1zYLn23XrHkmXD3c2G5LBG3XtMbUl6OubgjR3D-fXfrDraGyQZh7cUqhc_j7bVtC-O90o/p.jpeg' },
        { id: 5, name: 'Taza Jack', price: 3100, stock: 6, image: 'https://previews.dropbox.com/p/thumb/AB_olbLKpRqCXbL6FGVEGSBrV1izAEd5-THNteQ2Xe5DMJDAOjUjmP6qhV_7AWiAj727DLBqZgVh1W_vFgO9fyMK09IbNp-5FnwszJdjkROjjjUc3nhUlhLlNFfrnyTZ8-N_SXzOaZcYCY3eGVHMw-ydEZXkwVRdnA4s-ooPpGnSLfcYAf11sbTdTjXE6G65mC0QRX8Fy3isoyau-OWLub5QL_2xVjBytCOFPp7Fj1sWnY2vFFZ5YTYJvXJhSmDExfJENbOCzAkuZJtriyHUQpyT-XpomxqZ1tsswO1CEPL0seH3xx0InOSRfpdK54-hqjKZMpjpeg9quwRh-hGN0Yeo/p.jpeg' },
    ];

    const cart = [];

    function addToCart(id) {
        const productToAdd = products.find(product => product.id === id);
        if (productToAdd && productToAdd.stock > 0) {
            cart.push(productToAdd);
            productToAdd.stock--;
            updateCartDisplay();
            updateProductsDisplay();
        }
    }

    function updateCartDisplay() {
        cartContainer.innerHTML = '';

        if (cart.length === 0) {
            const emptyCartMessage = document.createElement('p');
            emptyCartMessage.textContent = 'El carrito está vacío.';
            cartContainer.appendChild(emptyCartMessage);
            totalContainer.textContent = 'Total: $0';
            return;
        }

        let total = 0;

        cart.forEach(product => {
            const cartItem = document.createElement('li');
            cartItem.textContent = product.name;
            cartContainer.appendChild(cartItem);
            total += product.price;
        });

        totalContainer.textContent = `Total: $${total}`;
    }

    function updateProductsDisplay() {
        products.forEach(product => {
            const productElement = document.querySelector(`.product${product.id}`);
            const stockElement = productElement.querySelector('.stock');
            stockElement.textContent = `Disponible: ${product.stock} unidades`;
        });
    }


    clearButton.addEventListener('click', () => {
        cart.forEach(product => {
            const productToUpdate = products.find(p => p.id === product.id);
            productToUpdate.stock++;
        });
        cart.length = 0;
        updateCartDisplay();
        updateProductsDisplay();
    });

    products.forEach(product => {
        const productElement = document.querySelector(`.product${product.id}`);
        productElement.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product.id);
        });
    });

    updateCartDisplay();
});