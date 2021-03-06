if (!window.JST) {
  window.JST = {};
}
window.JST["onboarding/device/chains/message"] = function (__obj) {
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
      __out.push('<section id="dialogs_message_dialog">\n  <div class="content-container">\n    <div class="uppercase-section-title">');
    
      __out.push(__sanitize(t('onboarding.device.chains.choose_chain')));
    
      __out.push('</div>\n    <div class="regular-text-small">');
    
      __out.push(__sanitize(t('onboarding.device.chains.bitcoin_cash_warning')));
    
      __out.push('</div>\n    <div class="dialog-actions-bar">\n      <a class="cancel-rounded-button" href="#dismiss" >');
    
      __out.push(__sanitize(t('common.cancel')));
    
      __out.push('</a>\n      <div class="left-spacer"></div>\n      <a class="action-rounded-button un_split" >');
    
      __out.push(__sanitize(t('onboarding.device.chains.bitcoin_unsplit')));
    
      __out.push('</a>\n      <a class="action-rounded-button split" >');
    
      __out.push(__sanitize(t('onboarding.device.chains.bitcoin_split')));
    
      __out.push('</a>\n    </div>\n    <a id="recover" href="#recoverTool" class="greyed-action medium-indication">');
    
      __out.push(__sanitize(t('onboarding.device.chains.recover')));
    
      __out.push('</a>\n  </div>\n</section>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
