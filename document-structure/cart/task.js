// Находим нужные элементы в DOM
const productElements = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

// Обработчик клика на кнопку увеличения количества товара
function increaseQuantity(event) {
  const productElement = event.target.closest('.product');
  if (!productElement) return;

  const quantityElement = productElement.querySelector('.product__quantity-value');
  const currentQuantity = parseInt(quantityElement.textContent, 10);
  if (!isNaN(currentQuantity)) {
    quantityElement.textContent = currentQuantity + 1;
  }
}

// Обработчик клика на кнопку уменьшения количества товара
function decreaseQuantity(event) {
  const productElement = event.target.closest('.product');
  if (!productElement) return;

  const quantityElement = productElement.querySelector('.product__quantity-value');
  const currentQuantity = parseInt(quantityElement.textContent, 10);
  if (!isNaN(currentQuantity) && currentQuantity > 1) {
    quantityElement.textContent = currentQuantity - 1;
  }
}

// Обработчик клика на кнопку добавления товара в корзину
function addToCart(event) {
  const productElement = event.target.closest('.product');
  if (!productElement) return;

  const productId = productElement.dataset.id;
  const productImage = productElement.querySelector('.product__image');
  const productQuantity = parseInt(productElement.querySelector('.product__quantity-value').textContent, 10);

  const cartProductElement = document.querySelector(`.cart__product[data-id="${productId}"]`);
  if (cartProductElement) {
    const cartProductCount = cartProductElement.querySelector('.cart__product-count');
    const currentQuantity = parseInt(cartProductCount.textContent, 10);
    cartProductCount.textContent = currentQuantity + productQuantity;

    // Добавляем эффект перемещения товара
    const productImageClone = productImage.cloneNode(true);
    productImageClone.classList.add('product-shadow');
    document.body.appendChild(productImageClone);

    const productImageRect = productImage.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const xDistance = cartRect.left - productImageRect.left;
    const yDistance = cartRect.top - productImageRect.top;

    const stepX = xDistance / 20;
    const stepY = yDistance / 20;

    let currentX = productImageRect.left;
    let currentY = productImageRect.top;

    const animationInterval = setInterval(() => {
      currentX += stepX;
      currentY += stepY;
      productImageClone.style.left = currentX + 'px';
      productImageClone.style.top = currentY + 'px';

      if (Math.abs(currentX - cartRect.left) < 1 && Math.abs(currentY - cartRect.top) < 1) {
        clearInterval(animationInterval);
        document.body.removeChild(productImageClone);
      }
    }, 30);
  } else {
    const cartProductElement = document.createElement('div');
    cartProductElement.classList.add('cart__product');
    cartProductElement.dataset.id = productId;

    const cartProductImage = document.createElement('img');
    cartProductImage.classList.add('cart__product-image');
    cartProductImage.src = productImage.src;

    const cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = productQuantity;

    cartProductElement.appendChild(cartProductImage);
    cartProductElement.appendChild(cartProductCount);

    cart.appendChild(cartProductElement);
  }
}

// Добавляем обработчики событий на кнопки товаров и кнопку добавления в корзину
productElements.forEach(productElement => {
  productElement.querySelector('.product__quantity-control_inc').addEventListener('click', increaseQuantity);
  productElement.querySelector('.product__quantity-control_dec').addEventListener('click', decreaseQuantity);
  productElement.querySelector('.product__add').addEventListener('click', addToCart);
});
