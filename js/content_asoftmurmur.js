// Get start/stop requests from the background script and play the song

var log = console.log.bind(console)

log('A Soft Murmur keyboard: key responder loading');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	log('Playing/pausing');
	log(request, sender, sendResponse)
	// Quick leap into page JS world
	window.location = "javascript:$('#play-pause-button').first().click()"
})