(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.OnboardingDeviceFirmwareViewController = (function(_super) {
    __extends(OnboardingDeviceFirmwareViewController, _super);

    function OnboardingDeviceFirmwareViewController() {
      return OnboardingDeviceFirmwareViewController.__super__.constructor.apply(this, arguments);
    }

    OnboardingDeviceFirmwareViewController.prototype.view = {
      notNowButton: "#not_now_button"
    };

    OnboardingDeviceFirmwareViewController.prototype.updateNow = function() {
      window.open("https://chrome.google.com/webstore/detail/ledger-manager/beimhnaefocolcplfimocfiaiefpkgbf");
      return window.close();
    };

    OnboardingDeviceFirmwareViewController.prototype.notNow = function() {
      return ledger.app.router.go('/onboarding/device/continue');
    };

    return OnboardingDeviceFirmwareViewController;

  })(this.OnboardingViewController);

}).call(this);
