var BackgroundManager = {
    initialize: function() {
        window.addEventListener('DOMContentLoaded', BackgroundManager.onSetup, true);
    
        // Check whether new version is installed
        chrome.runtime.onInstalled.addListener(function(details) { BackgroundManager.onInstallUpdate(details); });
    },
    
    onInstallUpdate: function(details) {
        var thisVersion = chrome.runtime.getManifest().version;
        if (details.reason == 'update' && details.previousVersion < 1.2) {
            BackgroundManager.upgrade();
        }
    },

    onSetup: function() {
        // Add event for clicking the icon in the extension bar.
        chrome.browserAction.onClicked.addListener(function() { BackgroundManager.onIconClicked(); });
    },
    
    onIconClicked: function() {
        chrome.tabs.create({ 'url': 'options.html', 'selected': true });
    },

    upgrade: function(callback) {
        // Migrate existing settings from localStorage to chrome.storage.
        chrome.storage.sync.get(function(settings) {
            if (settings.url == null && localStorage['url'] != null) {
                chrome.storage.sync.set({ url: localStorage['url'] }, function() {
                    if (callback) {
                        callback();
                    }
                });
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
    }
};

BackgroundManager.initialize();