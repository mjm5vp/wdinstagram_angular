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
    .module("wdinstagram", ["ui.router", "ngResource"])
    .config(["$stateProvider", RouterFunction])
    .controller("InstaIndexController", ["InstaFactory", InstaIndexControllerFunction])
    .controller("InstaNewController", ["InstaFactory", InstaNewControllerFunction])
    .controller("InstaEditController", ["InstaFactory", "$stateParams", InstaEditControllerFunction])
    .controller("InstaShowController",["InstaFactory", "$stateParams",InstaShowControllerFunction])
    .factory("InstaFactory", ["$resource", InstaFactoryFunction])

  function RouterFunction($stateProvider){
    console.log("router working")
    $stateProvider
    .state("instasIndex",{
      url: "/instas",
      templateUrl: "js/ng-views/ng-index.html",
      controller: "InstaIndexController",
      controllerAs: "vm"
    })
    .state("instaNew", {
      url: "/instas/new",
      templateUrl: "js/ng-views/new.html",
      controller: "InstaNewController",
      controllerAs: "vm"
    })
    .state("instaEdit", {
      url: "/instas/:id/edit",
      templateUrl: "js/ng-views/edit.html",
      controller: "InstaEditController",
      controllerAs: "vm"
    })
    .state("instaShow",{
      url: "/instas/:id",
      templateUrl: "js/ng-views/ng-show.html",
      controller: "InstaShowController",
      controllerAs: "vm"
    })

  }

  function InstaIndexControllerFunction(InstaFactory){
    console.log("controller working")
    this.instas = InstaFactory.query()
    console.log(this.instas)
  }

  function InstaNewControllerFunction(InstaFactory){
    this.insta = new InstaFactory()
    this.create = function(){
      this.insta.$save()
    }
  }

  function InstaShowControllerFunction(InstaFactory, $stateParams){
    this.insta = InstaFactory.get({id: $stateParams.id})
  }

  function InstaEditControllerFunction(InstaFactory, $stateParams){
    this.insta = InstaFactory.get({id: $stateParams.id})
    console.log(this.insta)
    this.update = function(){
      this.insta.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.insta.$delete({id: $stateParams.id})
    }
  }

  function InstaFactoryFunction($resource){
    return $resource("http://localhost:3000/entries/:id", {}, {
        update: { method: "PUT" }
      });
  }







// })();
