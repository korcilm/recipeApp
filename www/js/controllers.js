angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope ,$stateParams) {
  $scope.yemekler = [
    { adi: 'Menemen',turu:'Sebzeli',resim:'https://im.haberturk.com/2019/10/04/ver1570175989/menemen-tarifi_2527947_1200x627.jpg',malzemeler:[
    { adi:'Domates',adet:'5 adet'},
    { adi:'Biber',adet:'3 adet'},
    { adi:'Sıvı Yağ',adet:'1 Kaşık'},
    { adi:'Yumurta',adet:'2 adet'},
    ],tarif:'Lorem ipsum dolor sit amet, Ut enim ad minim veniam  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', id: 0 },
    
    { adi: 'Tavuk Sote',turu:'Etli',resim:'https://iasbh.tmgrup.com.tr/4f1471/812/467/0/120/2273/1427?u=http://i.tmgrup.com.tr/sfr/2013/08/28/Orjinal/425384183856.jpg',malzemeler:[
    { adi:'Tavuk Göğsü',adet:'3 adet'},
    { adi:'Biber',adet:'3 adet'},
    { adi:'Sıvı Yağ',adet:'1 Kaşık'},
    { adi:'Soğan',adet:'2 adet'},
    ],tarif:'Lorem ipsum dolor sit amet, Ut enim ad minim veniam  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', id: 1 },

    { adi: 'Poğaça',turu:'Unlu',resim:'https://cdn.yemek.com/mnresize/940/940/uploads/2015/05/mayali-pogaca-yemekcom.jpg',malzemeler:[
    { adi:'Un',adet:'5 Bardak'},
    { adi:'Su',adet:'2 Bardak'},
    { adi:'Maya',adet:'2 adet'},
    ],tarif:'Lorem ipsum dolor sit amet, Ut enim ad minim veniam  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', id: 2 },

    { adi: 'Menemen',turu:'Sebzeli',resim:'https://im.haberturk.com/2019/10/04/ver1570175989/menemen-tarifi_2527947_1200x627.jpg',malzemeler:[
    { adi:'Domates',adet:'5 adet'},
    { adi:'Biber',adet:'3 adet'},
    { adi:'Yumurta',adet:'2 adet'},
    ],tarif:'Lorem ipsum dolor sit amet, Ut enim ad minim veniam  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', id: 3 },

    { adi: 'Menemen',turu:'Sebzeli',resim:'https://im.haberturk.com/2019/10/04/ver1570175989/menemen-tarifi_2527947_1200x627.jpg',malzemeler:[
    { adi:'Domates',adet:'5 adet'},
    { adi:'Biber',adet:'3 adet'},
    { adi:'Yumurta',adet:'2 adet'},
    ],tarif:'Lorem ipsum dolor sit amet, Ut enim ad minim veniam  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', id: 4 }
  ];

  if ($stateParams.yemekId) {
    $scope.bilgi=$scope.yemekler[$stateParams.yemekId];
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
