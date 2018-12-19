if (!window.JST) {
  window.JST = {};
}
window.JST["update/error"] = function (__obj) {
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
      __out.push('<div id="view_controller_content">\n  <img src="../assets/images/common/large_error.png" width="50" height="50" />\n  <div class="page-large-indication">');
    
      __out.push(_.str.sprintf(t('update.error.error_updated'), this.params.errorCode));
    
      __out.push('</div>\n  <div class="page-indication">');
    
      __out.push(t('update.error.plug_back'));
    
      __out.push('</div>\n  <div class="regular-grey-text-small">');
    
      __out.push(t('update.error.problem_persists'));
    
      __out.push('</div>\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
