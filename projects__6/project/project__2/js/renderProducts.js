const productsContainer = document.querySelector('#products-container')

async function getProducts() {
    const response = await fetch('./js/products.json')
    console.log(response);

    const productsArray = await response.json()
    console.log(productsArray)
    
}

getProducts()

function renderProducts(productsArray) {
    productsArray.forEach(function(item) {
        const productHTML = `<div class="col-md-6">
						<div class="card mb-4" data-id="01">
							<img class="product-img" src="img/roll/philadelphia.jpg" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">Филадельфия хит ролл</h4>
								<p><small data-items-in-box class="text-muted">6 шт.</small></p>

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__weight">180г.</div>
										<div class="price__currency">300 ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

							</div>
						</div>
					</div>`
    })
}