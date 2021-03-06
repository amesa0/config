if (!window.JST) {
  window.JST = {};
}
window.JST["wallet/message/processing"] = function (__obj) {
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
      __out.push('<section id="wallet_message_processing_dialog">\n  <header>\n    <h1>');
    
      __out.push(__sanitize(t('wallet.message.index.title')));
    
      __out.push('</h1>\n  </header>\n  <div id="content_container">\n    <img src="../assets/images/wallet/send/ic_exchange.png" width="50" height="50" />\n    <div class="regular-text">');
    
      __out.push(__sanitize(t('wallet.message.processing.info')));
    
      __out.push('</div>\n    <div class="regular-grey-text-small">');
    
      __out.push(t('wallet.message.processing.confirm_check_1'));
    
      __out.push('</div>\n    <div class="regular-grey-text-small second-line">');
    
      __out.push(t('wallet.message.processing.confirm_check_2'));
    
      __out.push('</div>\n  </div>\n</section>\n<div class="dialog-actions-bar">\n  <div id="message_hash_label">');
    
      __out.push(__sanitize(t('wallet.message.processing.hash')));
    
      __out.push(': </div>\n  <div id="message_hash"></div>\n  <div class="left-spacer"></div>\n  <a class="cancel-rounded-button" href="#dismiss">');
    
      __out.push(__sanitize(t('common.cancel')));
    
      __out.push('</a>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
