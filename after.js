alert('Спасибо что выбрали нас!')
document.getElementById('shaurma').onclick = function () {
	document
		.getElementById('title-shaurma')
		.scrollIntoView({ behavior: 'smooth' })
}
document.getElementById('pizza').onclick = function () {
	document.getElementById('title-pizza').scrollIntoView({ behavior: 'smooth' })
}
document.getElementById('rolls').onclick = function () {
	document.getElementById('title-roll').scrollIntoView({ behavior: 'smooth' })
}

document.getElementById('burger').onclick = function () {
	document.querySelector('header').classList.toggle('open')
}

document.querySelector('.shopping-cart').onclick = function () {
	document.querySelector('.shopping-bg').style.display = 'block'
}

document.querySelector('.cross').onclick = function () {
	document.querySelector('.shopping-bg').style.display = 'none'
}

// counter 

const minus = document.querySelectorAll('.minus')
const plus = document.querySelectorAll('.plus')

minus.forEach(button =>
	button.addEventListener('click', function (event) {
		let minusResult = event.target.nextElementSibling.textContent--
		if (minusResult <= 0) {
			event.target.nextElementSibling.textContent = 0
		}
	})
)

plus.forEach(button =>
	button.addEventListener('click', function (event) {
		let plusResult = event.target.previousElementSibling.textContent++
		if (plusResult == 6) {
			event.target.previousElementSibling.textContent = 6
		}
	})
)

// counter 

// Корзина

const products = [];
let count = 0;

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
		const card =
			event.target.closest('.menu-shawerma') ||
			event.target.closest('.menu-pizza') ||
			event.target.closest('.menu-roll')
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.menu-photo').getAttribute('src'),
			title: card.querySelector('.menu-name').innerText,
			price: card.querySelector('.menu-price').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}



		
		function cloneAndIncreaseMargin() {
			let parent = document.querySelector('.shopping-fg');
			let elem = document.querySelector('.shopping-menu');
			let clone = elem.cloneNode(true);

			var currentMargin = parseInt(clone.style.marginTop)

		
			var currentMargin = parseInt(clone.style.marginTop) || 0; // Получение текущего значения отступа
			var newMargin = currentMargin + 200; // Увеличение отступа на 20px
			clone.style.marginTop = newMargin + 'px'; // Установка нового значения отступа
			parent.appendChild(clone);// Добавление клонированного объекта на страницу
			console.log(++count)
			if(count === 3) {
				var currentMargin = parseInt(clone.style.marginTop) || 0; // Получение текущего значения отступа
				var newMargin = currentMargin + 200; // Увеличение отступа на 20px
				clone.style.marginTop = newMargin + 'px'; // Установка нового значения отступа
				parent.appendChild(clone);// Добавление клонированного объекта на страницу
			
			} else if (count === 4) { 
				var currentMargin = parseInt(clone.style.marginTop) || 0; // Получение текущего значения отступа
				var newMargin = currentMargin + 400; // Увеличение отступа на 20px
			 	clone.style.marginTop = newMargin + 'px'; // Установка нового значения отступа
			 	parent.appendChild(clone);// Добавление клонированного объекта на страницу
			 	console.log(++count)
			 } else if (count >= 5) { 
				alert('За раз нельзя заказать больше чем 4 блюд!');
				clone.style.display = 'none';
			 }


		}

		cloneAndIncreaseMargin()


		if (productInfo.counter > 0) {
			document.querySelector('.delete').style.display = 'block'
			document.querySelector('.shopping-menu').style.display = 'block'
			const image = document.getElementById('menu-photo')
			image.src = productInfo.imgSrc
			document.querySelector('.shopping-name').innerHTML = productInfo.title
			document.querySelector('.shopping-menu-price').innerHTML = productInfo.price
			document.querySelector('.count').innerHTML = productInfo.counter
			document.querySelector('.shopping-fg-text').style.display = 'none'
			document.querySelector('.total-price').style.display = 'block'
			document.querySelector('.total-number').innerHTML = productInfo.price;
			document.getElementById('count-number').innerHTML = productInfo.counter;

		}
	}
})


document.querySelector('.delete').onclick = function () {
	document.querySelector('.shopping-menu').style.display = 'none';
	document.querySelector('.shopping-fg-text').style.display = 'block';
	document.querySelector('.total-price').style.display = 'none';
	// document.querySelector('.delete').style.display = 'none';
}

// Корзина


