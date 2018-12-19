(function() {
  var isHW1, isNanoS,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  isHW1 = function() {
    return !ledger.app.dongle.getFirmwareInformation().hasSecureScreenAndButton();
  };

  isNanoS = function() {
    return ledger.app.dongle.getFirmwareInformation().hasSecureScreenAndButton();
  };

  this.OnboardingLiveGoViewController = (function(_super) {
    __extends(OnboardingLiveGoViewController, _super);

    function OnboardingLiveGoViewController(params) {
      OnboardingLiveGoViewController.__super__.constructor.apply(this, arguments);
      console.log(params);
      this._next = this.constructor._next;
      this.constructor._next = null;
      this._viewPath = isNanoS() ? "/onboarding/live/go" : "/onboarding/live/go_hw1";
    }

    OnboardingLiveGoViewController.prototype.goNext = function() {
      return this._next();
    };

    OnboardingLiveGoViewController.prototype.go = function() {
      if (isNanoS()) {
        return window.open("http://ledger.com/live");
      } else {
        return window.open(t('application.support_url'));
      }
    };

    OnboardingLiveGoViewController.prototype.skip = function() {
      return this.goNext();
    };

    OnboardingLiveGoViewController.prototype.support = function() {
      if (isNanoS()) {
        return window.open(t('application.support_url'));
      } else {
        return this.goNext();
      }
    };

    OnboardingLiveGoViewController.prototype.viewPath = function() {
      return this._viewPath;
    };

    return OnboardingLiveGoViewController;

  })(ledger.common.ViewController);

  this.OnboardingLiveGoViewController.go = function(next) {
    return ledger.storage.global.live.get("live_count", function(result) {
      var count;
      count = result.live_count || 0;
      if (count < 2) {
        ledger.storage.global.live.set({
          live_count: count + 1
        });
        OnboardingLiveGoViewController._next = next;
        return ledger.app.router.go('/onboarding/live/go');
      } else {
        return next();
      }
    });
  };

}).call(this);
