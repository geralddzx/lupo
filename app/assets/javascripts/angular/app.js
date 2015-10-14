var lupo = angular.module("lupo", ['ngClipboard'])
  .config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("ZeroClipboard.swf")
  }]);
