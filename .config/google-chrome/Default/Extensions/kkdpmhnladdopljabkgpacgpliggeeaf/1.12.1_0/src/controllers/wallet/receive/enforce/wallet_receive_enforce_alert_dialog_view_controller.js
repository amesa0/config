(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.WalletReceiveEnforceAlertDialogViewController = (function(_super) {
    __extends(WalletReceiveEnforceAlertDialogViewController, _super);

    WalletReceiveEnforceAlertDialogViewController.prototype.positiveLocalizableKey = 'common.yes';

    WalletReceiveEnforceAlertDialogViewController.prototype.positiveText = null;

    WalletReceiveEnforceAlertDialogViewController.prototype.negativeLocalizableKey = 'common.no';

    WalletReceiveEnforceAlertDialogViewController.prototype.negativeText = null;

    WalletReceiveEnforceAlertDialogViewController.prototype.cancelLocalizableKey = 'common.cancel';

    WalletReceiveEnforceAlertDialogViewController.prototype.titleLocalizableKey = 'common.confirmation';

    WalletReceiveEnforceAlertDialogViewController.prototype.messageLocalizableKey = null;

    WalletReceiveEnforceAlertDialogViewController.prototype.message = null;

    WalletReceiveEnforceAlertDialogViewController.prototype.showsCancelButton = false;

    WalletReceiveEnforceAlertDialogViewController.prototype.restrainsDialogWidth = true;

    WalletReceiveEnforceAlertDialogViewController.prototype.dismissAfterClick = true;

    function WalletReceiveEnforceAlertDialogViewController(_arg) {
      var message, negativeText, positiveText, _ref;
      _ref = _arg != null ? _arg : {}, message = _ref.message, positiveText = _ref.positiveText, negativeText = _ref.negativeText;
      WalletReceiveEnforceAlertDialogViewController.__super__.constructor.apply(this, arguments);
      if (message != null) {
        this.setMessageLocalizableKey(message);
      }
      if (positiveText != null) {
        this.positiveLocalizableKey = positiveText;
      }
      if (negativeText != null) {
        this.negativeLocalizableKey = negativeText;
      }
    }

    WalletReceiveEnforceAlertDialogViewController.prototype.clickPositive = function() {
      this.emit('click:positive');
      if (this.dismissAfterClick) {
        return this.dismiss();
      }
    };

    WalletReceiveEnforceAlertDialogViewController.prototype.clickNegative = function() {
      this.emit('click:negative');
      if (this.dismissAfterClick) {
        return this.dismiss();
      }
    };

    WalletReceiveEnforceAlertDialogViewController.prototype.clickCancel = function() {
      this.emit('click:cancel');
      if (this.dismissAfterClick) {
        return this.dismiss();
      }
    };

    WalletReceiveEnforceAlertDialogViewController.prototype.setMessageLocalizableKey = function(key) {
      return this.messageLocalizableKey = key;
    };

    return WalletReceiveEnforceAlertDialogViewController;

  })(ledger.common.DialogViewController);

}).call(this);
