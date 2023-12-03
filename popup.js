document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});


    var checkboxAscentNotes = document.getElementById('toggle-8anu');
    var checkboxNews = document.getElementById('toggle-8anu-news');
    var checkboxComments = document.getElementById('toggle-mp-comments');
    var checkboxPhotos = document.getElementById('toggle-mp-photos');
    var checkboxTicks = document.getElementById('toggle-mp-ticks');
    var checkboxDesc = document.getElementById('toggle-mp-desc');

    // Load and set the stored state of the ascent notes toggle
    chrome.storage.sync.get('hideAscentNotes', function(data) {
        checkboxAscentNotes.checked = data.hideAscentNotes !== undefined ? data.hideAscentNotes : true; // Default to true if undefined
    });

    // Load and set the stored state of the news toggle
    chrome.storage.sync.get('hide8anuNews', function(data) {
        checkboxNews.checked = data.hide8anuNews !== undefined ? data.hide8anuNews : true; // Default to true if undefined
    });

    // Load and set the stored state of the comments toggle
    chrome.storage.sync.get('hideMPComments', function(data) {
        checkboxComments.checked = data.hideMPComments !== undefined ? data.hideMPComments : true; // Default to true if undefined
    });

    // Load and set the stored state of the photos toggle
    chrome.storage.sync.get('hideMPPhotos', function(data) {
        checkboxPhotos.checked = data.hideMPPhotos !== undefined ? data.hideMPPhotos : true; // Default to true if undefined
    });

    // Load and set the stored state of the tick desc toggle
    chrome.storage.sync.get('hideMPTickDescriptions', function(data) {
        checkboxTicks.checked = data.hideMPTickDescriptions !== undefined ? data.hideMPTickDescriptions : true; // Default to true if undefined
    });

    // Load and set the stored state of the desc toggle
    chrome.storage.sync.get('hideMPRouteDescriptions', function(data) {
        checkboxDesc.checked = data.hideMPRouteDescriptions !== undefined ? data.hideMPRouteDescriptions : true; // Default to true if undefined
    });

    // Save the new state of the ascent notes toggle
    checkboxAscentNotes.addEventListener('change', function() {
        chrome.storage.sync.set({ 'hideAscentNotes': checkboxAscentNotes.checked });
    });

    // Save the new state of the news toggle
    checkboxNews.addEventListener('change', function() {
        chrome.storage.sync.set({ 'hide8anuNews': checkboxNews.checked });
    });

    // Save the new state of the Comments toggle
    checkboxComments.addEventListener('change', function() {
        chrome.storage.sync.set({ 'hideMPComments': checkboxComments.checked });
    });

    // Save the new state of the Photos toggle
    checkboxPhotos.addEventListener('change', function() {
        chrome.storage.sync.set({ 'hideMPPhotos': checkboxPhotos.checked });
    });

    // Save the new state of the ticks toggle
    checkboxTicks.addEventListener('change', function() {
        chrome.storage.sync.set({ 'hideMPTickDescriptions': checkboxTicks.checked });
    });

    // Save the new state of the desc toggle
    checkboxDesc.addEventListener('change', function() {
        chrome.storage.sync.set({ 'hideMPRouteDescriptions': checkboxDesc.checked });
    });

