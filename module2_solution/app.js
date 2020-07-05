(function(){

    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('tobuyController',tobuyController)
    .controller('boughtController',boughtController)
    .service('ShoppingListService',ShoppingListService);

    tobuyController.$inject=['ShoppingListService'];
    function tobuyController(ShoppingListService){
        var tobuy=this;

        tobuy.items=ShoppingListService.getItems();

        tobuy.buy=function(index){
            ShoppingListService.buyItem(index);
        };

    }

    boughtController.$inject=['ShoppingListService'];
    function boughtController(ShoppingListService){
        var bought=this;
        bought.items=ShoppingListService.getBoughtItems();
    }






    function ShoppingListService(){
        var service= this;

        var items1=[
            {name:"cokies",quantity:10},
            {name:"chocolate",quantity:5},
            {name:"chips",quantity:10},
            {name:"coke",quantity:7},
            {name:"milk",quantity:10}
        ];

        var boughtItems=[];

        service.buyItem=function(index){
            boughtItems.push(items1[index]);
            items1.splice(index,1);
        };

        service.getItems=function(){
            return items1;

        };
        service.getBoughtItems=function(){
            return boughtItems;
        };


    }
    
})();