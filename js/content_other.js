// Sit around and wait for people to press F5, so we can tell the background script.

var log = console.log.bind(console)

log('A Soft Murmur keys: keyboard listener loading');

var F5 = 116;

$("body").bind("keydown",function(event){
  if ( event.keyCode === F5) {
		log('F5 pressed');
		chrome.runtime.sendMessage({'action':'playtoggle'}, function(response) {

			log('Event page has responded.');
      log(response)
		});
	}
})
