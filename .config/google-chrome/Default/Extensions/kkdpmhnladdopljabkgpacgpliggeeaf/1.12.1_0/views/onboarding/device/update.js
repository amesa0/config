if (!window.JST) {
  window.JST = {};
}
window.JST["onboarding/device/update"] = function (__obj) {
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
      __out.push('<div id="content-container">\n  <div class="logo-container">\n    <img src="../../assets/images/onboarding/large_logo.png" width="191" height="96">\n  </div>\n  <div class="greyed-container">\n    <img src="../../assets/images/common/large_settings.png" width="50" height="50" />\n    <div class="black-indication">');
    
      __out.push(__sanitize(_.str.sprintf(t('onboarding.device.update.new_firmware_available'), ledger.fup.utils.versionToString(ledger.fup.versions.Nano.CurrentVersion.Os))));
    
      __out.push('</div>\n    <div class="medium-indication">');
    
      __out.push(__sanitize(t(ledger.fup.versions.Nano.CurrentVersion.WhatsNew)));
    
      __out.push('</div>\n    <div class="actions-container">\n      <a class="cancel-rounded-button" href="#notNow" id="not_now_button">');
    
      __out.push(__sanitize(t('common.later')));
    
      __out.push('</a>\n      <a class="action-rounded-button" href="#updateNow">');
    
      __out.push(__sanitize(t('common.update')));
    
      __out.push('</a>\n    </div>\n  </div>\n  <div class="actions-container">\n    <a href="#openHelpCenter" class="greyed-action medium-indication">');
    
      __out.push(__sanitize(t('onboading.common.help')));
    
      __out.push('</a>\n  </div>\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};