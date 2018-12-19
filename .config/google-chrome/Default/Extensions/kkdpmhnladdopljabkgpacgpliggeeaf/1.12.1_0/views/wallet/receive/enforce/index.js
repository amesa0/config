if (!window.JST) {
  window.JST = {};
}
window.JST["wallet/receive/enforce/index"] = function (__obj) {
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
      __out.push('<div id="not_verified">\n  <section class="receive_index_dialog">\n    <header>\n      <h1>');
    
      __out.push(__sanitize(_.str.sprintf(t('wallet.receive.index.title'), ledger.config.network.plural)));
    
      __out.push('</h1>\n    </header>\n    <table class="no-table-head">\n      <tbody>\n        <tr class="no-print">\n          <td class="row-title">');
    
      __out.push(__sanitize(t('wallet.receive.index.account_to_credit')));
    
      __out.push('</td>\n          <td class="align-right">\n            <div class="regular-select">\n              <select id="accounts_select"></select>\n            </div>\n            <i class="fa fa-circle small-dot" id="color_square"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div id="please_verify">\n      <i class="fa fa-warning"></i>\n      <p>');
    
      __out.push(__sanitize(t('wallet.receive.enforce.to_receive')));
    
      __out.push('</p>\n      <p>');
    
      __out.push(__sanitize(t('wallet.receive.enforce.reveal')));
    
      __out.push('</p>\n      <a class="action-rounded-button" href="#verify">');
    
      __out.push(__sanitize(t('wallet.receive.enforce.display')));
    
      __out.push('</a>\n    </div>\n  </section>\n  <div class="dialog-actions-bar no-print">\n    <a class="more_info_link" href="#openSensitive">');
    
      __out.push(__sanitize(t('common.more_information')));
    
      __out.push('</a>\n    <div class="left-spacer"></div>\n    <a id="cancel_button" class="cancel-rounded-button" href="#dismiss">');
    
      __out.push(__sanitize(t('common.close')));
    
      __out.push('</a>\n  </div>\n</div>\n<div id="verified">\n  <section class="receive_address_dialog">\n    <header>\n      <h1>');
    
      __out.push(__sanitize(_.str.sprintf(t('wallet.receive.index.title'), ledger.config.network.plural)));
    
      __out.push('</h1>\n    </header>\n    <table class="no-table-head">\n      <tbody>\n        <tr id="amount_row">\n          <td class="row-title optional">');
    
      __out.push(__sanitize(t('wallet.defaults.operations.amount')));
    
      __out.push('</td>\n          <td class="align-right">\n            <input id="amount_input" class="large-text-input optional" placeholder="');
    
      __out.push(__sanitize(t('wallet.defaults.operations.amount')));
    
      __out.push('"/>\n            <label class="large-text-input optional">');
    
      __out.push(__sanitize(ledger.formatters.getUnitSymbol()));
    
      __out.push('</label>\n            <div class="align-right regular-grey-text-small">\n              <p class="balance-label" id="currency_container">&nbsp;</p>\n            </div>\n          </td>\n        </tr>\n        <tr class="no-border">\n          <td class="row-title">');
    
      __out.push(__sanitize(t('wallet.receive.enforce.receiver_address')));
    
      __out.push('</td>\n          <td class="align-right" id="receiver_address"></td>\n        </tr>\n      </tbody>\n    </table>\n    <div id="instruction">\n      <p>');
    
      __out.push(__sanitize(t('wallet.receive.enforce.instruction_1')));
    
      __out.push('</p>\n    </div>\n    <div id="qrcode_container">\n      <div id="qrcode_frame_frame">\n        <div id="qrcode_frame"></div>\n      </div>\n      <p class="regular-grey-text-small">');
    
      __out.push(__sanitize(t('wallet.receive.enforce.qr_code_explanation_1')));
    
      __out.push('</p>\n      <p class="regular-grey-text-small">');
    
      __out.push(__sanitize(t('wallet.receive.enforce.qr_code_explanation_2')));
    
      __out.push('</p>\n    </div>\n  </section>\n  <div class="dialog-actions-bar no-print">\n    <a class="more_info_link" href="#openSensitive">');
    
      __out.push(__sanitize(t('common.more_information')));
    
      __out.push('</a>\n    <div class="left-spacer"></div>\n    <a class="action-rounded-button" href="#mail"><i class="fa fa-envelope"></i></a>\n    <a class="action-rounded-button" href="#print"><i class="fa fa-print"></i></a>\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
