if (!window.JST) {
  window.JST = {};
}
window.JST["wallet/settings/display/currency"] = function (__obj) {
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
      __out.push('<div class="large-table">\n  <div class="header top">\n    <div class="uppercase-section-column stretchable">');
    
      __out.push(__sanitize(t('wallet.settings.display.show_currency')));
    
      __out.push('</div>\n    <div id="switch_container"></div>\n  </div>\n  <div class="row bottom" id="exchange_rate_row">\n    <div class="regular-text-small stretchable">');
    
      __out.push(__sanitize(t('wallet.settings.display.exchange_rate')));
    
      __out.push('</div>\n    <div class="small-grey-select">\n      <select id="currencies_select"></select>\n    </div>\n  </div>\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
