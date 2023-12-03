chrome.runtime.onInstalled.addListener(function() {
    // Set default value for the toggle
    chrome.storage.sync.set({ 'hideAscentNotes': true });
    chrome.storage.sync.set({ 'hide8anuNews': true });
    chrome.storage.sync.set({ 'hideMPComments': true });
    chrome.storage.sync.set({ 'hideMPPhotos': true });
    chrome.storage.sync.set({ 'hideMPTickDescriptions': true });
    chrome.storage.sync.set({ 'hideMPRouteDescriptions': true });
});
