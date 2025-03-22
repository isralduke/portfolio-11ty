const navMainListsToggler = document.getElementById('navMainListsToggler');
const navMainLists        = document.getElementById('navMainLists');
const mediaQuery		  = window.matchMedia('(min-width: 992px)');
const mainContent		  = document.getElementById('main');


function showNavMainLists() {
	navMainListsToggler.setAttribute('aria-expanded', 'true');
	navMainLists.classList.remove('hidden');
}
function hideNavMainLists() {
	navMainListsToggler.setAttribute('aria-expanded', 'false');
	navMainLists.classList.add('hidden');
}


navMainListsToggler.addEventListener('click', function() {
	console.log('pressed');
	if (navMainLists.classList.contains('hidden')) {
		showNavMainLists();
	} else {
		hideNavMainLists();
	}
});


// watches for windows resizing to show or hide the sidenav
if (mediaQuery.matches) {
	showNavMainLists();
} else {
	hideNavMainLists();
}

window.addEventListener('resize', function() {
	if ( window.innerWidth >= 992 ) {
		showNavMainLists();
	} else {
		hideNavMainLists();
	}
});
