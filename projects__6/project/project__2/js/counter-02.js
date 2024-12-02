// Прослушка на всем окне
window.addEventListener('click', function(event) {

    let counter;
    
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        counterWraper = event.target.closest('.counter-wrapper')
        counter = counterWraper.querySelector('[data-counter]')
    }

    //Проверяем, является элемент кнопкой plus
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText 
    }

    if (event.target.dataset.action === 'minus') {

        //проверка на товар который находится в корзине
        

        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

            //Удаляем товар из корзины
            event.target.closest('.cart-item').remove()

            toggleCartStatus()

            calcCartPriceAmdDelivery()
        }
        
    }

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAmdDelivery()
    }
})

