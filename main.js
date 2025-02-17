document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById('products');
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><strong>$${product.price}</strong>`;
            container.appendChild(div);
        });
    });
});
