"use strict";

console.log("hello")

var entryData = [
  {
    author: "Mark",
    photoUrl: "http://www.placecage.com/200/100",
    body: "Cage in his glory"
  },
  {
    author: "Mark",
    photoUrl: "http://www.placecage.com/220/100",
    body: "Cage in his glory"
  },
  {
    author: "Diego",
    photoUrl: "http://www.placecage.com/210/100",
    body: "Cage in his glory"
  },
  {
    author: "Deigo",
    photoUrl: "http://www.placecage.com/211/100",
    body: "Cage in his glory"
  },
  {
    author: "Andy",
    photoUrl: "http://www.placecage.com/212/100",
    body: "Cage in his glory"
  },
]

// (function(){
  angular
    .module("wdinstagram", ["ui.router"])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    .controller("InstaIndexController", [InstaIndexControllerFunction])
    .controller("InstaShowController",["$stateParams",InstaShowControllerFunction
    ])

  function RouterFunction($stateProvider){
    console.log("router working")
    $stateProvider
    .state("instasIndex",{
      url: "/instas",
      templateUrl: "js/ng-views/ng-index.html",
      controller: "InstaIndexController",
      controllerAs: "vm"
    })
    .state("instaShow",{
      url: "/instas/:id",
      templateUrl: "js/ng-views/ng-show.html",
      controller: "InstaShowController",
      controllerAs: "vm"
    })
  }

  function InstaIndexControllerFunction(){
    console.log("controller working")
    this.instas = entryData
  }

  function InstaShowControllerFunction($stateParams){
    this.insta = entryData[$stateParams.id]
  }







// })();
