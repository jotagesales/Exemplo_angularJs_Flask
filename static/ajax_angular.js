/**
 * Created by Jotage on 30/04/15.
 */

//aplicaão angular
var app = angular.module('app',[])

//controller que será usado para fazer as requisições ajax e preecher os escopos
app.controller('controllerAngular', function ($scope, $http) {

    var init = function () {
        //estamos usando um escopo pessoa pra fins de exemplo
        $scope.pessoa = {nome:'', cidade:'', estado:''}
    }();

    //função escopo que irá fazer a consulta via ajax no servidor
    $scope.consultar = function () {

        $http.get('/consulta')
            .success(function (data) {
                //recebendo os dados do servidor e atualizando o escopo de pessoa
                $scope.pessoa = data.itens
            })
            .error(function () {
                alert(':( vihs deu ruim')
            })
    }

})
