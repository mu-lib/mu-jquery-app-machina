(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-app-machina/example/light"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m];
    }));
  }
})([], this, function () {
  return function signal(data) {
    var $element = this.$element;
    var $ = $element.constructor;
    var flashing = !!data.flashing;
    var status = data.status;

    $element
      .find("input[type='radio'][value]")
      .each(function (i, el) {
        var $el = $(el);
        var val = $el.val();

        $el
          .prop("checked", val === status)
          .toggleClass("flashing", val === status && flashing);
      });
  }
});