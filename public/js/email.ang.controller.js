

angular.module("MyApp")
    .controller("ECtrl", eCtrl);

eCtrl.$inject = ['$http'];


function eCtrl($http) {
    var send = this;

    send.submit = function() {
        console.log("Sending an Email!!");

        $http({
            method: 'POST',
            url: '/emailToLumberYard',
            data: {
                message: 'Yoooooo!!!!!'
            },
        }).then(function(res) {
                console.info(res.data);
            },

            function(err) {
                console.error(err);
            });
    };
}
