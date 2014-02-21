// Event page (formerly known as background script)
// Get F5 presses from other tabs, send them to asoftmurmur tab

var log = console.log.bind(console);

log('A Soft Murmur keyboard: Background app running');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  log('Received play/pause request');
  log(request, sender, sendResponse);
  // Find A Soft Murmur
  chrome.tabs.query({'url':'http://asoftmurmur.com/*'}, function(tabs) {
    if ( tabs.length) {
      log('Found an asoftmurmur tab');
      for (var i = 0; i < tabs.length; i++) {
       	chrome.tabs.sendMessage(tabs[i].id,'yo start or stop the noise or whatever');
      }
    } else {
      // TODO: Maybe open a new asoftmurmur tab?
      log('No asoftmurmur tabs are running');
      chrome.tabs.create({
        url: 'http://asoftmurmur.com',
        active: true
      }, function(tab){
        log('Opened new a Soft Murmur tab');
      });
    }
    console.dir(tabs);
  });
});
