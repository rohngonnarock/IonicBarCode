angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {
    $scope.scanResult = {};
    $scope.scan = function () {
        //alert("scan called");
        cordova.plugins.barcodeScanner.scan(
          function (result) {
              $scope.scanResult.resText = result.text;
              $scope.scanResult.format = result.format;
              $scope.scanResult.cancelled = result.cancelled;
              alert("We got a barcode\n" +
                    "Result: " + $scope.scanResult.resText + "\n" +
                    "Format: " + $scope.scanResult.format + "\n" +
                    "Cancelled: " + $scope.scanResult.cancelled);
          },
          function (error) {
              alert("Scanning failed: " + error);
          }
       );
    }

})
