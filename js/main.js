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