let gelleryImgElem = document.getElementsByClassName('gellery__img')
const modalElem = document.getElementById('modal')
let modalImgElem = document.getElementsByClassName('modal__img')
let section = document.getElementsByTagName('section')

var handler = function() {
	var index = this.getAttribute('data-index')

	modalElem.style.display = 'flex'
	modalImgElem[index].style.display = 'block'
	// modal animatin
	modalImgElem[index].classList.add('animated')
	modalImgElem[index].classList.add('zoomIn')
	// background blur
	for (var i = 0; i < section.length; i++) {
		section[i].style.filter = 'blur(4.5px)'
	}
}

for (var i = 0; i < gelleryImgElem.length; i++) {
	gelleryImgElem[i].setAttribute('data-index', i)
	gelleryImgElem[i].onclick = handler
}

window.addEventListener('click', function (e) {
	if(e.target == modal) {
		modal.style.display = 'none';
		for (var i = 0; i < modalImgElem.length; i++) {
			modalImgElem[i].style.display = 'none'
		}
		for (var i = 0; i < section.length; i++) {
			section[i].style.filter = 'blur(0)'
		}
	}
})



// Media
const viber = document.getElementById('viber')
const phone = document.getElementById('phone')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	viber.removeAttribute('href')
	viber.setAttribute('href', 'viber://add?number=380969409698')
	phone.setAttribute('href', 'tel:+380969409698')
	phone.setAttribute('title', 'Позвонить сейчас')
}

// const gallery = document.getElementById('gallery')
// const windowMaxWidth = window.matchMedia('(max-width: 860px)')

// if (matchMedia) {
// 	windowMaxWidth.addListener(WidthChange)
// 	WidthChange(windowMaxWidth)
// }

// function WidthChange(windowMaxWidth) {
// 	if (windowMaxWidth.matches) {
// 		gallery.style.zoom = '80%'
// 		console.log(window.innerWidth)
// 		console.log(gallery.style.zoom)
// 	}
// }