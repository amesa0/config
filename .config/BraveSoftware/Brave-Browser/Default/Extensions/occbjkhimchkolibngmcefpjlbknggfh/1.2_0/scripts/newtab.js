var NewTabManager = {
    initialize: function() {
        window.addEventListener('DOMContentLoaded', NewTabManager.load, true);
    },
    
    load: function() {
        chrome.storage.sync.get(function(settings) {
            var url = settings.url;
            if (url != null) {
                // We have a url saved.
                if (url.length == 0) {
                    // The url is empty, assume about:blank.
                    url = 'about:blank';
                }
            }
            else {
                url = 'options.html';
            }

            // Load the url.
            NewTabManager.loadUrl(url);
        });
    },
    
    loadUrl: function(url) {
        // Load a local file resource. Permissions won't allow setting a file:// url with document.location.href, so use tab.update instead.
        chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.update(tab.id, { 'url': url, 'selected': true });
        });
    }
};

NewTabManager.initialize();
