// MODAL
const modalElem = document.getElementById('modal')
const html = document.getElementsByTagName('html')[0]
let section = document.getElementsByTagName('section')
let gelleryImgElem = document.getElementsByClassName('gellery__img')
let modalImgElem = document.getElementsByClassName('modal__img')
const modalCloseBtnElem = document.getElementById('modal-close-btn')
const modalLeftBtnElem = document.getElementById('modal-left-btn')
const modalRightBtnElem = document.getElementById('modal-right-btn')

// show modal
var handler = function() {
	// clicked img
	let index = this.getAttribute('data-index')
	// modall is visible
	modalElem.classList.add('displayFlex')
	modalImgElem[index].style.display = 'block'
	// blocking scroll for mobile
	// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	// 	document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
	// }

	// modal animatin
	modalImgElem[index].classList.add('animated', 'zoomIn')
	// background blur
	for (var i = 0; i < section.length; i++) {
		section[i].style.filter = 'blur(4.5px)'
	}

	// modal slider
	//		left btn
	//				left btn disabled
	if (index < 1) {
		modalLeftBtnElem.disabled = true
	} else {
		modalLeftBtnElem.disabled = false
	}
	// left btn
	modalLeftBtnElem.addEventListener('click', function () {
		if (index > 0) {
			// hide all img
			for (var i = 0; i < modalImgElem.length; i++) {
				modalImgElem[i].style.display = 'none'
				modalImgElem[i].classList.remove('animated', 'zoomIn')
			}
			// show left img
			index--
			modalImgElem[index].style.display = 'block'
			// activate right btn
			modalRightBtnElem.disabled = false
			// disabled left
			if (index <= 0) {
				modalLeftBtnElem.disabled = true
			} else {
				modalLeftBtnElem.disabled = false
			}
		}
	})

	// disabled right btn (by _clicking_ on the last picture)
	if (index >= modalImgElem.length - 1) {
		modalRightBtnElem.disabled = true
	} else {
		modalRightBtnElem.disabled = false
	}

	// right btn
	modalRightBtnElem.addEventListener('click', function () {
		if (index < modalImgElem.length - 1) {
			// hide all img
			for (var i = 0; i < modalImgElem.length; i++) {
				modalImgElem[i].style.display = 'none'
				modalImgElem[i].classList.remove('animated', 'zoomIn')
			}
			// show right img
			index++
			modalImgElem[index].style.display = 'block'
			// activate left btn
			modalLeftBtnElem.disabled = false
			// disabled right btn (by _slide_ on the last picture)
			if (index >= modalImgElem.length - 1) {
				modalRightBtnElem.disabled = true
			} else {
				modalRightBtnElem.disabled = false
			}
		}
	})
}

// aplay function by click on img
for (var i = 0; i < gelleryImgElem.length; i++) {
	gelleryImgElem[i].setAttribute('data-index', i)
	gelleryImgElem[i].onclick = handler
}

// close menu btn
function CloseMenu () {
	modalElem.classList.remove('displayFlex')
	for (var i = 0; i < modalImgElem.length; i++) {
		modalImgElem[i].style.display = 'none'
	}
	for (var i = 0; i < section.length; i++) {
		section[i].style.filter = 'blur(0)'
	}
}

modalCloseBtnElem.addEventListener('click', CloseMenu)

// close modal by screen rotate
window.addEventListener("orientationchange", function() {
	if (window.orientation = 90) {
		CloseMenu()
	}
}, false);



// MEDIA
//		footer link for mobile
const viber = document.getElementById('viber')
const phone = document.getElementById('phone')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	viber.removeAttribute('href')
	viber.setAttribute('href', 'viber://add?number=380969409698')
	phone.setAttribute('href', 'tel:+380969409698')
	phone.setAttribute('title', 'Позвонить сейчас')
	// modal mobile btn
	modalLeftBtnElem.classList.add('modal-mobile-btn')
	modalRightBtnElem.classList.add('modal-mobile-btn')
}


// ANIMATION
//		img load atimation
function loadImgAnimation() {
	const images = document.querySelectorAll('.gellery__img');
	let options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3
	}

	if (window.matchMedia("(max-width: 525px)").matches) {
		options = {
			root: null,
			rootMargin: '-80px 0px -80px 0px',
			threshold: 0
		}
	}

	function handleImg(myImg, observer) {
		myImg.forEach(myImgSingle => {
			if (myImgSingle.intersectionRatio > 0) {
				loadImage(myImgSingle.target);
			}
		})
	}

	function loadImage(image) {
		image.classList.add('animated', 'bounceInUp', 'slow')
		image.style.visibility = 'visible'
	}

	const observer = new IntersectionObserver(handleImg, options);

	images.forEach(img => {
		observer.observe(img)
	})
}

loadImgAnimation()


// Load about text
function loadAboutText() {
	const images = document.querySelectorAll('.about__text');

	const options = {
		root: null,
		rootMargin: '0px 0px -100px 0px',
		threshold: 0
	}

	function handleImg(myImg, observer) {
		myImg.forEach(myImgSingle => {
			if (myImgSingle.intersectionRatio > 0) {
				loadImage(myImgSingle.target)
			}
		})
	}

	function loadImage(image) {
		image.classList.add('animated', 'fadeIn', 'slow')
		image.style.visibility = 'visible'

		typeText()
	}

	const observer = new IntersectionObserver(handleImg, options);

	images.forEach(img => {
		observer.observe(img)
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
		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom
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
		firstTime = true
	}
}


if (window.matchMedia("(max-width: 686px)").matches) {
	function typeText() {
		if(!firstTime) {
			jQuery(document).ready(function () {
				var typed = new Typed('#typed', {
					stringsElement: '#typed-strings',
					typeSpeed: 6,
					backSpeed: 8,
					startDelay: 300,
					showCursor: false
				})
			})
			firstTime = true
		}
	}
}

// first & last img is in focus
function firstLastImg() {
	if(gelleryImgElem[1].classList.contains('Focus') === true || gelleryImgElem[gelleryImgElem.length - 1].classList.contains('Focus') === true) {
		gelleryImgElem[0].classList.add('noFocus')
		gelleryImgElem[gelleryImgElem.length - 2].classList.add('noFocus')
	} else {
		gelleryImgElem[0].classList.remove('noFocus')
		gelleryImgElem[gelleryImgElem.length - 2].classList.remove('noFocus')
	}
}

firstLastImg()

// Focus img that in the middel of screen
if (window.matchMedia("(max-width: 686px)").matches) {
	const targets = document.querySelectorAll('.gellery__img')

	// firstly - all img is noFocus
	for (var i = 0; i < targets.length; i++) {
		targets[i].classList.add('noFocus')
	}

	const lazyLoad = target => {
		// load options
		var options = {
			root: null,
			rootMargin: '-50% 0px -50% 0px',
			threshold: 0
		}

		// the event when img in the middel of screen
		var callback = function(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting == true) {
					const img = entry.target
					img.classList.add('Focus')
					img.classList.remove('noFocus')
				} else if (entry.isIntersecting == false) {
					const img = entry.target
					img.classList.remove('Focus')
					img.classList.add('noFocus')
				}
				firstLastImg()
			});
		};
		var observer = new IntersectionObserver(callback, options);
		observer.observe(target)
	};

	targets.forEach(lazyLoad)
}