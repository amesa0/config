var OptionsManager = {
    initialize: function() {
        window.addEventListener('DOMContentLoaded', OptionsManager.onSetup, true);
    },
    
    onSetup: function() {
        var lstSpecial = document.getElementById('lstSpecial');
        lstSpecial.onchange = function() {
            // Get the selected value.
            var url = lstSpecial.options[lstSpecial.selectedIndex].value;
        
            // Set the url value.
            var txtUrl = document.getElementById('txtUrl');
            txtUrl.value = url;
            
            // Save the selection.
            OptionsManager.save();
        };
        
        var btnSave = document.getElementById('btnSave');
        btnSave.onclick = function() {
            OptionsManager.save();
        };
        
        var txtUrl = document.getElementById('txtUrl');
        txtUrl.onkeyup = function(event) {
            if (event.keyCode == 13) {
                OptionsManager.save();
            }
            else {
                OptionsManager.updateStatus('');
            }
        }
        
        // Set url, if one was previously saved.
        chrome.storage.sync.get(function(settings) {
            txtUrl.value = settings.url || '';

            // Select the drop-down option, if a url matches.
            lstSpecial.value = txtUrl.value;

            if (settings.url == null) {
                // For first-time install, show the dropdown by default.
                window.setTimeout(function() {
                    // Show drop-down.
                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('mousedown', true, true, window);
                    lstSpecial.dispatchEvent(event);
                }, 500);
            }
        });
    },
    
    save: function() {
        var txtUrl = document.getElementById('txtUrl');
        var url = txtUrl.value;
        
        // If only a domain was entered, the tab will try to load the extension path + domain, which is a bad url. So prepend http:// in this case. Otherwise, leave urls as-is.
        if ((url.toLowerCase().indexOf('.com') != -1 || url.toLowerCase().indexOf('.net') != -1 || url.toLowerCase().indexOf('.org') != -1) &&
             url.toLowerCase().indexOf('http') == -1) {
            url = 'http://' + url;
        }
        
        chrome.storage.sync.set({ url: url });

        // Select the drop-down option, if a url matches.
        lstSpecial.value = txtUrl.value;
        
        OptionsManager.updateStatus('Settings saved!');
    },
    
    updateStatus: function(text) {
        var status = document.getElementById('status');
        status.innerHTML = text;
    }
};

OptionsManager.initialize();