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

    const startX = productImageRect.left + window.scrollX;
    const startY = productImageRect.top + window.scrollY;
    const endX = cartRect.left + window.scrollX;
    const endY = cartRect.top + window.scrollY;

    const xDistance = endX - startX;
    const yDistance = endY - startY;

    const animationDuration = 1000; 
    const animationFrames = 60;
    const animationInterval = animationDuration / animationFrames;

    let currentX = startX;
    let currentY = startY;

    const stepX = xDistance / animationFrames;
    const stepY = yDistance / animationFrames;

    let frame = 0;

    function animate() {
      if (frame >= animationFrames) {
        clearInterval(animationIntervalId);
        document.body.removeChild(productImageClone);
      } else {
        currentX += stepX;
        currentY += stepY;
        productImageClone.style.left = currentX + 'px';
        productImageClone.style.top = currentY + 'px';
        frame++;
      }
    }

    const animationIntervalId = setInterval(animate, animationInterval);
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

