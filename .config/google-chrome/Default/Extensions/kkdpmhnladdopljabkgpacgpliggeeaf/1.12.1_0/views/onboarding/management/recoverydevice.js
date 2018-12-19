if (!window.JST) {
  window.JST = {};
}
window.JST["onboarding/management/recoverydevice"] = function (__obj) {
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
      __out.push('<div id="content-container">\n  <div class="title-container">\n    <div class="titles">\n      <div class="page-title">');
    
      __out.push(__sanitize(t('onboarding.management.recover_my_wallet')));
    
      __out.push('</div>\n      <div class="page-subtitle">');
    
      __out.push(__sanitize(t('application.name')));
    
      __out.push('</div>\n      <div class="page-strong-indication">');
    
      __out.push(__sanitize(_.str.sprintf(t('onboarding.management.recoverydevice.recovering_on_new_wallet'), ledger.config.network.plural)));
    
      __out.push('</div>\n      <div class="page-indication">');
    
      __out.push(__sanitize(t('onboarding.management.recoverydevice.may_need_to_convert')));
    
      __out.push('</div>\n    </div>\n  </div>\n  <div class="page-content-container compact">\n    <a class="panel" href="#navigatePin">\n      <img src="../../assets/images/onboarding/management/existing_ledger_wallet.png" width="92" height="21"/>\n      <div class="title">');
    
      __out.push(__sanitize(t('onboarding.management.recoverydevice.no_its_the_same')));
    
      __out.push('</div>\n      <div class="subtitle">');
    
      __out.push(__sanitize(_.str.sprintf(t('onboarding.management.recoverydevice.i_froze_my_device'), ledger.config.network.plural)));
    
      __out.push('</div>\n    </a>\n    <a class="panel" href="#navigateConvert">\n      <img src="../../assets/images/onboarding/management/new_ledger_wallet.png" width="112" height="32"/>\n      <div class="title">');
    
      __out.push(__sanitize(t('onboarding.management.recoverydevice.yes_its_a_new')));
    
      __out.push('</div>\n      <div class="subtitle">');
    
      __out.push(__sanitize(t('onboarding.management.recoverydevice.i_have_another_empty_recovery_sheet')));
    
      __out.push('</div>\n    </a>\n  </div>\n  <div class="navigation-container">\n    <a class="back" href="#navigateRoot" id="back_button"><i class="fa fa-angle-left"></i> ');
    
      __out.push(__sanitize(t('onboarding.management.cancel')));
    
      __out.push('</a>\n  </div>\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
