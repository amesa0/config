if (!window.JST) {
  window.JST = {};
}
window.JST["onboarding/live/go"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<div class="go-container">\n  <div class="content-frame">\n    <div>\n      <h3>NOW AVAILABLE</h3>\n      <h1>\n        Ledger <b>Live</b>\n      </h1>\n      <h2>\n      The all-in-one companion app<br/>for your Ledger devices\n      </h2>\n      <p>\n      Ledger Live is a new all-in-one computer application for your Ledger device that runs on Windows, Mac and Linux.<br/>\n      With a feature-packed, yet user-friendly experience for both power users and newbies, it is designed to replace the Ledger Chrome Apps.\n      </p>\n      <a id="go" href="#go">\n        Get Ledger Live now!\n      </a>\n      <a id="skip" href="#skip">Install Ledger Live later</a>\n      <a id="support" href="#support">Contact support</a>\n    </div>\n    <img src="../../assets/images/onboarding/live/screenshot.png" height="515">\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
