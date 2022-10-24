window.onload = () => {
	//Assign handlers
	let headerBurger = document.querySelector('.header__burger');
	headerBurger.onclick = headerBurgerClickHandler;

	window.onscroll = headerScrollHandler;
	headerScrollHandler();

	let cards = document.querySelectorAll('.footer__card');
	for (let card of cards) {
		card.onclick = cardClickHandler;
	}

	const menuItems = document.querySelectorAll(".nav__item");
	for (let item of menuItems) {
		item.addEventListener("click", (e) => {
			document.querySelector('.header__menu').classList.remove("header__menu_active");
			document.body.classList.remove("block-scroll");
			document.querySelector(".header__burger").classList.remove("header__burger_active");
		})
	}

	//Set up slider
	new Swiper(".screen-5__replies", {
		navigation: {
			prevEl: ".screen-5__previous-arrow",
			nextEl: ".screen-5__next-arrow"
		},
		loop: true,
		speed: 600,
		autoHeight: true
	});
}

function headerBurgerClickHandler( { target } ) {
	let headerMenu = document.querySelector('.header__menu');
	headerMenu.classList.toggle('header__menu_active');
	target.closest('.header__burger').classList.toggle('header__burger_active');

	if (headerMenu.classList.contains('header__menu_active')) {
		document.body.classList.add('block-scroll');
	}
	else {
		document.body.classList.remove('block-scroll');
	}
}

function headerScrollHandler() {
	if (window.scrollY > 0) {
		document.querySelector('.header').classList.add('header_scroll');
	}
	else {
		document.querySelector('.header').classList.remove('header_scroll');
	}
}

function cardClickHandler( { target } ) {

	target.closest('.footer__card').classList.toggle('footer__card_expanded');
	
	let cards = document.querySelectorAll('.footer__card_expanded');
	for (let card of cards) {
		if (card != target.closest('.footer__card')) {
			card.classList.remove('footer__card_expanded');
		}
	}
}