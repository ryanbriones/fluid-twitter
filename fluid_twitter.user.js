// ==UserScript==
// @name            Fluid Twitter
// @namespace       http://brionesandco.com/ryabriones
// @description     Streamline the Twitter interface to be nicer in a Fluid Instance
// @include         http://twitter.tld/*
// @version         0.1
// @author          Ryan Carmelo Briones
// @homepage        http://brionesandco.com/ryabriones
// ==/UserScript==

var FluidTwitter = Class.create({
	initialize: function() {
		this.trimUI();
		
		setTimeout(this.refreshTwitter.bind(this), 30000);
	},
	
	trimUI: function() {
	  // hide some unneccessary parts of the UI
	  $('side', 'footer', 'navigation').invoke('hide');
	  $$('.badge').first().hide();
	  
	  // alter divs to stretch with the viewport
	  $('container', 'content').invoke('setStyle', {width: '100%'});
	  $('status').setStyle({width: '90%'});

    // alter "What are you doing?" h3 to allow thin viewport
		$$('.bar').first().down('h3').down('label').setStyle({padding: 0});
	  
		$('header').down('img').setStyle({paddingLeft: '10px'});
	},
	
	refreshTwitter: function() {
	  // don't refresh if i'm scrolling
		if($$('.wrapper').first().cumulativeScrollOffset()[1] > 90) 
		  return setTimeout(this.refreshTwitter.bind(this), 30000);
		
		// don't refresh if i'm typing either
		if($F('status') != '')
		  return setTimeout(this.refreshTwitter.bind(this), 30000);
    
		window.location.reload();
	}
});

(function() {
  document.fluid_twitter = new FluidTwitter();
})();