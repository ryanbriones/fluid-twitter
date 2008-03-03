// ==UserScript==
// @name            Fluid Twitter
// @namespace       http://brionesandco.com/ryabriones
// @description     Streamline the Twitter interface to be nicer in a Fluid Instance
// @include         http://twitter.tld/*
// @version         0.1
// @author          Ryan Carmelo Briones
// @homepage        http://brionesandco.com/ryabriones
// ==/UserScript==

function refreshTwitter() { 
	if($F('status') == '') window.location.reload();
	else setTimeout(refreshTwitter, 30000);
}

(function() {
	$('side').hide();
	$('footer').hide();
	$('navigation').hide();

	$('container').setStyle({width: '100%'});
	$('content').setStyle({width: '100%'});
	$('header').down('img').setStyle({paddingLeft: '10px'});

	$('status').setStyle({width: '90%'});
	$$('.bar').first().down('h3').down('label').setStyle({padding: 0});
	$$('.badge').first().hide();
	setTimeout(refreshTwitter, 30000);
})();