'use strict';

angular.module("MyApp")
    .controller("TimberCtrl", timberCtrl);


    function timberCtrl() {
    	var timber = this;

    	timber.sizes = [""];
    	timber.qty = [""];
    	timber.woodList = [];
		timber.species = ["#2/Btr. West Red Cedar", "#1/Btr. Douglas Fir"];
		timber.texture = ["Rough-Sawn", "S4S", "Resawn/Sawsized", "Hand-Hewn", "Wire-Brushed", "Hand-Hewn & Wirebrushed"];
		timber.moisture = ["Green", "Kiln-Dried"];



		// timber.item =
		// timber.qty =
		// timber.boardFeet =
		// timber.inStock =
		// timber.price =
		// timber.linePrice =
		// timber.subTotal =



		timber.addTimber = function() {
				console.log("Adding ", {
					species: timber.newSpecies,
					texture: timber.newTexture,
					moisture: timber.newMoisture,
					size: timber.newSize,
					quantity: timber.newQuantity,
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
