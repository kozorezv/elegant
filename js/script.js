var nav = document.getElementById('nav');

function toggleNav(){ // runs when you click on menu button
	nav.classList.toggle('show');
}
function closeNav(){ // runs when you click on navigation
	nav.classList.remove('show');
}

/* toggling class between menu items 
$(document).ready(function(){
	$('.default').click(function(){
		$('.current').removeClass('current').addClass('default');
		$(this).addClass('current');
	});
});
end of */ 
	 