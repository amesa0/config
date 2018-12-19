if (!window.JST) {
  window.JST = {};
}
window.JST["onboarding/live/go_hw1"] = function (__obj) {
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
      __out.push('<div class="go-container">\n  <div class="content-frame">\n    <div>\n      <h3>NOW AVAILABLE</h3>\n      <h1>\n        Ledger <b>Live</b>\n      </h1>\n      <h2>\n      The all-in-one companion app<br />\n      for Ledger Nano S and Ledger Blue\n      </h2>\n      <p>\n      With Google soon discontinuing its Chrome Apps, we\'ve developed Ledger Live, a new all-in-one computer application for Ledger devices. Ledger Live support the Ledger Nano S and the Ledger Blue. If you are using an older Ledger device, please get in touch with Ledger Support.\n      </p>\n      <a id="go" class="larger" href="#go">\n        Contact Ledger support\n      </a>\n      <a id="skip" href="#skip">Continue using Ledger Chrome apps</a>\n    </div>\n    <img src="../../assets/images/onboarding/live/nanos.png" class="no-margin" height="533">\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
