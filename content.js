function toggleAscentNotes(hide) {
    const ascentNotes = document.querySelectorAll('.ascent-body,.col-comment');
    ascentNotes.forEach(note => {
        note.style.setProperty('display', hide ? 'none' : 'block', 'important');
    });
}

function hideMountainProjectComments(hide) {
    const comments = document.querySelectorAll('.comments');
    comments.forEach(comment => {
        comment.style.display = hide ? 'none' : '';
    });
}

function hideMountainProjectPhotos(hide) {
    // Existing selector for photos
    const existingPhotoElements = document.querySelectorAll('.carousel.slide.white-text');
    existingPhotoElements.forEach(element => {
        element.style.display = hide ? 'none' : '';
    });

    // New selector for additional photo elements
    const newPhotoElements = document.querySelectorAll('.col-xs-4.col-lg-3.card-with-photo');
    newPhotoElements.forEach(element => {
        element.style.display = hide ? 'none' : '';
    });
}


function hideMountainProjectTickDescriptions(hide) {
    // Updated selector to target the inner div within the div with class 'small'
    const tickDescriptions = document.querySelectorAll('tr[id^="ticks."] td > div.small > div');
    tickDescriptions.forEach(description => {
        description.style.display = hide ? 'none' : '';
    });
}

function hideMountainProjectRouteDescriptions(hide) {
    const routeDescriptions = document.querySelectorAll('div.fr-view'); // or a more specific selector
    routeDescriptions.forEach(description => {
        // Additional check to ensure it's a route description
        if (description.previousElementSibling && description.previousElementSibling.tagName === 'H2' && description.previousElementSibling.textContent.includes('Description')) {
            description.style.display = hide ? 'none' : '';
        }
    });
}




// Function to hide or show the news sections
function toggleNews(hide) {
    const newsSections = document.querySelectorAll('.news-list-item, .side-box');
    newsSections.forEach(section => {
        section.style.display = hide ? 'none' : '';
    });
}

// Apply the hiding logic based on stored preferences
function applyPreferences() {
    chrome.storage.sync.get(['hideAscentNotes', 'hide8anuNews', 'hideMPComments', 'hideMPPhotos', 'hideMPTickDescriptions', 'hideMPRouteDescriptions'], function(data) {
        console.log("Applying preferences:", data); 
        toggleAscentNotes(data.hideAscentNotes);
        toggleNews(data.hide8anuNews);
        hideMountainProjectComments(data.hideMPComments);
        hideMountainProjectPhotos(data.hideMPPhotos)
        hideMountainProjectTickDescriptions(data.hideMPTickDescriptions);
        hideMountainProjectRouteDescriptions(data.hideMPRouteDescriptions);
    });
}

// Observer callback function
function observerCallback(mutationsList, observer) {
    // Re-apply preferences whenever DOM changes are detected
    applyPreferences();
}

// Function to start observing the DOM for changes
function startObserving() {
    const observer = new MutationObserver(observerCallback);
    const config = { childList: true, subtree: true };

    observer.observe(document.body, config);
}

// Listen for changes in storage to apply them in real-time
chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log("Storage changed:", changes); // Log for debugging
    applyPreferences();
});


// Initialize
applyPreferences();
startObserving();


