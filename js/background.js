// Event page (formerly known as background script)
// Get F5 presses from other tabs, send them to asoftmurmur tab


var log = console.log.bind(console)

log('A Soft Murmur keyboard: Background app running');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	log('Recieved play/pause request');
	log(request, sender, sendResponse)
	// Find A Soft Murmur
	chrome.tabs.query({'url':'http://asoftmurmur.com/*'}, function(tabs) {
		if ( tabs.length) {
			log('Found an asoftmurmur tab');
			chrome.tabs.sendMessage(tabs[0].id, 'yo start or stop the noise or whatever')
		} else {
			// TODO: Maybe open a new asoftmurmur tab?
			log('No asoftmurmur tabs are running')
		}
		console.dir(tabs)
	})
});
