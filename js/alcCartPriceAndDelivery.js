
function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const deliveryPlus = document.querySelector('.delivery-plus');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
	let deliveryPrice = 200;



	let priceTotal = 0;
	priceElements.forEach(function (item) {
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	if (priceTotal > 0 && priceTotal < 600) {
		totalPriceEl.innerText = priceTotal + deliveryPrice;
	} else {
		totalPriceEl.innerText = priceTotal;
	}


	if (priceTotal > 0) {
		cartDelivery.classList.remove('none')
	} else {
		cartDelivery.classList.add('none')
	}
	//if (priceTotal > 0 && priceTotal < 600) {
	//	deliveryPlus.classList.remove('none');
	//} else {
	//	deliveryPlus.classList.add('none');
	//}

	if (priceTotal >= 600) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'бесплатно';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '200 грн.';

	}
}