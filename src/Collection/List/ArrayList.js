function ArrayList() {
	// super constructor
	List.call(this);

	// variables
	

	// methods declarations
		// add methods 
	this.sort = function (order) {
		for (var i = 0; i < this.toArray().length - 1; i++) {
			for (var j = i + 1; j < this.toArray().length; j++) {
				switch(order){
					case "ASCENDING":
						if (this.toArray()[i] > this.toArray()[j]) {
							var tmp = this.toArray()[i];
							this.toArray()[i] = this.toArray()[j];
							this.toArray()[j] = tmp;
						}
						break;
					case "DESCENDING":
						if (this.toArray()[i] < this.toArray()[j]) {
							var tmp = this.toArray()[i];
							this.toArray()[i] = this.toArray()[j];
							this.toArray()[j] = tmp;
						}
						break;
					default:
						break; 
				}
			}
		}
	};

	// private functions

}