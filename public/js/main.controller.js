'use strict';

angular.module("MyApp")
    .controller("TimberCtrl", timberCtrl);

timberCtrl.$inject = ['$http'];



function timberCtrl($http) {
    var timber = this;

    timber.sizes = [""];
    timber.qty = [""];
    timber.woodList = [];
    timber.species = ["#2/Btr. West Red Cedar", "#1/Btr. Douglas Fir"];
    timber.texture = ["Rough-Sawn", "S4S", "Resawn/Sawsized", "Hand-Hewn", "Wire-Brushed", "Hand-Hewn & Wirebrushed"];
    timber.moisture = ["Green (+20% Moisture Content)", "Kiln-Dried"];

    timber.saveToModel = function() {
        var quoteInfo = {
            //names on left are in Model Schema, name on right are in HTML/Angular.
            customerName: timber.customerName,
            jobName: timber.jobName,
            contactName: timber.contactName,
            contactPhoneNumber: timber.phoneNumber,
            returnEmailAddress: timber.returnEmailAddress,
            quoteJobDeliveredTo: timber.quoteJobDeliveredTo,
            notes: timber.notes,
            species: timber.newSpecies,
            texture: timber.newTexture,
            moistureContent: timber.newMoisture,
            lineNumber: timber.lineNumber,
            timberSize: timber.newSize,
            qty: timber.newQuantity,
            // item: timber.newItem,
            boardFeet: timber.boardFeet,
            inStock: timber.inStock,
            pricePerBF: timber.pricePerBF,
            linePrice: timber.linePrice,
            subTotal: timber.subTotal
        };

        $http.post('/quotes', quoteInfo)
            .then(function(success) {
                console.log(success);
                timber.saveToModel = success.data._id;
                var eCtrl =  {
                    // var send = this;

                    submit: function() {
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
                            })
                    }
                };
                eCtrl.submit();
            }, function(err) {
                console.log(err);
            });
    };



    timber.addTimber = function() {
        console.log("Adding ", {
            species: timber.newSpecies,
            texture: timber.newTexture,
            moisture: timber.newMoisture,
            size: timber.newSize,
            qty: timber.newQuantity,
            item: timber.newItem,
            // line: timber.newLineNum
        });

        timber.woodList.push({
            species: timber.newSpecies,
            texture: timber.newTexture,
            moisture: timber.newMoisture,
            size: timber.newSize,
            quantity: timber.newQuantity,
            item: timber.newItem,
            // line: timber.newLineNum
        });
    };

    timber.sorter = function(prop) {
        if (timber.sort === prop) {
            timber.desc = !timber.desc;
        } else {
            timber.desc = false;
        }

        timber.sort = prop;
    };
}

// var getSpecies = function() {
// 	document.getElementById("species").innerhtml = "#2/Btr. West Red Cedar";
// 		};
