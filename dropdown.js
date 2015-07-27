(function(){
	var trigger = document.getElementById('trigger');
	var menu = document.getElementById('menu');
	var menuItem = document.querySelectorAll('li.menu__item');

	trigger.addEventListener('mouseover', function(){
		menu.classList.remove('collapsed');
	}, false);

	trigger.addEventListener('mouseout', function(){
		menu.classList.add('collapsed');
	}, false);

	for (var i = 0; i < menuItem.length; i++) {
		if (menuItem[i].querySelector('ul.menu--sub')) {
			(function(i) {
				menuItem[i].addEventListener('mouseover', function() {
					menuItem[i].querySelector('ul.menu--sub').classList.remove('collapsed')
				}, false);

				menuItem[i].addEventListener('mouseout', function() {
					menuItem[i].querySelector('ul.menu--sub').classList.add('collapsed');
				}, false);
			})(i);
		}
	}
})();
