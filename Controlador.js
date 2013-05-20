function Controlador($scope) {
    $scope.listaUsuarios = [];

    $scope.update = function (usuario) {
        $scope.listaUsuarios.push({
            nome: usuario.nome,
            email: usuario.email
        });
        $scope.usuario = {};
    };

    $scope.reset = function () {
        $scope.usuario = {};
    };

    $scope.reset();


}