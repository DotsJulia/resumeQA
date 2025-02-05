function calcCartPriceAmdDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceEl = cartWrapper.querySelectorAll('.price__currency')
    const totalPriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')

    //Общая стоимость товаров
    let priceTotal = 0;
    
    //Обходим все блоки с ценами в корзине
    priceEl.forEach(function(item) {
        //Находим количество товара
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]')

        //Добавляем стоимость товара в общую стоимость 
        priceTotal += parseInt(amountEl.innerText) * parseInt(item.innerText)
    })

    //Отображаем цену на странице
    totalPriceEl.innerText = priceTotal

    //Скрываем/Показываем стоимость доставки
    if(priceTotal > 0) {
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add('none')

    }

    //Указывам стоимость доставки
    if(priceTotal >= 600) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250'
    }

}
