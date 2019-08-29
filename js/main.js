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
	viber.setAttribute('href', 'viber://add?number=+380969409698')
	phone.setAttribute('href', 'tel:+380969409698')
	phone.setAttribute('title', 'Позвонить сейчас')
}


// Atimation
// img load atimation
function loadImgAnimation() {
	const images = document.querySelectorAll('.gellery__img');

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3
	}

	function handleImg(myImg, observer) {
		myImg.forEach(myImgSingle => {
			if (myImgSingle.intersectionRatio > 0) {
				loadImage(myImgSingle.target);
			}
		})
	}

	function loadImage(image) {
		image.classList.add('animated')
		image.classList.add('bounceInUp')
		image.classList.add('slow')
		image.style.visibility = 'visible'
	}

	const observer = new IntersectionObserver(handleImg, options);

	images.forEach(img => {
		observer.observe(img);
	})
}

loadImgAnimation()


// Load about text
function loadAboutText() {
	const images = document.querySelectorAll('.about__text');

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 1
	}

	function handleImg(myImg, observer) {
		myImg.forEach(myImgSingle => {
			if (myImgSingle.intersectionRatio > 0) {
				loadImage(myImgSingle.target);
			}
		})
	}

	function loadImage(image) {
		image.classList.add('animated')
		image.classList.add('fadeIn')
		image.classList.add('slow')
		image.style.visibility = 'visible'

		typeText()
	}

	const observer = new IntersectionObserver(handleImg, options);

	images.forEach(img => {
		observer.observe(img);
	})
}

loadAboutText()



// Scroll effect
function Scroll() {
	let positionY = window.pageYOffset

	// gallery title
	const galleryTitle = document.getElementById('gallery__title')
	if (positionY > 300) {
		galleryTitle.classList.add('visible', 'animated', 'fadeInLeft', 'slow')
	}

	// footer title
	while(true) {
		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
		if (windowRelativeBottom < document.documentElement.clientHeight + 60) {
			const footerTitle = document.querySelectorAll('.footer .title')
			for (var i = 0; i < footerTitle.length; i++) {
				footerTitle[i].classList.add('animated', 'swing', 'fast')
			}
		} break
	}
}

window.addEventListener('scroll', Scroll)



// execute function only 1 time
var firstTime = false;

// Typed.js
function typeText() {
	if(!firstTime) {
		jQuery(document).ready(function () {
			var typed = new Typed('#typed', {
				stringsElement: '#typed-strings',
				typeSpeed: 6,
				backSpeed: 10,
				startDelay: 1500,
				showCursor: false
			})
		})
		firstTime = true;
	}
}


if (window.matchMedia("(max-width: 686px)").matches) {
	function typeText() {
		if(!firstTime) {
			jQuery(document).ready(function () {
				var typed = new Typed('#typed', {
					stringsElement: '#typed-strings',
					typeSpeed: 6,
					backSpeed: 10,
					startDelay: 300,
					showCursor: false
				})
			})
			firstTime = true;
		}
	}
} 